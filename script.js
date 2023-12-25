const listBtn = document.getElementById('new_add_todo');
const list = document.getElementById('list');

let listchild = [];

listBtn.addEventListener('click', createNewTodo);
function createNewTodo() {
    const item = {
        id: new Date().getTime(), 
        text: "", 
        complete: false
    }
    
    listchild.unshift(item);

    const { all_listboxEl, inputEl } = creatabc(item);
    
    list.prepend(all_listboxEl);
    // * 

	// disabled 속성 제거
	inputEl.removeAttribute('disabled');
    inputEl.focus();
	saveToLocalStorage();
}

function creatabc(item) {
    // 빈 div요소를 생성하고 all_listboxEl변수에 할당
    const all_listboxEl = document.createElement('div');

    // all_listboxEl변수에 item클래스 추가(스타일링)
    all_listboxEl.classList.add('item');

        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.value = item.text;

         // 입력필드 비활성화
        inputEl.setAttribute('disabled', '');
    
        const checkboxEl = document.createElement('input');
        checkboxEl.type = 'checkbox';
      
    const add_remove_El = document.createElement('div');
    add_remove_El.classList.add('actions');
        
        const editBtnEl = document.createElement('button');
        editBtnEl.innerText = 'edit';
        
        const removeBtnEl = document.createElement('button');
        removeBtnEl.innerText = 'remove';
        
            //html div class=action에 넣어 줌
        add_remove_El.append(editBtnEl); 
        add_remove_El.append(removeBtnEl);           
    
    all_listboxEl.append(inputEl);
    all_listboxEl.append(checkboxEl);
    all_listboxEl.append(add_remove_El);

   
    // 체크박스의 상태가 변경될 때 실행
    checkboxEl.addEventListener("change",()=>{
        
        // 체크박스에 체크가 되면 item객체의 complete 속성 설정
        item.complete = checkboxEl.checked;
        
        if(item.complete) {
            all_listboxEl.classList.add("complete_list");
            //item이 complete상태이면 complete_list 클래스 추가
        } else {
            all_listboxEl.classList.remove("complete_list");
            //item이 complete상태가 아니면 complete_list 클래스 삭제
        }
        saveToLocalStorage();

    });

   
    // 1.inputEl요소가 blur될 때(포커스를 잃을 떄) 실행
    // 2.disabled속성 : 입력요소 비활성화 + 두번 째 매개변수에 빈 문자열 전달 = 속성값 없음
    // 즉, 해당 입력 상자 편집 X
    inputEl.addEventListener("blur",()=>{
        inputEl.setAttribute("disabled", "");
    });
    inputEl.addEventListener("input",()=>{
        item.text = inputEl.value;
    });

    
    // edit, remove 버튼 동작 
    editBtnEl.addEventListener("click", () => {
		inputEl.removeAttribute("disabled");
		inputEl.focus();
	});

	removeBtnEl.addEventListener("click", () => {
		listchild = listchild.filter(t => t.id != item.id);
		// 객체배열.filter(현재 요소의 id가 item.id와 같지 않는경우 필터링)
        // filter : 배열의 각 요소에 대해 주어진 함수를 호출하고 함수가 true를 반환하는 요소들로만 이루어진 새로운 배열을 만든다.
        all_listboxEl.remove();

		saveToLocalStorage();
	});

        
    return { all_listboxEl, inputEl, editBtnEl, removeBtnEl }
}