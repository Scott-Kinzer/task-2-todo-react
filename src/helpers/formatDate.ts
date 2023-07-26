export const formatDate = (date: Date) => {
  try {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  } catch {
    return 'Wrong date';
  }
};
