var CLIEngine = require('eslint').CLIEngine;

function lint() {
  var cli = new CLIEngine();

  // Lint this file
  var report = cli.executeOnFiles(['index.js']);

  return report;
}

module.exports = {
  lint: lint
};
