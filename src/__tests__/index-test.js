jest.unmock('..');

var lint = require('..').lint;

describe('eslint CLIEngine', function() {
  it('should work with Jest\'s module system', function() {
    var report = lint();
    expect(report.results).toBeDefined();
  });
});
