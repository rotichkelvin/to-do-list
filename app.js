const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.addEventListener('click', toggleTask);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}

addTaskBtn.addEventListener('click', addTask);
