document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select DOM Elements
    const addButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            // Remove the li element from the task list
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the li element
        taskItem.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Step 3: Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Automatically focus on the input field when the page loads
    taskInput.focus();
});