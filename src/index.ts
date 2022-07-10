export class D {
  _date: Date
  _months: string[]
  _days: string[]
  constructor(...args: unknown[]) {
    this._date = new Date(...args as ConstructorParameters<typeof Date>)
    this._months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this._days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // Sunday - Saturday : 0 - 6
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
    const dayIndex = this._date.getDay();
    return this._days[dayIndex];
  }

  get dy(): string {
    const dayIndex = this._date.getDay();
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

  /**
   * secs
   * @returns {Number} Returns the seconds number
   */
  get secs(): number {
    return this._date.getSeconds();
  }

  /**
   * _maskCharFormatter
   * @param {String} char A character string
   * @returns {String} Returns the corresponding formatted year, month, day, hours, minute, second, or other character string
   */
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

  /**
   * format
   * @param {String} str A string describing how the user wants a date formatted
   * @returns {String} Returns the formatted date string with year, month, day, hours, minute, second, or other characters
   */
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

  sentenceFormatter(difference: number, string: string): string {
    if (difference === 0) {
      return '';
    }
    return `${Math.abs(difference)} ${string}${Math.abs(difference) === 1 ? '' : 's'} `;
  }

  when(now: Date = new Date()): string {
    const yearDifference = now.getFullYear() - this.year;
    const monthDifference = now.getMonth() - this._date.getMonth();
    const dayDifference = now.getDate() - this.date;

    let sentence = '';

    sentence += this.sentenceFormatter(yearDifference, 'year');
    sentence += this.sentenceFormatter(monthDifference, 'month');
    sentence += this.sentenceFormatter(dayDifference, 'day');

    if (yearDifference > 0) {
      sentence += 'ago';
    } else if (yearDifference < 0) {
      sentence += 'from now';
    } else if (monthDifference > 0) {
      sentence += 'ago';
    } else if (monthDifference < 0) {
      sentence += 'from now';
    } else if (dayDifference > 0) {
      sentence += 'ago';
    } else if (dayDifference < 0) {
      sentence += 'from now';
    }

    return sentence || 'today';
  }
}

