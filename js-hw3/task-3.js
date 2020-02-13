'use strict'

const findBestEmployee = function(employees) {
  const arr = Object.keys(employees);
  let bestEmploye = arr[0];
  let bestEmployeTask = employees[arr[0]];
  
  for (let i = 1; i < arr.length; i++){
      if (employees[arr[i]] > bestEmployeTask){
          bestEmployeTask = employees[arr[i]];
          bestEmploye = arr[i]
      }
  }
  return bestEmploye;
};

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux