const detox = require('detox');
const {Before, BeforeAll, AfterAll, After} = require('cucumber');
const config = require('../../../package.json').detox;
const adapter = require('./adapter');
const reporter = require('multiple-cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

const screenshotDir = 'e2e/features/support/screenshots';
const sourceFolder = '/tmp';

BeforeAll(async () => {
  console.log('BeforeAll');
  await detox.init(config);
  await detox.device.launchApp({
    newInstance: true,
  });
});

Before(async context => {
  await detox.device.reloadReactNative();
  await adapter.beforeEach(context);
});

After(async context => {
  context.pickle.steps.map(j => {
    console.log('sdad', j.locations);
  });
  // console.log('awdasd', context.steps[]);
  // if (context.result.status === 'failed') {
  //   const screenshotPath = path.join(
  //     screenshotDir,
  //     `${context.pickle.name}.png`,
  //   );
  //   console.log('dfdf', screenshotPath);
  //   var screenshot = await detox.device.takeScreenshot(screenshotPath);
  //   console.log('screenshot', screenshot);
  //   await fs.copyFile(
  //     screenshot,
  //     `${screenshotDir}/${context.pickle.name}.png`,
  //     error => {
  //       if (error) {
  //         console.error(`Error moving file: ${error}`);
  //       } else {
  //         console.log('File moved successfully!');
  //       }
  //     },
  //   );
  // }

  // const fileData = await fs.readFileSync(
  //   `${screenshotDir}/${context.pickle.name}.png`,
  //   {encoding: 'base64'},
  // );
  // console.log('fsf', fileData);

  await adapter.afterEach(context);
});

AfterAll(async () => {
  // await detox.cleanup();
  await detox.device.terminateApp();
});
