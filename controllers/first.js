const fs = require("fs");
exports.first = async (arr1, arr2) => {
  let run = 0,
    first = 0,
    second = 1;
  const newArr = [];
  const length = arr1.length || arr2.length;
  while (run < length) {
    if (first > second) {
      newArr[run] = arr2[second];
      second += 2;
    } else {
      newArr[run] = arr1[first];
      first += 2;
    }
    run++;
  }
  let data = newArr.toString();
  fs.writeFileSync("Output1.txt", data, (err) => {
    if (err) console.log(err);
  });
};
