export function getDate() {
  return new Date().toISOString();
}

export function getMonth() {
  let now = new Date();
  return now.getMonth() + 1;
}

export function getFormatedDate(ISODate) {
  var date = new Date(ISODate);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return dt + "/" + month + "/" + year;
}

export function getDay(ISODate) {
  var date = new Date(ISODate);
  return date.getDate();
}

export function getMonthName(month) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return months[month - 1];
}
