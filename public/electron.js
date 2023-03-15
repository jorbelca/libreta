const { app, BrowserWindow, ipcMain, dialog } = require("electron")
const fs = require("fs")
const os = require("os")

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    trafficLightPosition: { x: 10, y: -10 },
    webPreferences: {
      webSecurity: true,
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: __dirname + "/preload.js",
    },
  })
  mainWindow.setBounds({
    x: 440,
    y: 225,
    width: 850,
    height: 95,
    animate: true,
  })

  mainWindow.loadURL(
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : `file://${__dirname}/../index.html`
  )

  ipcMain.on("savenewfile", (e, content) => {
    const dir = os.homedir() + "/Desktop"
    try {
      const appendContent = "\r\n" + content
      fs.appendFile(dir + "/Libreta.txt", appendContent, (err) => {
        app.quit()
        if (err) throw err
      })
      dialog.showMessageBox({
        icon: "",
        message: "Saved",
      })
    } catch (err) {
      fs.close(content, (err) => {
        if (err) throw err
      })
    }
  })
})
