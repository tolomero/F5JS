const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      spellcheck: false
    },
    // Opcional: Quitar el marco estándar para que se vea más 'pro' como RunJS
    // frame: false, 
    // titleBarStyle: 'hidden'
  });

  win.loadFile('index.html');
  
  // Quita el menú superior estándar (Archivo, Editar...)
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});