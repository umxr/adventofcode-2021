const fs = require("fs");
const path = require("path");

let count = 0;

fs.readFile(path.join(__dirname, "input.txt"), "utf8", function (err, data) {
  if (err) throw err;
  console.log("File Read");
  const inputs = data
    .split("\n")
    .filter((n) => n)
    .map((n) => Number(n));
  for (let i = 0; i < inputs.length; i++) {
    const prev = inputs[i - 1];
    const curr = inputs[i];

    if (prev < curr) {
      count++;
    }
  }
  console.log(count);
});
