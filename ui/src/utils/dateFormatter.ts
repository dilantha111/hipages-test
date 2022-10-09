const dateTimeFomatter = (dateString: string): string => {
  const date = new Date(dateString);
  const timeStr = date.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-AU', { month: 'long' });

  return `${month} ${day} @ ${timeStr}`;
};

export { dateTimeFomatter as dateFomatter };
