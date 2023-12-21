const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false,
    };

    todos.unshift(item);

    const { itemEl, inputEl, editBtnEl, removeBtnEl } = createToDoElement(item);

    list.prepend(itemEl);

    inputEl.removeAttribute("disabled");
    inputEl.focus();
}

function createToDoElement(item) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("todo");

    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";

    if (item.complete) {
        itemEl.classList.add("complete");
    }

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = item.text;
    inputEl.setAttribute("disabled", "");

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("action");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("material-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("material-icons", "remove-btn");
    removeBtnEl.innerText = "remove_circles";

    inputEl.addEventListener("blur", () => {
        inputEl.setAttribute("disabled", "");
    });

    inputEl.addEventListener("input", () => {
        item.text = inputEl.value;
    });

    editBtnEl.addEventListener("click", () => {
        inputEl.removeAttribute("disabled");
        inputEl.focus();
    });

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return { itemEl, inputEl, editBtnEl, removeBtnEl };
}
