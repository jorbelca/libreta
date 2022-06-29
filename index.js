const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 10, y: -10 },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js")
    },
  });
  mainWindow.setBounds({ x: 440, y: 225, width: 850, height: 95, animate: true })

  mainWindow.loadFile(path.join(__dirname, "./dist/index.html"));
  mainWindow.webContents.openDevTools()


  const createNewFile = (content) => {
    dialog
      .showSaveDialog({
        title: "Create New File",
        properties: ["showOverwriteConfirmation"],
        filters: [
          {
            name: "Markdown Files",
            extensions: ["txt"],
          },
        ],
      })
      .then(({ canceled, filePath }) => {
        if (canceled) return;

        fs.writeFile(filePath, content, (err) => {
          if (err) return;
        });
      });
  };

  ipcMain.on("savenewfile", (e, content) => {
    console.log(content);
    createNewFile(content);
  });
  ipcMain.on("saveexistingfile", (e, { path, content }) => {
    console.log(content);
    fs.writeFile(path, content, (err) => {
      if (err) return;
    });
  });
});