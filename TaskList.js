const form = document.getElementById("ToDoList");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInputField = document.getElementById("taskInput");
  const newTask = taskInputField.value;
  console.log(newTask);

  const newTaskElement = document.createElement("div");
  newTaskElement.classList.add("taskElement");
  newTaskElement.innerHTML = `
  <span onclick="DoIt(event)"; style="cursor: pointer">${newTask}</span>
  <button onclick="deleteTask(event)"; style="cursor: pointer">DELETE</button>;`;

  const tasks = document.getElementById("Task");
  tasks.appendChild(newTaskElement);

  taskInputField.value = "";
});

const DoIt = function (e) {
  const clickspan = e.target;
  clickspan.style.textDecoration = "line-through";
};

const deleteTask = function (e) {
  e.target.parentElement.remove();
};
