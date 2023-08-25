export default function isYesterday(date: Date, n = 1): boolean {
  const curDate = new Date(); // 当前日期
  curDate.setDate(curDate.getDate() - n); // 当前日期减n天
  // 指定日期
  const tarData = date
    ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date)
    : new Date();
  return ['getFullYear', 'getMonth', 'getDate'].every((i) => curDate[i]() === tarData[i]());
}
