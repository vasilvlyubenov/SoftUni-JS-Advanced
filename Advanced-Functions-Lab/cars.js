function solution(array) {
    const result = {};

    return array.forEach(line => {
            lineArr = line.split(' ');

            if (lineArr.includes('create') && lineArr.includes('inherit')) {
                const name = lineArr[1];
                const parent = lineArr[3];
                if (!result.hasOwnProperty(name)) {
                    result[name] = {
                        own: [],
                        inherited: [],
                    };
                }
                result[name].inherited.push(parent);
            } else if (lineArr.includes('create')) {
                const newName = lineArr[1];

                if (!result.hasOwnProperty(newName)) {
                    result[newName] = {
                        own: [],
                        inherited: [],
                    };
                }


            } else if (lineArr.includes('set')) {
                const currName = lineArr[1];
                const key = lineArr[2];
                const value = lineArr[3];
                
                result[currName].own.push(`${key}:${value}`);
            } else if (lineArr.includes('print')) {
                const printName = lineArr[1];
                const parentName = result[printName].inherited;
                let resultArr = [];

                if (result[printName].inherited.length > 0) {
                    resultArr = result[printName].own.concat(result[parentName].own);
                    if (result[parentName].inherited.length > 0) {
                        const nextParent = result[parentName].inherited;
                        resultArr = resultArr.concat(result[nextParent].own)
                    }
                } else {
                    resultArr = result[printName].own
                }
                console.log(resultArr.join(','));
            }
        });
}

solution(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']
)