const formatDate = (inputDate) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateOfBirth = new Date(inputDate);
  const dayOfBirth = dateOfBirth.getDate();
  const monthOfBirth = dateOfBirth.getMonth() + 1;
  const yearOfBirth = dateOfBirth.getFullYear();

  const formattedDayOfBirth = dayOfBirth < 10 ? `0${dayOfBirth}` : dayOfBirth;
  const formattedMonthOfBirth =
    monthOfBirth < 10 ? `0${monthOfBirth}` : monthOfBirth;
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const today = formattedDay.toString() + formattedMonth.toString();
  const birthday =
    formattedDayOfBirth.toString() + formattedMonthOfBirth.toString();

  if (birthday === today) {
    return `🎂${formattedDay}/${formattedMonth}/${year}`;
  } else {
    return `${formattedDayOfBirth}/${formattedMonthOfBirth}/${yearOfBirth}`;
  }
};

exports.displayFormattedDate = (inputDateValue) =>{
  const displayDate = formatDate(inputDateValue)
  return displayDate
}