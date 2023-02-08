class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols  = regex;
        this.value = '';
    }

    get value () {
        return this._value;
    }

    set value(input) {
        this._elements = this._elements.map(x => input);
        this.value = input;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return this._invalidSymbols.test(this.value)
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
