function deleteByEmail() {
    const text = document.querySelector('input[name="email"]').value;
    const result = document.getElementById('result');
    const table = Array.from(document.querySelectorAll('tbody tr td'));
    const check = table.find(el => el.textContent === text);

    if (check) {
        const line = check.parentElement;
        const parent = line.parentElement;
        parent.removeChild(line);
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}