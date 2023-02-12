function extensibleObject() {
    function Extensible() {};
    Extensible.prototype.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (value instanceof Function) {
                Object.getPrototypeOf(this)[key] = value;
            } else {
                this[key] = value;
            }
        });
    };

    return new Extensible();
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};
myObj.extend(template);