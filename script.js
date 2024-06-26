document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const categoryInput = document.getElementById('categoryInput');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');
    const priorityInput = document.getElementById('priorityInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(
            taskInput.value,
            categoryInput.value,
            dateInput.value,
            formatTime(timeInput.value),
            priorityInput.value
        );
        taskInput.value = '';
        categoryInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        priorityInput.value = '';
    });

    function addTask(task, category, date, time, priority) {
        const li = document.createElement('li');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        
        const taskName = document.createElement('span');
        taskName.textContent = `Task: ${task}`;
        
        const taskCategory = document.createElement('span');
        taskCategory.textContent = `Category: ${category}`;
        
        const taskDateTime = document.createElement('span');
        taskDateTime.textContent = `Due: ${date} ${time}`;
        
        const taskPriority = document.createElement('span');
        taskPriority.textContent = `Priority: ${priority}`;

        taskDetails.appendChild(taskName);
        taskDetails.appendChild(taskCategory);
        taskDetails.appendChild(taskDateTime);
        taskDetails.appendChild(taskPriority);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(taskDetails);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function formatTime(time) {
        const [hours, minutes] = time.split(':');
        const hoursInt = parseInt(hours, 10);
        const period = hoursInt >= 12 ? 'PM' : 'AM';
        const formattedHours = hoursInt % 12 || 12;
        return `${formattedHours}:${minutes} ${period}`;
    }
});
