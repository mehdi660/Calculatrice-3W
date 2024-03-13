const add = (number, callback) => {
  setTimeout(() => {
    callback(number);
  }, 1000);
};

const callback = (result) => {
  console.log(result);
};

add(1, (result1) => {
  add(2, (result2) => {
    callback(result1 + result2);
  });
});
