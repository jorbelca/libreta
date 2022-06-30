const {
  contextBridge,
  ipcRenderer
} = require("electron");


contextBridge.exposeInMainWorld(
  "api", {
  send: (message, data) => {
    ipcRenderer.send(message, data);
  },
  on: (message, listener) => {
    ipcRenderer.on(message, listener);
  },
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }

}
);

// https://joshuaj.co.uk/blog/building-desktop-app-svelte-electron/