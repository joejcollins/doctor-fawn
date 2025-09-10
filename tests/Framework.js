
function assertEquals(actual, expected, msg = '') {
  if (actual !== expected) {
    throw new Error(`Assertion failed${msg ? `: ${msg}` : ''}\nExpected ${expected}, got ${actual}`);
  }
}

function runTests() {
  const tests = [test_slugify, test_sum]; // add your test functions here
  let passed = 0, failed = 0;

  tests.forEach(fn => {
    try { fn(); passed++; }
    catch (e) { failed++; Logger.log(`❌ ${fn.name}: ${e.message}`); }
  });

  const summary = `✅ ${passed} passed, ❌ ${failed} failed`;
  SpreadsheetApp.getUi().alert(summary);
  Logger.log(summary);
}