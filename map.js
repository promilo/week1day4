var words = ["ground", "control", "to", "major", "tom"];

function map(list, fun){
  result = [];
  for (let item of list){
    result.push(fun(item));
  }
  console.log(result);
}

map(words, function(word) {
  return word.length;
});

console.log(words);
