const list = document.querySelector(".todo-list");

let todos = [];

function createTodo() {
  const item = {
    id: new Date().getTime(),
    content: "",
    complete: false,
  };

  todos.unshift(item);
}

function createTodoElement(item) {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");

  if (item.complete) {
    todoElement.classList.add("complete");
  }

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("todo-inputs");

  const checkbox = document.createElement("input");
  checkbox.checked = item.complete;
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", (e) => {
    e.stopPropagation();
    item.complete = !item.complete;
    saveToLocalStorage();
  });
  checkbox.addEventListener("change", () => {
    item.complete = checkbox.checked;

    if (item.complete) {
      todoElement.classList.add("complete");
    } else {
      todoElement.classList.remove("complete");
    }
  });

  const textinput = document.createElement("input");
  textinput.type = "text";
  textinput.value = item.content;
  textinput.addEventListener("focus", (e) => {
    e.target.parentNode.parentNode.classList.add("focus");
  });
  textinput.addEventListener("blur", (e) => {
    e.target.parentNode.parentNode.classList.remove("focus");
  });
  textinput.addEventListener("change", () => {
    item.content = textinput.value;
  });
  textinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      textinput.blur();
      saveToLocalStorage();
    }
  });
  todoElement.addEventListener("click", (e) => {
    textinput.focus();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("todo-buttons");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    todoElement.classList.add("fade-out");

    todoElement.addEventListener("animationend", () => {
      todos = todos.filter((t) => t.id !== item.id);
      todoElement.remove();
      saveToLocalStorage();
    });
  });

  inputContainer.append(checkbox);
  inputContainer.append(textinput);
  buttonContainer.append(deleteBtn);
  todoElement.append(inputContainer);
  todoElement.append(buttonContainer);

  return todoElement;
}

function addNewTodo() {
  createTodo();
  const todoElement = createTodoElement(todos[0]);

  list.prepend(todoElement);
  todoElement.querySelectorAll("input")[1].focus();
}

function saveToLocalStorage() {
  const data = JSON.stringify(todos);

  localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("my_todos");
  if (data) {
    todos = JSON.parse(data);
  }
}

loadFromLocalStorage();
todos.forEach((todo) => list.append(createTodoElement(todo)));
