function attachEventsListeners() {
    const daysField = document.getElementById('days');
    const hoursField = document.getElementById('hours');
    const minutesField = document.getElementById('minutes');
    const secondsField = document.getElementById('seconds');
    const main = document.getElementsByTagName('main')[0];

    main.addEventListener('click', onClick);

    function onClick(event) {
        const targetId = event.target.id;

        if (targetId === 'daysBtn') {
            const dayValue = Number(daysField.value);
            hoursField.value = dayValue * 24;
            minutesField.value = dayValue * 1440;
            secondsField.value = dayValue * 86400;
        } else if (targetId === 'hoursBtn') {
            const hourValue = hoursField.value;
            daysField.value = hourValue / 24;
            minutesField.value = hourValue * 60;
            secondsField.value = hourValue * 3600;
        } else if (targetId === 'minutesBtn') {
            const minutesValue = minutesField.value;
            daysField.value = minutesValue / 1440;
            hoursField.value = minutesValue / 60;
            secondsField.value = minutesValue * 60;
        } else if (targetId === 'secondsBtn') {
            const secondsValue = secondsField.value;
            daysField.value = secondsValue / 86400;
            hoursField.value = secondsValue / 3600;
            minutesField.value = secondsValue / 60;
        }
    }
    
}