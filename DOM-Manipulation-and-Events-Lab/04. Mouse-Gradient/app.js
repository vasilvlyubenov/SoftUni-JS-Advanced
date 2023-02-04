function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    
    gradient.addEventListener('mousemove', onHover);

    function onHover(event) {
        const perc = Math.floor((event.offsetX / 300) * 100);
        result.textContent = perc + '%';
    }
}