var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var D = /** @class */ (function () {
    function D() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
        this._months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this._days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
    Object.defineProperty(D.prototype, "year", {
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        get: function () {
            return Number(this._date.getFullYear().toString().slice(-2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        get: function () {
            var monthIndex = this._date.getMonth();
            return this._months[monthIndex];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        get: function () {
            var monthIndex = this._date.getMonth();
            return this._months[monthIndex].slice(0, 3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        get: function () {
            var dayIndex = this._date.getDay() - 1;
            return this._days[dayIndex];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        get: function () {
            var dayIndex = this._date.getDay() - 1;
            return this._days[dayIndex].slice(0, 3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hours", {
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "secs", {
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    D.prototype._maskCharFormatter = function (char) {
        switch (char) {
            case 'Y':
                return String(this.year);
            case 'y':
                return String(this.yr);
            case 'M':
                return this.month;
            case 'm':
                return this.mon;
            case 'd':
                return String(this.date);
            case 'D':
                if (this.date < 10) {
                    return '0' + String(this.date);
                }
                else {
                    return String(this.date);
                }
            case '#':
                // -> 1st (date with ordinal suffix: st, nd, rd or th)
                this.date;
                return '';
            case 'H':
                if (this.hours < 10) {
                    return '0' + String(this.hours);
                }
                else {
                    return String(this.hours);
                }
            case 'h':
                return String(this.hours);
            case 'I':
                if (this.mins < 10) {
                    return '0' + String(this.mins);
                }
                else {
                    return String(this.mins);
                }
            case 'i':
                return String(this.mins);
            case 'S':
                if (this.secs < 10) {
                    return '0' + String(this.secs);
                }
                else {
                    return String(this.secs);
                }
            case 's':
                return String(this.secs);
            default:
                return char;
        }
    };
    D.prototype.format = function (str) {
        /*
        loop traverse the string,
          helper method to check for the chars:
          if pointer comes across d, D, y, Y, s, S for example,
          append to new string that value,
          and if it is '/' or '-' not matching the letters,
          then just append that literal character to the new string,
        return new string
        */
        if (str === void 0) { str = ''; }
        var formattedString = '';
        if (str === '') {
            formattedString = "".concat(this.year, " ").concat(this.month, " ").concat(this.date);
            return formattedString;
        }
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            formattedString += this._maskCharFormatter(char);
        }
        return formattedString;
    };
    return D;
}());
var a = new D();
var b = new D('6/1/2022');
var c = new D(1970, 1, 5, 0, 0, 0);
var d = new D(new Date());
console.log(a.hours);
console.log(b.date);
console.log(c.mins);
console.log(c.format('Y-M-D h:I:S'));
// console.log(d.format('h:i:s'))
