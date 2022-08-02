module.exports = function syncLoader(content, map, meta) {
  console.log("sync loader", content);
  this.callback(null, content, map, meta);
  return;
};
