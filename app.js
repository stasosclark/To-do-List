/*PART 1
As a user, you should be able to:

1. Add a new todo (by submitting a form)
2. Mark a todo as completed (cross out the text of the todo)
3. Remove a todo

PART 2
4. Save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.*/

const body = document.querySelector("body");
const heading = document.createElement("h1");
const inputForm = document.createElement("form");
const textInput = document.createElement("input");
const addTaskBtn = document.createElement("button");
const taskList = document.createElement("ul");
const savedList = JSON.parse(localStorage.getItem("tasks")) || [];


body.append(heading, inputForm, taskList);
inputForm.append(textInput, addTaskBtn);

heading.innerText = "To-Do List";
textInput.setAttribute("type", "text");
textInput.setAttribute("placeholder", "Enter New Task")
addTaskBtn.innerText = "Add Task"

//FIRST DRAFT --- Event Listener for adding a new task (Add Task)

/*inputForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.createElement("li")
    const removeBtn = document.createElement("button")
    newTask.innerHTML = `<input type = 'checkbox' class = 'checkbox'><li class = 'new-task'>${textInput.value}</li>`
    taskList.append(newTask)
    removeBtn.innerText = "Remove"
    newTask.append(removeBtn)
    const newLine = document.createElement("br")
    newTask.append(newLine)
    textInput.value = ''
})

//FIRST DRAFT --- Event Listener for removing a task (Remove)

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
})

//FIRST DRAFT --- Event Listener for completing a task (checkbox)

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle("completed")
    }
})*/

//CURRENT DRAFT --- Event Listener for adding a new task (Add Task)

inputForm.addEventListener("submit", function taskAdd(event) {
    event.preventDefault();
    const newTaskLi = document.createElement("li")
    const checkBox = document.createElement("input")
    const newTaskLabel = document.createElement("label")
    const removeBtn = document.createElement("button")
    const newLine = document.createElement("br")
    checkBox.setAttribute("type", "checkbox")
    checkBox.className = "checkbox"
    const newTaskName = textInput.value
    newTaskLabel.innerText = newTaskName
    taskList.append(newTaskLi)
    newTaskLi.append(checkBox)
    newTaskLi.append(newTaskLabel)
    removeBtn.innerText = "Remove"
    newTaskLi.append(removeBtn)
    newTaskLi.append(newLine)
    savedList.push(newTaskName)
    localStorage.setItem("tasks", JSON.stringify(savedList))
    textInput.value = ''
})

//CURRENT DRAFT --- Event Listener for removing a task (Remove)

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
}})

//CURRENT DRAFT --- Event Listener for completing a task (checkbox)

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle("completed")
    }
})

// test comment