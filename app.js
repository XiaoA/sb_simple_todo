const form = document.querySelector('#add-task');
const input = document.querySelector('#new-task-input');
const taskList = document.querySelector('#tasks');

const removeTask = taskList.addEventListener('click', function(e) {
  if (event.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (event.target.tagName === "LI") {
    e.target.classList.toggle('completed-task');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = document.createElement('li');
  const completeTask = document.createElement('button')
  completeTask.innerText = 'Remove';
  newTask.innerText = input.value;
  newTask.appendChild(completeTask);
  taskList.appendChild(newTask);
  input.value='';
})

