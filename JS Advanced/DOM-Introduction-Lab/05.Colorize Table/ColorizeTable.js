function colorize() {
    const tr = document.querySelectorAll('table tr');
    for (let i = 0; i < tr.length; i++){
        if (i % 2 !== 0) {
            tr[i].style.background = 'teal';
        }
    }
}