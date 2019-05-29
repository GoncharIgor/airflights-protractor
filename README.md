E2E tests for Tajawal project

Conditions that were met:
Framework: Protractor
Programming language: TypeScript
BDD: Jasmine
Page object pattern
Browsers: chrome, firefox
Screenshots for last page per spec
Reporting: Allure
Logger: Log4js
Flakiness: 3 re-runs for flaky tests

Framework installation prerequisites:
Node.js >= v.8 installed

Install framework:
1. Install protractor globally with:
npm install -g protractor
2. Navigate to your project's folder in command prompt and run:
npm i

Run the tests
1. To update selenium server with chrome driver - Run script:
npm run wd-update-chrome
2. To start tests execution - Run script:
npm run test

Generate test report:
1. After tests are finished, command should be executed in Node.js command prompt:
npm run allure-generate-report
2. Navigate to folder ./target/allure-html-report
3. Open index.html file
