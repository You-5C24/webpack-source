module.exports = function (content) {
  // content是一个Buffer数据
  console.log(content);
  return content;
};
module.exports.raw = true; // 开启 Raw Loader
