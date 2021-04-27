const e = require("electron");

e.app.whenReady().then(() => {
  var app = new e.BrowserWindow({
    width: 800,
    height: 600,
  });

  // app.loadURL("https://google.com");
  app.loadFile(__dirname + "/interface/index.html");

  module.exports = {
    __init() {
      console.log(require("colors"));
    },
    __exit() {
      process.exit();
    },
    __reboot() {
      app.reload();
    },
  };
});
