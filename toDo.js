function toDoData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => getToDo(data))
}
function getToDo(todos) {
    const todoList = document.getElementById('todo-container');
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        
       <h1>user -${todo.userId} </h1>  
       <p>title -${todo.title} </p>
       <p>report:<b>${todo.completed}</b> </p>
       
        `
        todoList.appendChild(todoDiv)
    }
}
toDoData();