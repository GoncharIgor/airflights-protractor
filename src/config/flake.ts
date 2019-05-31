const protractorFlake = require('protractor-flake-custom-ts-path');

const protractorArgs = process.argv.splice(2); // skip first two passed args (node and self)

protractorFlake({
  protractorPath: 'node_modules/protractor/bin/protractor',
  maxAttempts: 3,
  parser: 'standard',
  nodeBin: 'node',
  protractorArgs,
  displayStacktrace: 'all'
}, (status, output) => {
  process.exit(status);
});
