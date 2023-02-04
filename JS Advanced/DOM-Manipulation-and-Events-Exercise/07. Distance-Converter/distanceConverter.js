function attachEventsListeners() {
    const button = document.getElementById('convert');
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    

    const meterConv = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254,
    }

    button.addEventListener('click', convert);

    function convert() {
        const inputUnit = document.getElementById('inputUnits').value;
        const outputUnit = document.getElementById('outputUnits').value;

        const convertedNumber = (Number(input.value) * meterConv[inputUnit]) / meterConv[outputUnit];
        console.log(convertedNumber);
        output.value = convertedNumber;
    }
}