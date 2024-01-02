const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");

const spreadSheet = new SpreadSheet(10, 10, spreadSheetContainer);

exportBtn.onclick = function (e) {
    const csv = createCSV(spreadSheet);
    outputCSV(csv);
};

function createCSV(spreadSheet) {
    let csv = "";
    for (let i = 0; i < spreadSheet.spreadSheet.length; i++) {
        if (i === 0) continue;
        csv +=
            spreadSheet.spreadSheet[i]
                .filter((item) => !item.isHeader)
                .map((item) => item.data)
                .join(",") + "\r\n";
    }

    return csv;
}

function outputCSV(csv) {
    const csvObj = new Blob([csv]);
    const csvUrl = URL.createObjectURL(csvObj);

    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = "spreadsheet name.csv";
    a.click();
}
