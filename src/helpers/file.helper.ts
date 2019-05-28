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
}
