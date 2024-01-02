class Cell {
    constructor(row, col, active = false) {
        let cellData = "";
        let isHeader = false;
        let isDisabled = false;

        if (row === 0) {
            cellData = String.fromCharCode(65 + col - 1);
            isHeader = true;
            isDisabled = true;
        }

        if (col === 0) {
            cellData = row;
            isHeader = true;
            isDisabled = true;
        }

        if (!cellData) {
            cellData = "";
        }

        const rowName = row;
        const columnName = String.fromCharCode(65 + col - 1);

        this.isHeader = isHeader;
        this.disabled = isDisabled;
        this.data = cellData;
        this.row = row;
        this.column = col;
        this.rowName = rowName;
        this.columnName = columnName;
        this.active = active;
    }

    createCellEl() {
        const cellEl = document.createElement("input");
        cellEl.className = "cell";
        cellEl.id = "cell_" + this.row + this.column;
        cellEl.value = this.data;
        cellEl.disabled = this.disabled;

        if (this.isHeader) {
            cellEl.classList.add("header");
        }

        return cellEl;
    }
}
