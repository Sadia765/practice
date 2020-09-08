// Day of Programmer is the 256th day of the year. (Year is between 1700 to 2700.)
// Given a year. Print the Day of the Programmer in the format dd.mm.yyyy (dd is date, mm is month)
// Suppose between 1700-1917, we use the Julian Calender, and from 1919 to 2700, we use the Gregorian Calender.

// During the transition from the Julian Calender to the Gregorian Calender, year 1918, the second month starts on the 14th.
// So the 32nd day of 1918 is February 1st.

// In the Julian Calender, the leap year is divisible by 4.
// In the Gregorian Calender, the leap year is either divisible by 400 OR divisible by 4 and not divisible by 100.

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  var calender = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
  var month = 1;
  var days = 0;
  var date;
  if (year <= 1917 && year >= 1700) {
    if (year % 4 == 0) {
      calender[2] = 29;
    }
  }
  else if (year == 1918) {
    calender[2] = 15;
  }
  else if (year <= 2700 && year >= 1919) {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
      calender[2] = 29;
    }
  }
  while (days + calender[month] < 256) {
    days = days + calender[month];
    month += 1;
  }
  date = (256 - days).toString();
  month = month.toString();
  year = year.toString();
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return date + '.' + month + '.' + year;
}
console.log(dayOfProgrammer(1984));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
