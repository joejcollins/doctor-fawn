//Add a menu to the sheet for convenience.

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Workspace Admin Tasks")
    .addItem("Create Groups and Members", "createGroupsAndMembers")
    .addItem("Create Shared Drives", "createSharedDrives")
    .addToUi();
}

