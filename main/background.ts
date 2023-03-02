import { app, dialog, ipcMain } from 'electron';
import serve from 'electron-serve';
import { writeFile } from 'fs';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //save file
  ipcMain.on('renderer/console-message', async (event, arg) => {
    const _content = arg;

    const save_file = await dialog.showSaveDialog({
      title: 'Salve o seu arquivo',
    });

    if (save_file.canceled) {
      event.reply('main/salvar-arquivo', {
        status: 400,
        content: 'Usuário cancelou a ação',
      });
    } else {
      writeFile(save_file.filePath, arg, 'utf-8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        event.reply('main/salvar-arquivo', {
          status: 200,
          content: _content,
          save_at: save_file.filePath,
        });
        console.log();
      });
    }
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
