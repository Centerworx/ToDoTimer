export function getPreviousDate(days = 1, date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - days);

  return previous.toISOString().slice(0, 10);
}
