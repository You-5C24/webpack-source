console.log("hello webpack");
console.log("hello 111");

function sum(...args) {
  let result = args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  return result;
}
