const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string') return false;

  const sampleActNum = Number(sampleActivity);
  if (isNaN(sampleActNum)) return false;
  if ((sampleActNum < 1) || (sampleActNum > 15)) return false;
  return Math.log(MODERN_ACTIVITY / sampleActNum) / (0.693 / HALF_LIFE_PERIOD);

};
