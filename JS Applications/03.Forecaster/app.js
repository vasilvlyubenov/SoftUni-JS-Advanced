function attachEvents() {

    const submitBtn = document.getElementById('submit');
    const currentForecast = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const forecastDiv = document.getElementById('forecast');

    const symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    };


    submitBtn.addEventListener('click', getWeather);

    async function getWeather() {
        currentForecast.lastChild.remove();
        upcoming.lastChild.remove();
        const location = document.getElementById('location').value;
        forecastDiv.style.display = 'block';
        const errorDiv = createElement('div', null, 'error');
        errorDiv.replaceChildren();
        const locationResponse = await fetch('http://localhost:3030/jsonstore/forecaster/locations');

        const body = await locationResponse.json();

        let code = null;

        for (const bodyLocation of body) {
            if (bodyLocation.name === location) {
                code = bodyLocation.code;
            }
        }

        if (code === null) {
            errorDiv.innerHTML = '<span>Error</span>';
            currentForecast.appendChild(errorDiv);
            return;
        }


        let currentResponse = null;
        let forecastResponse = null;

        try {
            currentResponse = await currentCondition(code);
            forecastResponse = await forecastCondition(code);
        } catch (err) {
            errorDiv.innerHTML = '<span>Error</span>';
            currentForecast.appendChild(errorDiv);
        }

        const foreDiv = createElement('div', null, 'forecasts');
        const foreSpan = createElement('span', null, 'condition symbol');
        const conditionSPan = createElement('span', null, 'condition');
        foreSpan.innerHTML = `${symbols[currentResponse.forecast.condition]}`;
        const span1 = createElement('span', `${currentResponse.name}`, 'forecast-data');
        const span2 = createElement('span', null, 'forecast-data');
        span2.innerHTML = `${currentResponse.forecast.low}${symbols['Degrees']}/${currentResponse.forecast.high}${symbols['Degrees']}`;
        const span3 = createElement('span', `${currentResponse.forecast.condition}`, 'forecast-data');
        conditionSPan.appendChild(span1);
        conditionSPan.appendChild(span2);
        conditionSPan.appendChild(span3);
        foreDiv.appendChild(foreSpan);
        foreDiv.appendChild(conditionSPan);
        currentForecast.appendChild(foreDiv);
        
        const forecastInfoDiv = createElement('div', null, 'forecast-info');
        for (const line of forecastResponse.forecast) {
            const high = line.high;
            const low = line.low;
            const condition = line.condition;

            const upcomingSpan = createElement('span', null, 'upcoming');
            const symbolSpan = createElement('span', null, 'symbol');
            symbolSpan.innerHTML = `${symbols[condition]}`;
            const span1 = createElement('span', null, 'forecast-data');
            span1.innerHTML = `${low}${symbols['Degrees']}/${high}${symbols['Degrees']}`;
            const span2 = createElement('span', `${condition}`, 'forecast-data');
            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(span1);
            upcomingSpan.appendChild(span2);
            forecastInfoDiv.appendChild(upcomingSpan);
        }
        upcoming.appendChild(forecastInfoDiv);
    }

    async function currentCondition(code) {
        const todaysResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const result = await todaysResponse.json();
        return result;
    }

    async function forecastCondition(code) {
        const forecastResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const result = await forecastResponse.json();
        return result;
    }

    function createElement(element, content, className) {
        const el = document.createElement(element);

        if (content) {
            el.textContent = content;
        }

        if (className) {
            el.className = className;
        }

        return el;
    }
}

attachEvents();