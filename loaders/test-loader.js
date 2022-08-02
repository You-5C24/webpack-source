/**
 *  loader 就是一个函数
 *  当 webpack 解析资源，会调用相应的 loader 去处理
 */

module.exports = function testLoader(content, map) {
  console.log(content);
  console.log(map);
  return content;
};
