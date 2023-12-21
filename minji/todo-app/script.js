const list = document.querySelector(".todo-list");

let todos = [
  {
    id: 1,
    content: "오늘의 일정!!",
    complete: false,
  },
];

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
  checkbox.type = "checkbox";
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
    item.text = textinput.value;
  });
  textinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      textinput.blur();
    }
  });

  inputContainer.append(checkbox);
  inputContainer.append(textinput);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("todo-buttons");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", () => {
    todos = todos.filter((t) => t.id !== item.id);
    todoElement.remove();
  });

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

todos.forEach((todo) => list.append(createTodoElement(todo)));
