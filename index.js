// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter( driver =>
      driver.toLowerCase() === string.toLowerCase()
      )
    }
findMatching('Bobby')

function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(driver => driver.slice(0,string.length) == string)
    return correctLetters
}
function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name
  })
}