function focused() {
    const sectionTags = Array.from(document.querySelectorAll('div input'));

    sectionTags.forEach(el => {
        el.addEventListener('focus', () => {
            el.parentElement.classList.add('focused');
        });
        el.addEventListener('blur', () => {
            el.parentElement.classList.remove('focused');
        });
    });
}