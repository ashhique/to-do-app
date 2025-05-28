
const inputBox = document.querySelector("#input-box input");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <span class="icons">
            <i class="fa-regular fa-circle" onclick="checked(this)"></i>
            <i class="fa-solid fa-pencil" onclick="editTask(this)"></i>
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
        </span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
}


function deleteTask(element) {
    element.parentElement.parentElement.remove(); 
}


function editTask(element) {
    const li = element.parentElement.parentElement;
    const taskText = li.firstChild.textContent.trim();
    const newTask = prompt("Edit your task:", taskText);

    if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask;
    }
}

function checked(element) {
      if (element.classList.contains("fa-circle")) {
        element.classList.remove("fa-regular", "fa-circle");
        element.classList.add("fa-solid", "fa-circle-check");
        element.parentElement.parentElement.classList.add("done")
      } else {
        element.classList.remove("fa-solid", "fa-circle-check");
        element.classList.add("fa-regular", "fa-circle");
        element.parentElement.parentElement.classList.remove("done")
      }
    }
