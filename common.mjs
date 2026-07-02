export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

export function createRevisionDates(topic, startDate) {
  const start = new Date(startDate);
  const dates = [
    new Date(start),
    addMonths(start, 1),
    addMonths(start, 3),
    addMonths(start, 6),
    addMonths(start, 12),
  ];

  dates[0].setDate(dates[0].getDate() + 7);
  return dates.map((date) => ({
    topic,

    date: date.toISOString().split("T")[0],
  }));
}

export function addMonths(date, months) {
  const d = new Date(date);
  const targetMonth = d.getMonth() + months;
  const year = d.getFullYear() + Math.floor(targetMonth / 12);
  const month = targetMonth % 12;
  return new Date(Date.UTC(year, month, d.getDate()));
}
