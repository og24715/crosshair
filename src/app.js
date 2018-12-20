const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    transparent: true,
    frame: false,
  });

  app.dock.hide();
  mainWindow.maximize();
  mainWindow.setAlwaysOnTop(true, 'floating');
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.setFullScreenable(false);
  mainWindow.setIgnoreMouseEvents(true);

  mainWindow.loadFile('./src/index.html');
}

app.on('ready', createWindow);
