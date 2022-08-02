const schema = require("./schema.json");

module.exports = function (content) {
  // 获取 loader 的 options，并且对 options 的内容进行校验
  const options = this.getOptions(schema);

  const prefix = `
    /**
     * Author: ${options.author}
     */ 
  `;

  return `${prefix} \n ${content}`;
};
