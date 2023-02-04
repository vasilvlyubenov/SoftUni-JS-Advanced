function listProcessor(arr) {
    let resultArr = []
    const commands = {
        'add': (element) => resultArr.push(element),
        'remove': (element) => {
            resultArr.forEach(el => {
                if (el === element) {
                    resultArr.splice(resultArr.indexOf(el), 1)
                }
                return resultArr;
            });
        },
        'print': () => console.log(resultArr.join(','))
    }

    return arr.forEach(el => {
        const [command, word] = el.split(' ');
        if (command !== 'print') {
            commands[command](word);
        } else {
            commands[command]();
        }
    })
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);