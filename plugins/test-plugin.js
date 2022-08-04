/**
 * 1. webpack 加载 webpack.config.js 中的所有配置，此时会 new TestPlugin()，执行插件的 constructor
 * 2. webpack 创建 compiler 对象
 * 3. 遍历所有 plugins 中的插件，调用插件的 apply 方法
 * 4. 执行剩下的编译流程()
 */

class TestPlugin {
  constructor() {
    console.log("TestPlugin constructor");
  }

  apply(compiler) {
    console.log("TestPlugin apply");

    // environment 是同步钩子，所以需要使用 tap 注册
    compiler.hooks.environment.tap("TestPlugin", () => {
      console.log("TestPlugin environment");
    });

    // emit 是异步串行钩子
    compiler.hooks.emit.tap("TestPlugin", () => {
      console.log("TestPlugin emit 111");
    });

    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin emit 222");
        callback();
      }, 2000);
    });
    compiler.hooks.emit.tap("TestPlugin", (compilation) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("TestPlugin emit 333");
          resolve();
        }, 1000);
      });
    });

    // make 是异步并行钩子 AsyncParallelHook
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin make 111");
        callback();
      }, 3000);
    });

    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin make 222");
        callback();
      }, 1000);
    });

    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin make 333");
        callback();
      }, 2000);
    });
  }
}

module.exports = TestPlugin;
