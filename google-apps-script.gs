const SHEET_NAME = 'Training Log';

function doPost(event) {
  const body = JSON.parse(event.postData.contents);
  const sheet = getSheet();
  sheet.appendRow([
    new Date(),
    body.type || '',
    body.date || '',
    body.week || '',
    body.day || '',
    body.exercise || '',
    body.weight || '',
    body.note || '',
    body.completed || false
  ]);
  return json({ ok: true });
}

function doGet() {
  return json({ ok: true, service: 'Flight Plan sync' });
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Saved at', 'Type', 'Date', 'Week', 'Day', 'Exercise', 'Weight (lb)', 'Note', 'Completed']);
  }
  return sheet;
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}