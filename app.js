const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);




function addTodo(event) (
    event. preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classlist.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText= 'hey';
    newTodo.classlist.add('todo-item');
    todoDiv.appendChild(newTodo);
//Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classlist.add("complete-btn");
    todoDiv.appendChild(completedButton);
//Delete button
const trashButton = document.createElement('button');
trashButton.innteHTML= '<i class="fas fa-check"></i>';
trashButton.classlist.add("complete-btn");
    todoDiv.appendChild(trashButton);
//Append to list
todoList.appendChild(todoDiv);

)