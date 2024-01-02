const spreadSheetContainer = document.querySelector("#spreadsheet-container");

const spreadSheet = new SpreadSheet(10, 10);
spreadSheet.drawSheet(spreadSheetContainer);
