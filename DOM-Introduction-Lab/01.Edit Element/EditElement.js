function editElement(reference, match, replacer) {
    const pattern = new RegExp(match, 'g');
    const text = reference.textContent;
    const result = text.replace(pattern, replacer)
    reference.textContent = result;
}