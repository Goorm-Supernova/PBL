const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

const todos = [];

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
}

function createToDoElement(item) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("todo");

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
    editBtnEl.classList.add("a");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("remove-btn");
    removeBtnEl.innerText = "remove";

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return { itemEl, inputEl, editBtnEl, removeBtnEl };
}
