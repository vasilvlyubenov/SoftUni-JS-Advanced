function wordsUppercase(string) {
    const pattern = /[/\w]+/g;

    const wordsMatch = string.match(pattern);

    console.log(wordsMatch.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');