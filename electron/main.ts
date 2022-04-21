import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'

let win: BrowserWindow
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  const appURL = app.isPackaged
    ? `file://${__dirname}/index.html`
    : 'http://localhost:3000'
  win.loadURL(appURL)

  if (!app.isPackaged) {
    win.webContents.openDevTools()
  }
}

ipcMain.on('window-open', () => {
  const child = new BrowserWindow({
    parent: win,
    width: 800,
    height: 600,
  })
  const appURL = app.isPackaged
    ? `file://${__dirname}/index.html#/hello`
    : 'http://localhost:3000#/hello'
  child.loadURL(appURL)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
