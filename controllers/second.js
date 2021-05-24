const fs = require("fs");
exports.second = async (arr1, arr2) => {
  let run = 0,
    first = 0,
    second = 0;
  const newArr = [];
  while (run < arr1.length + arr2.length) {
    if (first > second) {
      newArr[run] = arr1[second];
      second++;
    } else {
      newArr[run] = arr2[first];
      first++;
    }
    run++;
  }
  let data = newArr.toString();
  fs.writeFileSync("Output2.txt", data, (err) => {
    if (err) console.log(err);
  });
};
