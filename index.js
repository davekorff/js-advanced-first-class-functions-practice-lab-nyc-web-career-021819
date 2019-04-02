// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function (driver){
    if (driver.hometown === hometown)
    console.log(driver.name)
  })
}

const driversByRevenue = function(drivers) {
  newArr = [...drivers]
  newArr.sort(function(a, b){
    return a.revenue - b.revenue
  })
  return newArr
}

const driversByName = function(drivers) {
  newArr = [...drivers]
  newArr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return newArr
}

const totalRevenue = function(array) {
  const total = array.reduce((prev, cur) => prev + cur.revenue, 0);
  return total
}

const averageRevenue = function(array) {
  return totalRevenue(array)/ array.length
}
