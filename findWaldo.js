function findWaldo(arr, found) {
  arr.forEach(found);
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
    }

function actionWhenFound(currentValue, i) {
  if (currentValue === "Waldo") {
       // execute callback
       console.log("Found him at index " + i);
}
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
