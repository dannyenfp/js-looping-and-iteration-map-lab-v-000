// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(driver) { 
  return drivers.map(driver => driver + 'cool');
} 