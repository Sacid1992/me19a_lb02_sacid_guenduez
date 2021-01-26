//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
// const filterOption = document.querySelector('.filter_todo');
//event listeners
todoButton.addEventListener("click", addTodo)
// filterOption.addEventListener("click", filterTodo)

// classes
const todoListObj = new TodoList();

// Initializing
// initializeTodoItems();

//functions
function addTodo(event) {
    event.preventDefault();

	const todoItem = new TodoItem();
	todoItem.todoText = todoInput.value;
	addTodoItemToList(todoItem);
	
    //Clear todo input VALUE
    todoInput.value = "";
}

function initializeTodoItems() {
	var todoListData = JSON.parse(data);
	for(let i = 0; i<todoListData.todoItems.length; i++ ) {
		const todoItemJsonData = todoListData.todoItems[i];
		const todoItem = new TodoItem();
		todoItem.todoText = todoItemJsonData.todoText;
		this.addTodoItemToList(todoItem);
	}
}

function addTodoItemToList(todoItem) {
		// Create item
		todoItem.createItem();
		
		// Append to Actual LIST
		todoListObj.addTodoItem(todoItem);
}


//FILTERING THE TASKS ACCORDING THE OPTION
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

