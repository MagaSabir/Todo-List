const todoList = [{
	name: 'Make Diner',
	dueDate: '2023-12-22'
}, {
	name: 'wash dishes',
	dueDate: '2022-12-22'
}];

renderTodoList()
function renderTodoList() {
	let todoListHtml = '';

	for(let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		const { name, dueDate } = todoObject
		console.log(dueDate)
		const html = `
		<div>${name}</div>
		<div>${dueDate}</div>
			<button onClick="
			todoList.splice(${i}, 1)
			renderTodoList()
		" class="add-">Delete</button>
		`;
		
		todoListHtml += html;
	}

	document.querySelector('.js-todo-list')
		.innerHTML = todoListHtml
}



function addTodo() {
	const inputElement = document.querySelector('.js-name-input')
	const inputDateElement = document.querySelector('.js-date-input')


	const name = inputElement.value;
	const dueDate = inputDateElement.value;

	todoList.push({
		name,
		dueDate})
	inputElement.value = ''
	inputDateElement.value = ''
	renderTodoList()
	
}

function clearTodo() {
	todoList.length = 0;
	renderTodoList()
}