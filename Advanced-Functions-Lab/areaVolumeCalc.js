function areaVolumeCalc() {
    function area() {
        return Math.abs(this.x * this.y);
    };

    function vol() {
        return Math.abs(this.x * this.y * this.z);
    };

    function solve(areaFunc, volFunc,input) {
        const parsedInput = JSON.parse(input);

        function calc(obj) {
            const volume = Math.abs(volFunc.call(obj));
            const area = Math.abs(areaFunc.call(obj));
            return {
                area,
                volume
            };
        }
        return parsedInput.map(calc);
    }

    solve(vol, area, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)

}

areaVolumeCalc()