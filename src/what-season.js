

module.exports = function getSeason(date) {
  const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if (date === undefined) return 'Unable to determine the time of year!'
  if (Object.prototype.toString.call(date) !== "[object Date]")
    throw new Error("Error");
  const month = date.getMonth()
  return season[month]
};




