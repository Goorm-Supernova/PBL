const Row = 10; // 행 크기 선언
const Col = 10; // 열 크기 선언

// HTML의 id가 spreadsheet-container인 요소를 sheetContainer라는 변수에 할당 
const sheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");

const spreadsheet = [];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]


//셀 속성 정의(헤더여부, 비활성화 여부, 데이터, 행 및 열 인덱스, 활성 상태)
class cell_Properties{
    constructor(isheader, disabled, data, row, column, rowName, columnName, active = false){
        this.isheader = isheader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.rowName = rowName;
        this.columnName = columnName;
        this.active = active;
    }
}

exportBtn.onclick = function(e) {
    let csv = "";
    for(let i = 0 ; i < spreadsheet.length ; i ++ )
    {
        csv +=
            spreadsheet[i]
                .filter(item => !item.isheader)
                .map(item => item.data)
                .join(',') + " \r\n";
    }
    console.log('csv: ', csv);

    const csvObj = new Blob([csv])
    const csvUrl = URL.createObjectURL(csvObj);
    console.log('csvUrl', csvUrl);

    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = 'Spreadsheet name.csv';
    a.click();
}
sheetData();

// spreadsheet 배열을 초기화하고 각 셀의 데이터 설정
function sheetData() {     
    for ( let i = 0; i < Row; i++ ) {
        let spreadsheetRow = [];
        

        for ( let j = 0; j < Col; j ++) {
            
            //우선 cellData값을 빈칸으로 초기화
            let cellData = '';
            let isheader = false;
            let disabled = false;
            // j==0일 때, 즉 제일 왼쪽 위부터 아래로의 세로 열을 말한다. 
            if (j == 0) {
                cellData = i;
                isheader = true;
                disabled = true;
            }

            // i==0일 때, 즉 제일 위의 왼쪽부터 오른쪽으로의 가로 행을 말한다.
            if (i == 0) {
                cellData = alphabet[j-1]; // j가 1일때부터 A B C가 와야한다. j==1 : alphabet[0]
                isheader = true;
                disabled = true;
            }
           
             // 위의 alphabet[j-1]에서 j가 0일때 [-1]값은 없기에 defined값이 나온다.
             // 이를 없애주기 위해 아래의 코드 작성
             if(!cellData){
                cellData = "";
            }

            // cellData가 0이되는 값(i=0, j=0) 즉, sheet의 가장 왼쪽 모서리 한칸을 빈칸으로 만든다
            if (cellData ==0) {
                cellData = "";
            }
            
            const rowName = i;
            
            // 첫 빈칸 뚫기 위함
            const columnName = alphabet[j-1];
           
            // cell_Properties의 값들을 가져와 cell 변수에 할당
            const cell = new cell_Properties(isheader, disabled, cellData, i, j, rowName, columnName, false);
            
            // 현재 행의 셀에 대한 정보를 넣어준다
            spreadsheetRow.push(cell);
        }

        // 전체 시트를 행 단위로 구성을 해준다
        spreadsheet.push(spreadsheetRow);
    }
    
    drawSheet();
    // console.log(spreadsheet);
} 


// 각 셀에 대한 HTML <input>요소 생성
function createCellEl(cell) {
    const cellEl = document.createElement('input');
    cellEl.className = 'cell';
    cellEl.id = 'cell_' + cell.row + cell.column; //ex) row가 2, column이 3일때 : cellEl.id = cell_23
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if(cell. isheader){
        cellEl.classList.add("RC_header");
    }

    cellEl.onclick = () => handleCellClick(cell);
    cellEl.onchange = (e) => handleOnChange(e.target.value, cell);
    return cellEl;
}

function handleOnChange(data, cell){
    cell.data = data;
}

function handleCellClick(cell){
    clearHeaderActiveStates();

    const rowHeader = spreadsheet[cell.row][0];
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);

    rowHeaderEl.classList.add('active');
    columnHeaderEl.classList.add('active');
    //console.log('clicked cell', rowHeaderEl, columnHeaderEl);

}

// active 하이라이트 색상 속성 제거
function clearHeaderActiveStates() {
    const headers = document.querySelectorAll('.RC_header');
    headers.forEach((RC_header) => {
        RC_header.classList.remove('active');
    })
}    



function getElFromRowCol(row, col) {
    return document.querySelector("#cell_" + row + col);
}



// HTML에 spreadsheet를 렌더링
function drawSheet() {
    
    // 행의 수만큼 반복하자
    for(let i = 0 ; i < spreadsheet.length ; i ++ ){

        // 현재 행을 감싸는 div요소 생성(클래스 이름은 cell-row)
        const rowContainerEl = document.createElement("div"); 
        rowContainerEl.className = "cell-row";


        // 현재 행의 셀의 수만큼 반복하자
        for(let j = 0; j < spreadsheet[i].length ; j ++) {
            
            // 현재 행과 열에 해당하는 각각의 셀값을 변수 cell에 할당
            const cell = spreadsheet [i][j];

            // 행마다 감싸는 div 요소에 cell속성을 추가
            rowContainerEl.append(createCellEl(cell));
        }

        //HTML로 렌더링하기위해 sheetContainer에 div요소들을 넣어준다
        sheetContainer.append(rowContainerEl);
    }
}