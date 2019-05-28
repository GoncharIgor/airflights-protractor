const AllureReporter = require('jasmine-allure-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const jar = require('selenium-server-standalone-jar');
const log4js = require('log4js');
const path = require('path');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
import {browser} from 'protractor';

const allureResultsPath = path.join('./target/allure-xml-report');
const exportedFilesPath = path.join(__dirname, '../../exportedFiles');
const log4jsConfig = require('./log4js');

export const computersBaseConfig = {
  framework: 'jasmine2',
  seleniumServerJar: jar.path,
  SELENIUM_PROMISE_MANAGER: false,
  // seleniumAddress: 'http://localhost:4444/wd/hub/',
  allScriptsTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  specs: ['../tests/*.js'],
  suites: {},
  params: {
    exportedFilesPath,
    baseUrl: 'https://www.tajawal.com/en',
    proxy: 'http://10.105.0.40:8080'
  },
  onPrepare,
  onComplete
};

function onPrepare() {
  log4jsConfig.call();
  browser.logger = log4js.getLogger('BASE_LOGGER');

  browser.manage().window().setSize(1280, 1024);
  browser.manage().timeouts().implicitlyWait(3000);
  browser.waitForAngularEnabled(false);

  require('../helpers/matchers');

  // add jasmine spec reporter
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displaySuccessful: false,
      displayFailed: true,
      displayErrorMessages: true,
      displayStacktrace: true,
      displayNumber: true,
      displayDuration: true
    },
    summary: {
      displaySuccessful: true,
      displayFailed: true,
      displayErrorMessages: true,
      displayStacktrace: true,
      displayNumber: true,
      displayDuration: true
    },
    colors: {
      success: 'green',
      failure: 'red',
      pending: 'yellow'
    },
    prefixes: {
      success: '✓ ',
      failure: '✗ ',
      pending: '* '
    },
    customProcessors: []
  }));

  jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: allureResultsPath
  }));

  jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    captureOnlyFailedSpecs: false
  }));

  // efg custom reporter
  jasmine.getEnv().addReporter({
    suiteStarted: (result) => {
      browser.logger
        .info(`- - - - SUITE STARTED - - - - ${result.description}`);
    },

    specStarted: (result) => {
      browser.logger
        .info(`- - TEST SCENARIO STARTED - - ${result.description}`);
    },

    specDone: (result) => {
      browser.logger
        .info(`- - TEST SCENARIO FINISHED - - ${result.description} with result: ${result.status.toUpperCase()}`);
    }
  });
}

function onComplete() {
  browser.close();
}
