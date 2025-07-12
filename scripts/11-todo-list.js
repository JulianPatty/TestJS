const todoList = [{
    name: 'Wish Avery Happy Birthday', 
    due: '2024-07-18' ,
},{
    name: 'Buy groceries',
    due: '2024-07-19',
}];


renderTodoList();

function renderTodoList(){
let todoListHTML = '';

    for (let i =0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate } = todoObject;
        // const todo = `${todoObject.name} (Due: ${todoObject.due})`;
        const html = ` 
            <div> ${name} </div
           <div> ${dueDate} </div> 
            ${name}. ${dueDate}. <button onclick= "todoList.splice(${i}, 1); renderTodoList();
            "class= "delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }  
  
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name, 
       // dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}
