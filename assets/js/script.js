// DOM object references
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.getElementById("tasks-to-do");


// dynamically create task item (it is important this function comes before event listener)
var createTaskHandler = function(event) {
    event.preventDefault()
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// event listener
// uses createTaskHandler as the callback function
formEl.addEventListener("submit", createTaskHandler);
// submit type listens for 
    // when a user clicks a <button> with type="submit"
    // or when a user presses Enter on their keyboard