module.exports = function (content) {
  console.log("pitch loader", content);
  return content;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("do something");
};
