# TS-JS Date Library

![npm](https://img.shields.io/npm/v/string-lib-1)
![npm bundle size](https://img.shields.io/bundlephobia/min/string-lib-1)

A simpler Date library for Javascript.

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm) to install.

```bash
npm i ts-date-library
```

[Link to npm library](https://www.npmjs.com/package/string-lib-1)

## Usage

```ts
const { D } = require('ts-date-library');
const testDate = new D(2022, 9, 22, 3, 4, 5);
const testDate2 = new D('6/1/1982');
const testDateToday = new D();

// Full year Number
testDate.year // 2022
testDate2.year // 1982

// Short year Number
testDate.yr // 22
testDate2.yr // 82

// Full month String
testDate.month // 'October'
testDate2.month // 'June'

// Short month String
testDate.mon // 'Oct'
testDate2.mon // 'Jun'

// Full day String
testDate.day // 'Saturday'
testDate2.day // 'Tuesday'

// Short day String
testDate.dy // 'Sat'
testDate2.dy // 'Tue'

// Date Number
testDate.date // 22
testDate2.date // 1

// Hour Number
testDate.hours // 3
testDate2.hours // 0

// Minute Number
testDate.mins // 4
testDate2.mins // 0

// Second Number
testDate.secs // 5
testDate2.secs // 0

// Formatted Date String Examples
testDate.format('Y-M-D h:I:S') // '2022-October-22 3:04:05'
testDate.format('h:i:s') // '3:4:5'
testDate.format('h/i/s') // '3/4/5'
testDate2.format('y-m-d H:I:S') // '82-Jun-1 00:00:00'
testDate2.format() // '1982 June 1'

// .when() function returns time difference string from a given date
const mockDate = new Date(2022, 6, 6);
testDate.when(mockDate) // '3 months 16 days from now'
testDate2.when(mockDate) // '40 years 1 month 5 days ago'
testDate3.when(mockDate) // '1 year 3 months 24 days ago'
testDate5.when(mockDate) // '3 years 1 month 6 days from now'
testDate6.when(mockDate) // '5 months 6 days ago'
testDate7.when(mockDate) // '5 days ago'
testDate8.when(mockDate) // '24 days from now'
testDateToday.when(new Date()) // 'today'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Testing

To run tests:

```bash
npm test
```

To check code test coverage:

```bash
npx jest --coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
