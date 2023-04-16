// DOM object references
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.getElementById("tasks-to-do");


// dynamically create task item (it is important this function comes before event listener)
var createTaskHandler = function(event) {
    event.preventDefault()
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

// event listener
// uses createTaskHandler as the callback function
formEl.addEventListener("submit", createTaskHandler);
// submit type listens for 
    // when a user clicks a <button> with type="submit"
    // or when a user presses Enter on their keyboard