function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));
    
    buttons.forEach(el => el.addEventListener('click', onClick));

    function onClick(event) {
        const parentElement = event.target.parentElement;
        const childDiv = parentElement.querySelector('div');
        const locked  = parentElement.querySelector('input[value="unlock"]');
        
        if (locked.checked === true) {
            const button = event.target;
            if (button.textContent === 'Show more') {
                childDiv.style.display = 'block';
                button.textContent = 'Hide it'
            } else if (button.textContent === 'Hide it') {
                childDiv.style.display = 'none';
                button.textContent = 'Show more'
            }
            
        } 
    }
}