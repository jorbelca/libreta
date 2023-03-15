const { app, BrowserWindow, ipcMain, dialog } = require("electron")
const fs = require("fs")
const os = require("os")

process.env.NODE_ENV = "develpment"

const isDev = process.env.NODE_ENV !== "production"
const isMac = process.platform === "darwin"

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    trafficLightPosition: { x: 10, y: -10 },
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: __dirname + "/preload.js",
    },
  })
  if (isDev) {
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL("http://localhost:3000")
  }

  mainWindow.loadFile(__dirname + "/index.html")

  mainWindow.setBounds({
    x: 440,
    y: 225,
    width: 850,
    height: 95,
    animate: true,
  })

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
