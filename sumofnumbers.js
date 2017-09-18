//E26 Wod for Sunday 9/17
console.log("START");
let numbers = [1, 2, 3, 4, 5];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
console.log('END');

// functions
function sumFor(list) {
  //returns sum using for
  let total = 0;
  for (var value in list) {
    total += list[value];
  }
  return total;
}

function sumWhile(list) {
  //returns sum using While
  var i = 0;
  let total = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  //returns sum using recursion
  if(list.length < 1){
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1,list.length));
}

function sumTheSimpleWay(list) {
  //returns sum using underscore
  return _.reduce(list, function(r, n) {
    return r + n;
  });
}
