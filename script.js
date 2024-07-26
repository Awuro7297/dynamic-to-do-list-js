// // Wait until the DOM content is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // Select DOM elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Function to add a task
//     function addTask() {
//         // Retrieve and trim the task input value
//         const taskText = taskInput.value.trim();

//         // Check if the input is not empty
//         if (taskText === "") {
//             alert("Please enter a task.");
//             return;
//         }

//         // Create new list item and remove button
//         const listItem = document.createElement('li');
//         listItem.textContent = taskText;

//         const removeButton = document.createElement('button');
//         removeButton.textContent = "Remove";
//         // Use classList.add to add a CSS class for styling
//         removeButton.classList.add('remove-btn');

//         // Add event listener to the remove button
//         removeButton.addEventListener('click', () => {
//             taskList.removeChild(listItem);
//         });

//         // Append the remove button to the list item
//         listItem.appendChild(removeButton);

//         // Append the list item to the task list
//         taskList.appendChild(listItem);

//         // Clear the task input field
//         taskInput.value = '';
//     }

//     // Event listener for the "Add Task" button
//     addButton.addEventListener('click', addTask);

//     // Event listener for the Enter key press in the task input field
//     taskInput.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });
// });
// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage
        const storedTasks = localStorage.getItem('tasks');

        // If tasks are found, parse them and populate the task list
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                // Create and append each task
                createTaskElement(task);
            });
        }
    }

    // Function to create a task element and append it to the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add event listener to the remove button
        removeButton.addEventListener('click', () => {
            removeTask(listItem, taskText);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);
    }

    // Function to add a task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create and append the new task
        createTaskElement(taskText);

        // Add the new task to the tasks array
        tasks.push(taskText);

        // Update Local Storage with the new tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear the task input field
        taskInput.value = '';
    }

    // Function to remove a task
    function removeTask(listItem, taskText) {
        // Remove the task from the DOM
        taskList.removeChild(listItem);

        // Remove the task from the tasks array
        tasks = tasks.filter(task => task !== taskText);

        // Update Local Storage with the new tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks when the page loads
    loadTasks();

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the Enter key press in the task input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
