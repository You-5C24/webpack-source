module.exports = function asyncLoader(content, map, meta) {
  const callback = this.async();

  setTimeout(() => {
    console.log("async loader", content);
    callback(null, content, map, meta);
  }, 1000);
};
