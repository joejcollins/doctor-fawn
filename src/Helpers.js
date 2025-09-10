/**
 * Get a sheet by name safely.
 * @param {string} sheetName
 */
function activateSheetByName(sheetName) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(sheetName);
  if (!spreadSheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }
  crap = sheet.activate()
  return sheet;
}


/**
 * Ask the user to confirm. Returns true if YES, false if NO.
 */
function confirmAction(message) {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    'Confirm',
    message,
    ui.ButtonSet.YES_NO
  );
  return response === ui.Button.YES;
}