class SpreadSheet {
    MAX_ROWS;
    MAX_COLS;
    spreadSheet = [];

    constructor(rows, cols, locationTag) {
        this.MAX_ROWS = rows;
        this.MAX_COLS = cols;

        for (let i = 0; i < this.MAX_ROWS; i++) {
            let spreadSheetRow = [];
            for (let j = 0; j < this.MAX_COLS; j++) {
                const cell = this.createCell(i, j);
                spreadSheetRow.push(cell);
            }
            this.spreadSheet.push(spreadSheetRow);
        }
        this.drawSheet(locationTag);
    }

    drawSheet(locationTag) {
        for (let i = 0; i < this.MAX_ROWS; i++) {
            const rowContainerEl = document.createElement("div");
            rowContainerEl.className = "cell-row";
            for (let j = 0; j < this.MAX_COLS; j++) {
                const cell = this.spreadSheet[i][j];
                rowContainerEl.append(cell.createCellEl());
            }
            locationTag.append(rowContainerEl);
        }
    }

    createCell(row, col) {
        let cellData = "";
        let isHeader = false;
        let isDisable = false;

        if (row === 0) {
            cellData = String.fromCharCode(65 + col - 1);
            isHeader = true;
            isDisable = true;
        }

        if (col === 0) {
            cellData = row;
            isHeader = true;
            isDisable = true;
        }

        if (!cellData) {
            cellData = "";
        }

        return new Cell(isHeader, isDisable, cellData, row, col, false);
    }
}
