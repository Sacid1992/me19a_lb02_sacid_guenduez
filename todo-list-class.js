class TodoList {
    
    todoListData;
    todoListDOM;

    constructor() {
        this.todoListDOM = document.querySelector('.todo_list');
        this.todoListDOM.addEventListener("click", this.deleteCheck)
    }

    addTodoItem(todoItem) {
        this.todoListDOM.appendChild(todoItem.todoDiv);
    }


    deleteCheck(e) {
        const item = e.target;

        if (item.classList[0] === "delete_btn") {
            const todo = item.parentElement;

            todo.classList.add("fall")
            todo.addEventListener('transitionend', function () {
                todo.remove()
            })
        }

        if (item.classList[0] === "complete_btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completedItem")
        }
    }
}