import * as path from 'path';
import {browser} from 'protractor';

const fs = require('fs');

import {ArrayHelper} from './array.helper';

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

  public static getFoldersInThePath(incomingPath: string, provideFullPath?: boolean) {

    const folders = fs.readdirSync(incomingPath)
      .filter((folder) => {
        return this.isDirectory(path.join(incomingPath, folder));
      });

    if (!provideFullPath) {
      return folders;
    }

    return folders.map((folder) => path.join(incomingPath, folder));
  }

  public static getFilesInThePath(incomingPath: string, provideFullPath?: boolean) {

    const files = fs.readdirSync(incomingPath)
      .filter((file) => {
        return !this.isDirectory(path.join(incomingPath, file));
      });

    if (!provideFullPath) {
      return files;
    }

    return files.map((file) => path.join(incomingPath, file));
  }

  public static getRandomFileNameInThePath(incomingPath: string) {
    const files = FileHelper.getFilesInThePath(incomingPath);
    return ArrayHelper.getRandomValueFromArray(files);
  }

  public static isDirectory(incomingPath) {
    return fs.lstatSync(incomingPath).isDirectory();
  }
}
