const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(app.getAppPath(), 'frontend', 'public', 'logo.png'),
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/login'
      : `file://${path.join(__dirname, '../build/pages/login/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
