
module.exports = function repeater(str, options) {

  const {
    repeatTimes = 1,
    separator = "+",
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = ''
  } = options

  const arr = Array(repeatTimes)
    .fill(str)/* ? */

  const arrAdd = Array(additionRepeatTimes)
    .fill(addition)
    .map((a, i) => i < additionRepeatTimes - 1 ? `${addition}${additionSeparator}` : `${addition}`)
    .join('')/* ? */

  return arr.map(a => `${a}${arrAdd}`).join(separator)
};
