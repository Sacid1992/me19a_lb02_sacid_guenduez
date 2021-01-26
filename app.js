const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');

todoButton.addEventListener("click", addTodo)

const todoListObj = new TodoList();


initializeTodoItems();


function addTodo(event) {
    event.preventDefault();

	const todoItem = new TodoItem();
	todoItem.todoText = todoInput.value;
	addTodoItemToList(todoItem);
	

    todoInput.value = "";
}

function initializeTodoItems() {
    var JSONData = {
        "title": "This is a title",
        "todoItems": [
            {
                "todoText": "This is a todo item 1",
                "completed": false,
                "deleted": false
            },
            {
                "todoText": "This is a todo item 2",
                "completed": false,
                "deleted": false
            },
            {
                "todoText": "This is a todo item 3",
                "completed": false,
                "deleted": false
            },
            {
                "todoText": "This is a todo item 4",
                "completed": false,
                "deleted": false
            }
        ]
    };

    for(let i = 0; i<JSONData.todoItems.length; i++ ) {
        const todoItemJsonData = JSONData.todoItems[i];
        const todoItem = new TodoItem();
        todoItem.todoText = todoItemJsonData.todoText;
        this.addTodoItemToList(todoItem);
    }
}


function addTodoItemToList(todoItem) {

		todoItem.createItem();
		

		todoListObj.addTodoItem(todoItem);
}



function filterTodo(e) {
    const todos = todoListObj.todoList.childNodes;
    for(let i = 1; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
} 

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

