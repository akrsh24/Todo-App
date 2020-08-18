const todoList = [];

class Todo {
    constructor(title) {
        this.title = title;
    }

    getTodo() {
        return this.title;
    }
}


let inputText = document.getElementById("todo-input-text");
document.getElementById("todo-input-btn").addEventListener('click', addTask);


function addTask() {
    console.log("Request to add a new todo")
    let newTodo = new Todo(inputText.value);
    todoList.push(newTodo);
    console.log(todoList);
    showAllTasks();
}

function showAllTasks() {
    let todoTasks = '';
    todoList.forEach(task => {
        todoTasks +=
            `<li class="list-group-item">
                ${task.title}
                <span style="float: right;">
                    <i class="fa fa-trash-o" id="delete-task-icon" aria-hidden="true"></i>
                </span>
            </li>`
    });
    document.querySelector("#task-list-output").innerHTML = todoTasks;
    document.getElementById("todo-input-text").value = '';
    initialiseDeleteTaskDOM();
}

function initialiseDeleteTaskDOM() {
    const delItem = document.querySelector('#task-list-output');
    delItem.addEventListener('click', deleteTask);
}

function deleteTask(e) {
    if (e.target.id === 'delete-task-icon') {
        console.log("Request to delete tasks ->", e);
        e.target.parentElement.parentElement.remove();
    }
}
