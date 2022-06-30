const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require('os');

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


  ipcMain.on("savenewfile", (e, content) => {
    const dir = os.homedir() + '/Desktop'
    try {
      const appendContent = '\r\n' + content
      fs.appendFile(dir + '/Libreta.txt', appendContent, (err) => {
        app.quit()
        if (err) throw err;
      });
    } catch (err) {
      fs.close(content, (err) => {
        if (err) throw err;
      });
    }

  })
})








  //   ipcMain.on("saveexistingfile", (e, { path, content }) => {
  //     console.log(content);
  //     fs.writeFile(path, content, (err) => {
  //       if (err) return err;
  //       return 'Guardado'
  //     });
  //   });
  // });
   // fs.open('Libreta.txt', 'wx', (err, content) => {
    //   if (err) {
    //     if (err.code === 'EEXIST') {
    //       console.error('myfile already exists');
    //       try {
    //         fs.appendFile('Libreta.txt', content, (err) => {
    //           if (err) return err;
    //           return 'Guardado'
    //         });
    //       } catch(e) {
    //         close((err) => {
    //           if (err) throw err;
    //         });

    //       }

    //     }

    //     throw err;
    //   }


    // });