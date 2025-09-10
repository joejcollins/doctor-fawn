const GROUPS_CONFIG = {
  sheetName: 'Groups and Members',
  column: 'A',
  headerRows: 2,
  domain: 'bagbatch.co.uk',
  descriptionPrefix: 'Auto-created group for ',
};

/**
 * 
 * 
 */
function createGroupsAndMembers() {
  activateSheetByName(GROUPS_CONFIG.sheetName)
  if (!confirmAction("I want to sync Groups and Members")) {
      return; // 🚪 exit early
    }
  groupNames = readUniqueNames(cfg.sheetName, cfg.column, cfg.headerRows);
  SpreadsheetApp.getActiveSpreadsheet().toast("Groups and Members Synchronised");
}

  function readUniqueNames() {
    const sh = SpreadsheetApp.getActive().getSheetByName(sheetName);
    if (!sh) throw new Error(`Sheet not found: ${sheetName}`);

    const col = letterToColumn(columnLetter);
    const lastRow = sh.getLastRow();
    if (lastRow <= (headerRows || 0)) return [];

    const range = sh.getRange(1 + (headerRows || 0), col, lastRow - (headerRows || 0), 1);
    const values = range.getValues().flat();

    const cleaned = values
      .map(v => (typeof v === 'string' ? v.trim() : v))
      .filter(v => v); // remove blanks

    // unique (case-insensitive)
    const seen = new Set();
    const uniques = [];
    cleaned.forEach(v => {
      const k = String(v).toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        uniques.push(String(v));
      }
    });
    return uniques;
  }