
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  if (!Array.isArray(members)) return false

  const arrName = members.filter(ar => typeof ar === 'string')

  const arrFirstLater = arrName.map(name => {
    return name.trim()[0].toUpperCase()
  })

  const dreamTeam = arrFirstLater.sort().join('')
  return dreamTeam
};
