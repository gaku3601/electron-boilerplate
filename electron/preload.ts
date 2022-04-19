import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  openChildWindow: () => {
    ipcRenderer.send('window-open')
  },
})
