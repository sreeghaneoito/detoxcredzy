const reporter = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const screenshotDir = './e2e/features/support/screenshots';
const path = require('path');

if (fs.existsSync('./e2e/features/report')) {
  // if (fs.existsSync('./e2e/features/report/reports')) {
  //   fs.rmdirSync('./e2e/features/report/reports', {recursive: true});
  // }
  reporter.generate({
    jsonDir: './e2e/features/report/json',
    reportPath: './e2e/features/report/reports',
    metadata: {
      browser: {
        name: 'Chrome',
        version: '88',
      },
      device: 'Local test machine',
      platform: {
        name: 'Windows',
        version: '10',
      },
    },
    // customData: {
    //   title: 'Screenshots',
    //   data: [
    //     {
    //       id: 'screenshots',
    //       name: 'Screenshots',
    //       type: 'image/png',
    //       data: fs.readdirSync(screenshotDir).map(fileName => {
    //         console.log('filename', fileName);
    //         const filePath = path.join(screenshotDir, fileName);
    //         return fs.readFileSync(filePath, 'base64');
    //       }),
    //     },
    //   ],
    // },
  });
}
