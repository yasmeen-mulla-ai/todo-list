function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task on click
  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}