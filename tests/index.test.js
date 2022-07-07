/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { D } = require('../src/index.js');

// SET UP
const testDateToday = new D();
const testDate = new D(2022, 9, 22, 3, 4, 5);
const testDate2 = new D('6/1/1982');
const testDate3 = new D(2021, 3, 30, 3, 4, 5);
const testDate4 = new D(2021, 3, 30, 12, 31, 45);
const testDate5 = new D('8/12/2025');
const testDate6 = new D('2/12/2022');
const testDate7 = new D('7/1/2022');
const testDate8 = new D('7/30/2022');

test('year method returns the full year number', () => {
  expect(testDate.year).toBe(2022);
  expect(testDate2.year).toBe(1982);
});

test('yr method returns the short year number', () => {
  expect(testDate.yr).toBe(22);
  expect(testDate2.yr).toBe(82);
});

test('month method returns the full month string', () => {
  expect(testDate.month).toBe('October');
  expect(testDate2.month).toBe('June');
});

test('mon method returns the short month string', () => {
  expect(testDate.mon).toBe('Oct');
  expect(testDate2.mon).toBe('Jun');
});

test('day method returns the full day string', () => {
  expect(testDate.day).toBe('Saturday');
  expect(testDate2.day).toBe('Tuesday');
});

test('dy method returns the short day string', () => {
  expect(testDate.dy).toBe('Sat');
  expect(testDate2.dy).toBe('Tue');
});

test('date method returns the number date of the month', () => {
  expect(testDate.date).toBe(22);
  expect(testDate2.date).toBe(1);
});

test('hours method returns the hour number', () => {
  expect(testDate.hours).toBe(3);
  expect(testDate2.hours).toBe(0);
});

test('mins method returns the minutes number', () => {
  expect(testDate.mins).toBe(4);
  expect(testDate2.mins).toBe(0);
});

test('secs method returns the seconds number', () => {
  expect(testDate.secs).toBe(5);
  expect(testDate2.secs).toBe(0);
});

test('format method returns the correctly formatted string', () => {
  expect(testDate.format('Y-M-D h:I:S')).toBe('2022-October-22 3:04:05');
  expect(testDate.format('h:i:s')).toBe('3:4:5');
  expect(testDate.format('h/i/s')).toBe('3/4/5');
  expect(testDate2.format('y-m-d H:I:S')).toBe('82-Jun-1 00:00:00');
  expect(testDate2.format()).toBe('1982 June 1');
});

test('when method returns the correctly formatted string', () => {
  expect(testDate.when()).toBe('3 months 16 days from now');
  expect(testDate2.when()).toBe('40 years 1 month 5 days ago');
  expect(testDateToday.when()).toBe('today');
  expect(testDate3.when()).toBe('1 year 3 months 24 days ago');
  expect(testDate5.when()).toBe('3 years 1 month 6 days from now');
  expect(testDate6.when()).toBe('5 months 6 days ago');
  expect(testDate7.when()).toBe('5 days ago');
  expect(testDate8.when()).toBe('24 days from now');
});

test('sentenceFormatter method returns the correctly formatted sentence, including pluralization', () => {
  expect(testDate.sentenceFormatter(3, 'year')).toBe('3 years ');
  expect(testDate2.sentenceFormatter(1, 'month')).toBe('1 month ');
  expect(testDateToday.sentenceFormatter(5, 'day')).toBe('5 days ');
});

test('_maskCharFormatter method returns the correctly formatted character', () => {
  expect(testDate._maskCharFormatter('Y')).toBe('2022');
  expect(testDate._maskCharFormatter('y')).toBe('22');
  expect(testDate._maskCharFormatter('M')).toBe('October');
  expect(testDate._maskCharFormatter('m')).toBe('Oct');
  expect(testDate2._maskCharFormatter('D')).toBe('01');
  expect(testDate._maskCharFormatter('D')).toBe('22');
  expect(testDate._maskCharFormatter('d')).toBe('22');
  expect(testDate._maskCharFormatter('H')).toBe('03');
  expect(testDate4._maskCharFormatter('H')).toBe('12');
  expect(testDate._maskCharFormatter('h')).toBe('3');
  expect(testDate._maskCharFormatter('I')).toBe('04');
  expect(testDate4._maskCharFormatter('I')).toBe('31');
  expect(testDate._maskCharFormatter('i')).toBe('4');
  expect(testDate._maskCharFormatter('S')).toBe('05');
  expect(testDate4._maskCharFormatter('S')).toBe('45');
  expect(testDate._maskCharFormatter('s')).toBe('5');
  expect(testDate._maskCharFormatter(':')).toBe(':');
  expect(testDate._maskCharFormatter('')).toBe('');
  expect(testDate._maskCharFormatter()).toBe(undefined);
});


