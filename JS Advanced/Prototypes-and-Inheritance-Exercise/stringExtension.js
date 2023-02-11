(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        } else {
            return this.toString();
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        } else {
            return this.toString();
        }
    };
    String.prototype.isEmpty = function () {
        return this.toString().length === 0 ? true : false;
    };
    String.prototype.truncate = function (n) {
        const length = this.length;
        if (n < 4) {
            return '.'.repeat(n);
        }
        if(length <= n) {
            return this.toString();
        }
        let spaceIndex = this.toString().slice(0, n-2).lastIndexOf(' ');
        if (spaceIndex === -1) {
            return this.toString().slice(0, n-2) + '...';
        }
       return this.toString().slice(0, spaceIndex) + '...';
    };
    String.format = function (str, ...params) {
        params.forEach((x, i) => {
            str = str.replace(`{${i}}`, x);
        });

        return str;
    };
})();

let str = 'the quick brown fox jumps over the lazy dog';
str = str.ensureStart('the ');
console.log(str);
str = str.ensureStart('the ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str);
