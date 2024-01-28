

const coloresVivos = ["#0C2D57", "#FC6736", "#FFB0B0", "#FF33A1", "#747264", "#37B5B6", "#FF6868", " #FFB534", "#65B741"];

function saveTask() {
    let task = getById('taskInput').value;
    let saved = false;
    if (task !== "") {
        do {
            let id = generateId();
            if (!localStorage.hasOwnProperty(id)) {
                localStorage.setItem(id, task);
                saved = true;
                renderTask(task, id);
            }
        } while (!saved);
    }

}



function generateId() {
    return Math.floor((Math.random() * (999 - 100 + 1)) + 100);
}

function renderTasks() {
    let container = getById('container');
    let tasks = localStorage;
    Object.keys(localStorage).forEach(function (key) {
        console.log(key);
        console.log(localStorage.getItem(key));
        let taskContainer = createElement('div')
        taskContainer.classList.add('task-container');
        taskContainer.style.backgroundColor = coloresVivos[Math.floor(Math.random() * coloresVivos.length)];
        taskContainer.innerHTML = "<p>" + localStorage.getItem(key) + '</p><a onclick="remove(this)"><img src="trash-can.svg"></a>';
        taskContainer.id = key;
        container.appendChild(taskContainer);
    });
}

function renderTask(task, id) {
    let taskContainer = createElement('div')
    taskContainer.classList.add('task-container');
    taskContainer.style.backgroundColor = coloresVivos[Math.floor(Math.random() * coloresVivos.length)];
    taskContainer.innerHTML = "<p>" + task + '</p><a onclick="remove(this)"><img src="trash-can.svg"></a>';
    taskContainer.id = id;
    container.appendChild(taskContainer);
}


function getById(id) {
    return document.getElementById(id);
}
function createElement(tag) {
    return document.createElement(tag)
}

function remove(a) {
    localStorage.removeItem(a.parentNode.id)
    a.parentNode.remove();
}   