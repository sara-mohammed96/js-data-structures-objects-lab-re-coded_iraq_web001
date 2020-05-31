// Write your solution in this file!
let driver={};
function updateDriverWithKeyAndValue(driverObj ,key ,value){
  let driverNew={...driverObj}
  driverNew[key]=value;
  return driverNew;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj ,key ,value){
<<<<<<< HEAD
  
  driverObj[key]=value;
  return driverObj;
}
function deleteFromDriverByKey(driverObj,key){
  let driverNew = Object.assign({},driverObj);
  delete driverNew[key];
  return driverNew;
}
function destructivelyDeleteFromDriverByKey(driverObj,key){
  delete driverObj[key];
  return driverObj;
}
=======
  let driverNew={driverObj};
  
  return driverNew;
}
>>>>>>> 9d9d9ab8e8e6a38a5e927314401ee537a05ffc04
