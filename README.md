E2E tests for Tajawal project

### Conditions that were met:
- Framework: Protractor
- Programming language: TypeScript
- BDD: Jasmine
- Page object pattern
- Browsers: chrome, firefox
- Screenshots for last page per spec
- Reporting: Allure
- Logger: Log4js
- Flakiness: 3 re-runs for flaky tests

### Framework installation prerequisites:
Node.js >= v.8 installed

### Install framework:
1. Install protractor globally with:
```shell
npm install -g protractor
```
2. Navigate to your project's folder in command prompt and run:
```shell
npm i
```

### Run the tests
1. To update selenium server with chrome driver - Run script:
```shell
npm run wd-update-chrome
```
2. To start tests execution - Run script:
```shell
npm run test
```

### Generate test report:
1. After tests are finished, command should be executed in Node.js command prompt:
```shell
npm run allure-generate-report
```
2. Navigate to folder ./target/allure-html-report
3. Open index.html file

### Run tests in Firefox browser:
1. To update selenium server with chrome driver - Run script:
```shell
npm run wd-update-firefox
```
2. In package.json, update parameter in "test" script:
target/src/config/chrome.conf.js, => target/src/config/ff.conf.js
3. To start tests execution - Run script:
```shell
npm run test
```

### Note: 
1. Firefox browser is less stable than Chrome and additional efforts are needed for locator and timeout strategies
This may be done further, not in terms of demo
2. Don't worry to change browser name manually in package.json. In real project it has to be done dynamically by CI env. variables
