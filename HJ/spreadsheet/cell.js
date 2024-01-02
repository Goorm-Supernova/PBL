class Cell {
    constructor(isHeader, disabled, data, row, column, active = false) {
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.active = active;
    }

    createCellEl() {
        const cellEl = document.createElement("input");
        cellEl.className = "cell";
        cellEl.id = "cell_" + this.row + this.column;
        cellEl.value = this.data;
        cellEl.disabled = this.disabled;
        return cellEl;
    }
}
