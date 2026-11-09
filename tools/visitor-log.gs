/**
 * Visitor log for jworotikan.github.io → Google Sheets.
 *
 * Setup (once):
 * 1. Create a new Google Sheet (e.g. "Website Visitors").
 * 2. In that sheet: Extensions → Apps Script. Delete the sample code and paste this whole file. Save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy and authorise when asked.
 * 4. Copy the Web app URL (ends with /exec) and paste it into SHEET_URL in index.html.
 *
 * Newest visits appear at the top of the "Visitors" tab.
 * If you edit this script later: Deploy → Manage deployments → Edit → Version: New version.
 */

const SHEET_NAME = "Visitors";
const TIMEZONE = "Asia/Jakarta";
const FIELDS = ["ip", "city", "region", "country", "isp", "asn", "referrer", "page", "browser", "platform", "language", "screen"];
const HEADERS = ["Time (WIB)", "IP", "City", "Region", "Country", "ISP / Org", "ASN", "Came from", "Page", "Browser", "Platform", "Language", "Screen"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(5000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const sheet = getSheet_();
    const row = [Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss")].concat(
      FIELDS.map(function (k) { return clean_(data[k]); })
    );
    // newest first, right under the header
    sheet.insertRowAfter(1);
    sheet.getRange(2, 1, 1, row.length).setValues([row]);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error");
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#0b111b").setFontColor("#ffffff");
  }
  return sheet;
}

// Trim long values and neutralise spreadsheet formulas sent by a malicious visitor.
function clean_(value) {
  let s = value == null ? "" : String(value).slice(0, 300);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
