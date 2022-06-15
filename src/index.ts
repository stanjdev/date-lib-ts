
class D {
  _date: Date
  _months: string[]
  _days: string[]
  constructor(...args: unknown[]) {
    this._date = new Date(...args as ConstructorParameters<typeof Date>)
    this._months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this._days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }

  get year(): number {
    return this._date.getFullYear()
  }

  get yr(): number {
    return Number(this._date.getFullYear().toString().slice(-2))
  }

  get month(): string {
    const monthIndex: number = this._date.getMonth();
    return this._months[monthIndex];
  }

  get mon(): string {
    const monthIndex: number = this._date.getMonth();
    return this._months[monthIndex].slice(0, 3);
  }

  get day(): string {
    const dayIndex = this._date.getDay() - 1;
    return this._days[dayIndex];
  }

  get dy(): string {
    const dayIndex = this._date.getDay() - 1;
    return this._days[dayIndex].slice(0, 3);
  }

  get date(): number {
    return this._date.getDate();
  }

  get hours(): number {
    return this._date.getHours();
  }

  get mins(): number {
    return this._date.getMinutes();
  }

  get secs(): number {
    return this._date.getSeconds();
  }

  _maskCharFormatter(char: string): string {
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
        } else {
          return String(this.date);
        }
      case '#':
        // -> 1st (date with ordinal suffix: st, nd, rd or th)
        this.date
        return ''
      case 'H':
        if (this.hours < 10) {
          return '0' + String(this.hours);
        } else {
          return String(this.hours);
        }
      case 'h':
        return String(this.hours);
      case 'I':
        if (this.mins < 10) {
          return '0' + String(this.mins);
        } else {
          return String(this.mins);
        }
      case 'i':
        return String(this.mins);
      case 'S':
        if (this.secs < 10) {
          return '0' + String(this.secs);
        } else {
          return String(this.secs);
        }
      case 's':
        return String(this.secs);
      default:
        return char;
    }
  }

  format(str = ''): string {
    /* 
    loop traverse the string,
      helper method to check for the chars:
      if pointer comes across d, D, y, Y, s, S for example, 
      append to new string that value, 
      and if it is '/' or '-' not matching the letters, 
      then just append that literal character to the new string, 
    return new string
    */

    let formattedString = '';

    if (str === '') {
      formattedString = `${this.year} ${this.month} ${this.date}`;
      return formattedString;
    }

    for (const char of str) {
      formattedString += this._maskCharFormatter(char);
    }

    return formattedString;
  }

  when(): string {
    return ''
  }
}

const a = new D()
const b = new D('6/1/2022')
const c = new D(1970, 1, 5, 0, 0, 0)
const d = new D(new Date())

console.log(a.hours)
console.log(b.date)
console.log(c.mins)
console.log(c.format('Y-M-D h:I:S'))
console.log(d.format('h:i:s'))
