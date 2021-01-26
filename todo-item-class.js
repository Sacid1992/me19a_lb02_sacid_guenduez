class TodoItem {
    
    todoDiv;
    todoText

    constructor() {
    }

    createItem() {
    //todo DIV
    this.todoDiv = document.createElement('div');
    this.todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = this.todoText;
    newTodo.classList.add('todo_item');
    this.todoDiv.appendChild(newTodo);
    if(this.todoText === "") {
        return null
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    this.todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    this.todoDiv.appendChild(deleteButton);
    }
}