function extract(content) {
    const pattern = /\((?<word>[a-zA-Z ]*)\)/g;
    const cont = document.getElementById(content);

    return cont.textContent.match(pattern).join('; ');
}
