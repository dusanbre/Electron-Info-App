const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  //Create window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  });

  //Load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  //Load Devtools
  win.webContents.openDevTools();

  //Close window
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

//Quit when all windows are cloased
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
