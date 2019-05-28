import * as path from 'path';
import {browser} from 'protractor';

const fs = require('fs');

const exportedFilesDir = browser.params.exportedFilesPath;

export class FileHelper {

  public static writeFile(data, fileName) {

    if (!fs.existsSync(exportedFilesDir)) {
      fs.mkdirSync(exportedFilesDir);
    }

    fs.writeFile(`${exportedFilesDir}/${fileName}`, data, (err) => {
      if (err) {
        browser.logger.error(err);
      } else {
        browser.logger.info(`${fileName} file was saved`);
      }
    });
  }

  public static getFoldersInThePath(incomingPath: string, provideFullPath?: string) {

    const folders = fs.readdirSync(incomingPath)
      .filter((folder) => {
        return this.isDirectory(path.join(incomingPath, folder));
      });

    if (!provideFullPath) {
      return folders;
    }

    return folders.map((folder) => path.join(incomingPath, folder));
  }

  public static isDirectory(incomingPath) {
    return fs.lstatSync(incomingPath).isDirectory();
  }
}
