// var myarray=[25, 8, 7, 41]
// myarray.sort();
// console.log(myarray);
// myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
//     console.log("a: "+ a);
//     console.log("b: " + b);
//     console.log(a - b)
//     return a - b
// })
//
// console.log(myarray);


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  var nameA = a.name;
  var nameB = b.name;
  if (nameA < nameB){
    return -1;
  }
  if (nameA > nameB){
    return 1;
  }
  if (nameA === nameB){
    return b.age-a.age;
  }
  return 0;
})

console.log(students);
