module.exports = function (content) {
  console.log("pitch2 loader", content);
  return content;
};

module.exports.pitch = function () {
  console.log("do something2");
  return "result";
};
