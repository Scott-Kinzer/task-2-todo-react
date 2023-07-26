export function extractDates(text: string) {
  const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;

  const dates = text.match(datePattern);

  if (!dates) return '';

  return dates
    .filter((value, index, array) => array.indexOf(value) === index)
    .join(', ');
}
