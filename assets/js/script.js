// DOM object references
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.getElementById("tasks-to-do");


// dynamically create task item (it is important this function comes before event listener)
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// event listener
// uses createTaskHandler is the callback function
buttonEl.addEventListener("click", createTaskHandler);