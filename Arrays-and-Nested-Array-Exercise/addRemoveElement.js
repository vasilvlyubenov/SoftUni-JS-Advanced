function addREmoveELements(arr) {
    let counter = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        counter++;

        switch (arr[i]) {
            case 'add':
                result.push(counter);
                break;

            case 'remove':
                result.pop();
                break;
        }
    }

    if (result.length === 0) {
        return 'Empty';
    }

    return result.join('\n');
}

addREmoveELements(['add',
    'add',
    'add',
    'add'
]);

addREmoveELements(['add',
    'add',
    'remove',
    'add',
    'add'
]);

addREmoveELements(['remove',
    'remove',
    'remove'
]);