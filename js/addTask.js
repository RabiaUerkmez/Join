/**
 * Array to store assigned tasks.
 * @type {Array}
 */
let assigneds = [];

/**
 * Categories of tasks.
 * @type {Array<{label: string}>}
 */
let categories = [{ label: "Technical Task" }, { label: "User Story" }];

/**
 * Identifier for subtasks.
 * @type {number}
 */
let subtaskId = 0;

/**
 * Current progress of the task.
 * @type {string}
 */
let progress;

/**
 * Flag indicating whether the task was created from the board.
 * @type {boolean}
 */
let createdFromBoard = false;

/**
 * Initializes the task with default or specified progress,
 * and sets up the UI elements based on the task's progress.
 * @async
 * @param {string} [progress="toDo"] - The initial progress of the task.
 */
async function initTask(progress = "toDo") {
    this.progress = progress;
    createdFromBoard = false;
    if (progress !== "noProgress") {
        rotateIcon("nav-image-assigned");
        rotateIcon("nav-image-category");
    }
    let urgentButton = document.getElementById("medium-button-id");
    if (urgentButton) {
        urgentButton.classList.add("active");
    }
    assigneds = JSON.parse((await getItem("oldContacts")) || "[]");
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        if (event.target.closest(".prioButtons button")) {
            let button = event.target.closest(".prioButtons button");
            document.querySelectorAll(".prioButtons button").forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        }
    });
});

/**
 * Listens for click events to manage checkbox areas for assigned tasks and categories.
 */
document.addEventListener("click", function (event) {
    let withinAssignedCheckboxArea = event.target.closest(".combobox") !== null || event.target.closest("#checkBoxItemsAssigned") !== null || event.target.id === "assigned-text";
    let withinCategoryCheckboxArea = event.target.closest(".combobox") !== null || event.target.closest("#itemsCategory") !== null || event.target.id === "category-text";
    if (!withinAssignedCheckboxArea) {
        closeCheckBoxAreaForAssigned();
        document.body.style.overflow = "";
    }

    if (!withinCategoryCheckboxArea) closeCheckBoxAreaForCategory();
});

/**
 * Toggles the checkbox area for assigned tasks.
 */
function openOrCloseCheckBoxAreaForAssigned() {
    let checkBoxItems = document.getElementById("checkBoxItemsAssigned");
    rotateIcon("nav-image-assigned");
    if (checkBoxItems.innerHTML.trim() !== "") {
        checkBoxItems.innerHTML = "";
        document.body.style.overflow = "";
    }
    else {
        document.body.style.overflow = "hidden";
        checkBoxItems.innerHTML = getCheckBoxAreaTemplateForAssigned();
    }
}

/**
 * Toggles the checkbox area for task categories.
 */
function openOrCloseCheckBoxAreaForCategory() {
    let checkBoxItems = document.getElementById("itemsCategory");
    rotateIcon("nav-image-category");
    if (checkBoxItems.innerHTML.trim() !== "") {
        document.getElementById("position-context").classList.add("d-none");
        checkBoxItems.innerHTML = "";
    } else {
        document.getElementById("position-context").classList.remove("d-none");
        checkBoxItems.innerHTML = getCeckBoxAreaTemplateForCategory();
    }
}

/**
 * Generates HTML content for the checkbox area for assigned tasks.
 * @returns {string} HTML content.
 */
function getCheckBoxAreaTemplateForAssigned() {
    assigneds.sort((a, b) => a.name.localeCompare(b.name));
    return assigneds
        .map((assigned) => {
            let parts = assigned.name.split(" ");
            let firstName = parts[0];
            let lastName = parts.length > 1 ? parts[1] : "";
            return /*html*/ `
            <div class="item assigned-item ${assigned.selected ? "active" : ""}" onclick="toggleActiveAssignedItem(this)">
                <div class="initialCircle margin-top" style="background-color: ${assigned.bg};">${firstName.charAt(0)}${lastName.charAt(0)}</div>
                <label>${firstName} ${lastName}</label>
                <input class="checkbox" type="checkbox" ${assigned.selected ? "checked" : ""}>
            </div>
        `;
        })
        .join("");
}

/**
 * Generates HTML content for the checkbox area for categories.
 * @returns {string} HTML content.
 */
function getCeckBoxAreaTemplateForCategory() {
    return categories
        .map((category) => {
            return /*html*/ `
            <div class="item category-item" onclick="selectedCategoryItem(this)">
                <label>${category.label}</label>
            </div>
        `;
        })
        .join("");
}

/**
 * Toggles the active state of an assigned item.
 * @param {Element} element - The DOM element of the assigned item.
 */
function toggleActiveAssignedItem(element) {
    let checkbox = element.querySelector(".checkbox");
    let label = element.querySelector("label").textContent.trim();
    let assignedUser = assigneds.find((assigned) => assigned.name.trim() === label);
    if (assignedUser) {
        assignedUser.selected = !assignedUser.selected;
        checkbox.checked = assignedUser.selected;
    }
    element.classList.toggle("active", assignedUser.selected);
    updateActiveInitialCircles();
}

/**
 * Updates the display of active initial circles for selected assigned tasks.
 */
function updateActiveInitialCircles() {
    let activeAssignedItems = document.querySelectorAll(".assigned-item.active");
    let targetContainer = document.getElementById("selectedUserCircle");
    targetContainer.innerHTML = "";
    activeAssignedItems.forEach((item) => {
        let initialCircleClone = item.querySelector(".initialCircle").cloneNode(true);
        targetContainer.appendChild(initialCircleClone);
    });
}

/**
 * Sets the selected category item as the current category.
 * @param {Element} element - The DOM element of the category item.
 */
function selectedCategoryItem(element) {
    let selectedCategoryItem = element.querySelector("label");
    let comboboxTextField = document.getElementById("category-text");
    comboboxTextField.innerHTML = selectedCategoryItem.textContent;
    openOrCloseCheckBoxAreaForCategory();
}

/**
 * Validates if the selected category is valid.
 * @param {string} category - The category to validate.
 * @returns {boolean} True if the category is valid, false otherwise.
 */
function isCategoryValidated(category) {
    if (category === "Technical Task" || category === "User Story") return true;
    else {
        document.getElementById("failureCategory").innerHTML = "Bitte Category auswählen";
        return false;
    }
}

/**
 * Rotates an icon 180 degrees or resets it based on its current state.
 * @param {string} id - The ID of the icon to rotate.
 */
function rotateIcon(id) {
    let icon = document.getElementById(id);
    if (icon.style.transform === "rotate(180deg)") icon.style.transform = "";
    else icon.style.transform = "rotate(180deg)";
}

/**
 * Clears all task inputs and resets the task form to its default state.
 */
function clearTask() {
    let inputs = document.getElementsByClassName("inputs");
    let textAreas = document.getElementsByClassName("textarea");
    for (let i = 0; i < inputs.length; i++) inputs[i].value = "";
    for (let i = 0; i < textAreas.length; i++) textAreas[i].value = "";
    document.getElementById("category-text").innerHTML = "Select task category";
    document.getElementById("selectedUserCircle").innerHTML = "";
    assigneds.forEach((assigned) => (assigned.selected = false));
    document.querySelectorAll(".prioButtons button").forEach((btn) => {
        btn.classList.remove("active");
    });
    document.getElementById("medium-button-id").classList.add("active");
}

// Region-specific functions for handling click events
/**
 * Closes the checkbox area for assigned tasks.
 */
function closeCheckBoxAreaForAssigned() {
    let checkBoxItems = document.getElementById("checkBoxItemsAssigned");
    if (checkBoxItems && checkBoxItems.innerHTML.trim() !== "") {
        checkBoxItems.innerHTML = "";
        rotateIcon("nav-image-assigned");
    }
}

/**
 * Closes the checkbox area for categories.
 */
function closeCheckBoxAreaForCategory() {
    let checkBoxItems = document.getElementById("itemsCategory");
    if (checkBoxItems && checkBoxItems.innerHTML.trim() !== "") {
        checkBoxItems.innerHTML = "";
        rotateIcon("nav-image-category");
    }
}
//#endregion

// Additional event listener setup
document.addEventListener("DOMContentLoaded", function () {
    let comboboxCategory = document.getElementById("combobox-category");
    if (comboboxCategory) {
        comboboxCategory.addEventListener("click", function () {
            document.getElementById("failureCategory").innerHTML = "";
        });
    }
});

/**
 * Creates a new task and saves it if the category is validated.
 * @async
 */
async function createTask() {
    let currentTask = getTaskData();
    let validate = isCategoryValidated(currentTask.category);
    let message = 'Task added to board';
    if (validate) {
        let tasks = JSON.parse((await getItem("tasks")) || "[]");
        tasks = tasks.concat(currentTask);
        await setItem("tasks", JSON.stringify(tasks));
        document.getElementById("popup-container").innerHTML = getPopUpTemplate(message);
        if (!createdFromBoard) {
            setTimeout(function () {
                window.location.href = "../../html/board.html";
            }, 1000);
        } else if (createdFromBoard) {
            closeCardModal("addTaskModal");
            initBoard();
        }
    }
}

/**
 * Retrieves data for the current task from form inputs.
 * @returns {Object} The current task data.
 */
function getTaskData() {
    let title = document.getElementById("input-title").value;
    let description = document.getElementById("textArea-description").value;
    let dueDate = document.getElementById("input-due-date").value;
    let priority = document.querySelector(".prioButtons button.active").innerText.trim();
    let category = document.getElementById("category-text").textContent;
    let selectedAssigneds = assigneds
        .filter((assigned) => assigned.selected)
        .map((assigned) => ({
            name: assigned.name,
            bg: assigned.bg,
        }));
    let progress = this.progress;
    let id = new Date().getTime();
    let subtasksElements = Array.from(document.querySelectorAll(".new-subtask-text"));
    let subtasks = subtasksElements.map((subtaskElement) => ({
        title: subtaskElement.innerText || subtaskElement.textContent,
        completed: false,
        id: Math.random(),
    }));

    let currentTask = {
        id,
        title,
        description,
        dueDate,
        priority,
        category,
        assignedTo: selectedAssigneds,
        progress,
        subtasks,
    };

    return currentTask;
}

/**
 * Adds a new subtask to the list.
 */
function addSubtask() {
    let newSubtask = document.getElementById("newSubtask");
    let displayedSubtasks = document.getElementById("subtasks");
    if (!displayedSubtasks) return;
    let uniqueId = `subtask-${subtaskId++}`;
    if (newSubtask.value.length > 0) {
        displayedSubtasks.innerHTML += generateEditSubtasksHTML(uniqueId, newSubtask.value);
        newSubtask.value = "";
    }
}

/**
 * Handles the click event for editing a subtask and prevents event propagation.
 * @param {string} uniqueId - The unique ID of the subtask being edited.
 * @param {Event} event - The click event.
 */
function editSubTaskClick(uniqueId, event) {
    event.stopPropagation();
    editSubTask(uniqueId);
}

/**
 * Enables editing mode for a subtask.
 * @param {string} id - The unique ID of the subtask.
 */
function editSubTask(id) {
    let subtaskContainer = document.getElementById(id);
    if (!subtaskContainer)
        return;
    let subtaskTextElement = subtaskContainer.querySelector(".new-subtask-text");
    let currentText = subtaskTextElement.innerText;
    subtaskTextElement.innerHTML = `<input class="subtask-edit-field" type="text" value="${currentText}" onblur="saveEditedSubTask('${id}', this.value)">`;
    subtaskTextElement.querySelector("input").focus();
}

/**
 * Saves the edited text of a subtask.
 * @param {string} id - The unique ID of the subtask.
 * @param {string} newText - The new text for the subtask.
 */
function saveEditedSubTask(id, newText) {
    let subtaskTextElement = document.getElementById(id).querySelector(".new-subtask-text");
    subtaskTextElement.innerHTML = newText;
}

/**
 * Deletes a subtask from the list.
 * @param {string} id - The unique ID of the subtask to delete.
 */
function deleteSubTask(id) {
    let subtaskToRemove = document.getElementById(id);
    subtaskToRemove.remove();
}
