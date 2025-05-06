document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");

    // Add New Task
    document.querySelector(".add-task").addEventListener("click", () => {
        let taskText = prompt("Enter new task:");
        if (taskText) {
            let newTask = document.createElement("li");
            newTask.innerHTML = `
                📌 ${taskText} 
                <button class="add-subtask">➕</button>
                <span class="remove-task">❌</span>
                <ul class="subtask-list"></ul>
            `;
            taskList.appendChild(newTask);
            addTaskListeners(newTask);
        }
    });

    // Function to Add Event Listeners to Tasks
    function addTaskListeners(taskElement) {
        // Remove Task
        taskElement.querySelector(".remove-task").addEventListener("click", () => {
            taskElement.remove();
        });

        // Toggle Completion
        taskElement.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completed");
            }
        });

        // Add Subtask
        taskElement.querySelector(".add-subtask").addEventListener("click", () => {
            let subtaskText = prompt("Enter sub-task:");
            if (subtaskText) {
                let subtaskList = taskElement.querySelector(".subtask-list");
                let newSubtask = document.createElement("li");
                newSubtask.innerHTML = `
                    🔹 ${subtaskText} 
                    <span class="remove-subtask">❌</span>
                `;
                subtaskList.appendChild(newSubtask);

                // Remove Subtask
                newSubtask.querySelector(".remove-subtask").addEventListener("click", () => {
                    newSubtask.remove();
                });

                // Toggle Completion for Subtask
                newSubtask.addEventListener("click", (e) => {
                    if (e.target.tagName === "LI") {
                        e.target.classList.toggle("completed");
                    }
                });
            }
        });
    }

    // Apply Listeners to Existing Tasks
    document.querySelectorAll("#task-list li").forEach(addTaskListeners);


        // =========================================
    // Calendar Functionality
    // =========================================
    
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    function updateCalendar() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthYearElem = document.querySelector('.month-year');
        if (monthYearElem) {
            monthYearElem.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        }
    }
    
    updateCalendar();
    
    document.querySelector('.prev-month')?.addEventListener('click', function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        updateCalendar();
    });
    
    document.querySelector('.next-month')?.addEventListener('click', function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        updateCalendar();
    });
});
