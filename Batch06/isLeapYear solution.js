

const isLeapYear = (year) => {
  return (year % 400 === 0) && (year % 4 === 0) || (year % 100 === !0) ? true : false;
}

isLeapYear(2014);