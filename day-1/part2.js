const fs = require("fs");
const path = require("path");

function getWindowTotal(arr, index, count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += arr[index + i];
  }
  return total;
}

fs.readFile(path.join(__dirname, "input.txt"), "utf8", function (err, data) {
  if (err) throw err;
  console.log("File Read");
  const inputs = data
    .split("\n")
    .map((n) => parseInt(n))
    .filter(
      (currentVal, index, arr) =>
        getWindowTotal(arr, index, 3) > getWindowTotal(arr, index - 1, 3)
    ).length;

  console.log(inputs);
});
