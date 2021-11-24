// Calculate the years between a given date--and the current date.

export function yearsBetween(date) {
  const currentDate = new Date();
  
  const currentYear = currentDate.getFullYear();
  const currentMonthsInYear = currentDate.getMonth();
  
  const hireDate = new Date(date);
  const yearHired = hireDate.getFullYear();
  const monthHired = hireDate.getMonth();
  
  console.log(currentMonthsInYear)
  
  return Math.floor((((currentYear - yearHired) * 12) - monthHired + currentMonthsInYear) / 12)
}