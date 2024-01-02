const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const startCharCode = "A".charCodeAt();

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

initSpreadSheet();

function initSpreadSheet() {
  for (let i = 0; i < COLS; i++) {
    let spreadSheetRow = [];
    for (let j = 0; j < ROWS; j++) {
      let cellData = "";
      let isHeader = false;

      if (j === 0) {
        cellData = i;
        isHeader = true;
      }
      if (i === 0 && j !== 0) {
        cellData = String.fromCharCode(startCharCode + j - 1);
        isHeader = true;
      }
      if (!cellData) {
        cellData = "";
      }
      const rowName = i;
      const columnName = String.fromCharCode(startCharCode + j - 1);
      const cell = new Cell(
        isHeader,
        isHeader,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadSheetRow.push(cell);
    }
    spreadsheet.push(spreadSheetRow);
  }
  drawSheet();
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onblur = () => handleCellBlur(cell);
  cellEl.onchange = (e) => handleOnChange(e.target.value, cell);
  return cellEl;
}

function handleOnChange(data, cell) {
  cell.data = data;
}

function handleCellBlur(cell) {
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];

  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.remove("active");
  rowHeaderEl.classList.remove("active");
}

function handleCellClick(cell) {
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];

  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");

  document.querySelector("#cell-status").innerHTML =
    cell.columnName + cell.rowName;
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";
    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = createCellEl(spreadsheet[i][j]);
      rowContainerEl.append(cell);
    }
    spreadSheetContainer.append(rowContainerEl);
  }
}

const exportBtn = document.querySelector("#export-btn");

exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i === 0) continue;
    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }
  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);
  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};
