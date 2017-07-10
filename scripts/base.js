var calcKeypad = {
  btn_1: 1,
  btn_2: 2,
  btn_3: 3,
  btn_4: 4,
  btn_5: 5,
  btn_6: 6,
  btn_7: 7,
  btn_8: 8,
  btn_9: 9,
  btn_minus: '-',
  btn_plus: '+',
  btn_times: 'X',
  btn_divide: '/',
  btn_equals: '=',
  btn_enter: 'Enter',
  btn_cancel: 'Cancel'
};

document.getElementById("btn_1").addEventListener("click", function(e){
  console.log(calcKeypad[this.id]);
});


// for(var i = 0; i < mikesNumber.length; i++) {
//   console.log("Looop:", mikesNumber[i]);
// }

// var str = 'Garry';
//
// function setNewName(thePassedName) {
//   // var theUpdatedName = thePassedName;
//   //
//   // return theUpdatedName;
//
//   return thePassedName;
// }
//
//
// //Change 'str' to Michael
// str = setNewName('Michael');
//
// console.log("Completed Change of Name:", str);
