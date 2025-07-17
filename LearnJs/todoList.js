let todoList = [];

function showMenu() {
    return prompt(
        "Todo List Menu:\n" +
        "1. Add Task\n" +
        "2. View Tasks\n" +
        "3. Remove Task\n" +
        "4. Exit\n" +
        "Choose an option (1-4):"
    );
}

function addTask() {
    const task = prompt("Enter new task:");
    if (task && task.trim()) {
        todoList.push(task.trim());
        alert("Task added successfully!");
    }
}

function viewTasks() {
    if (todoList.length === 0) {
        alert("No tasks in the list!");
        return;
    }
    
    let taskList = "Your Tasks:\n";
    todoList.forEach((task, index) => {
        taskList += `${index + 1}. ${task}\n`;
    });
    alert(taskList);
}

function removeTask() {
    if (todoList.length === 0) {
        alert("No tasks to remove!");
        return;
    }
    
    let taskList = "Select task number to remove:\n";
    todoList.forEach((task, index) => {
        taskList += `${index + 1}. ${task}\n`;
    });
    
    const taskNum = parseInt(prompt(taskList)) - 1;
    if (taskNum >= 0 && taskNum < todoList.length) {
        const removedTask = todoList.splice(taskNum, 1);
        alert(`Removed task: ${removedTask[0]}`);
    } else {
        alert("Invalid task number!");
    }
}

function runTodoList() {
    while (true) {
        const choice = showMenu();
        
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                removeTask();
                break;
            case "4":
                alert("Goodbye!");
                return;
            default:
                alert("Invalid option! Please choose 1-4");
        }
    }
}

// Start the todo list application
runTodoList();
