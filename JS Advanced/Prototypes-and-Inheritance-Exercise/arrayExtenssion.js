(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        if (Number(n)) {
            return this.slice(n);
        }
    };
    Array.prototype.take = function (n) {
        if (Number(n)) {
            return this.slice(0, n + 1);
        }
    };
    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc += curr, 0);
    };
    Array.prototype.average = function () {
        const count = this.length;
        return this.reduce((acc, curr) => acc += curr, 0) / count;
    };
})();