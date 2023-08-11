// // Code your solution in this file!
// const arr = ["driver1", "driver2", "driver3"];

// const returnFirstTwoDrivers = function (arr) {
//   const ret = arr.slice(0, 2);
//   return ret;
// };

// returnFirstTwoDrivers(arr);

// const returnLastTwoDrivers = function (arr) {
//   const ret = arr.slice(-2);
//   return ret;
// };
// console.log(returnLastTwoDrivers(arr));

// const selectingDrivers = function () {
//   return [returnFirstTwoDrivers];
// };
// const firstTwo = selectingDrivers[0](arr);
// console.log(firstTwo);

const driversArray = ["John", "Jane", "Alice", "Bob"];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectingDrivers() {
  return returnFirstTwoDrivers();
}

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
