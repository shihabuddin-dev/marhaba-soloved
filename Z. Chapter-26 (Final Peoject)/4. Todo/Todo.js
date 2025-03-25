// 1. make todoApp class 
class TodoApp {
    constructor() {
        this.todos = [];
    }
    // 2. make addTodo method 
    addTodo(name, time, category) {
        const id = this.todos.length + 1;
        const task = {
            id: id,
            name: name,
            category: category,
            time: time,
            completed: false,
        };
        this.todos.push(task);
    }
    // 3. make completeTodo method 
    completeTodo(taskName) {
        const task = this.todos.find((todo) => todo.name === taskName);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }
    // 4. make removeTodo method 
    removeTodo(taskName) {
        const index = this.todos.findIndex((todo) => todo.name === taskName);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
    // 5. make displayTodoList method 
    displayTodoList(category) {
        if (!category) {
            this.todos.forEach((todo) => {
                console.log(
                    `ID: ${todo.id}, Name: ${todo.name}, Category: ${todo.category}, Time: ${todo.time}, Completed: ${todo.completed}`
                );
            });
        } else {
            const filteredTodos = this.todos.filter(
                (todo) => todo.category === category
            );
            filteredTodos.forEach((todo) => {
                console.log(
                    `ID: ${todo.id}, Name: ${todo.name}, Category: ${todo.category}, Time: ${todo.time}, Completed: ${todo.completed}`
                );
            });
        }
    }
    // 6. make hoursWorked method 
    hoursWorked() {
        return this.todos.reduce((total, todo) => {
            if (todo.completed) {
                return total + todo.time;
            }
            return total;
        }, 0);
    }
    // 7. make timeNeeded method 
    timeNeeded() {
        return this.todos.reduce((total, todo) => {
            if (!todo.completed) {
                return total + todo.time;
            }
            return total;
        }, 0);
    }
    // 8. added editTodo method 
    editTodo(taskName, updates) {
        const task = this.todos.find((todo) => todo.name === taskName);

        if (!task) {
            return false;
        }

        let updated = false;

        if (updates.name) {
            task.name = updates.name;
            updated = true;
        }
        if (updates.category) {
            task.category = updates.category;
            updated = true;
        }
        if (updates.time) {
            task.time = updates.time;
            updated = true;
        }

        return updated;
    }
    // 9. make getTodo method 
    getTodo(search) {
        return this.todos.find(
            (todo) => todo.name === search || todo.category === search
        );
    }
    // 10. add largestTodo method 
    largestTodo() {
        const incompleteTodos = this.todos.filter((todo) => !todo.completed);

        if (incompleteTodos.length === 0) {
            return undefined;
        }

        return incompleteTodos.reduce((largest, current) => {
            return current.time > largest.time ? current : largest;
        }, incompleteTodos[0]);
    }
    // 11. add smallestTodo method 
    smallestTodo() {
        const incompleteTodos = this.todos.filter((todo) => !todo.completed);

        if (incompleteTodos.length === 0) {
            return undefined;
        }

        return incompleteTodos.reduce((smallest, current) => {
            return current.time < smallest.time ? current : smallest;
        }, incompleteTodos[0]);
    }
    // 12. add sortTodos method 
    sortTodos() {
        const incompleteTodos = this.todos
            .filter((todo) => !todo.completed)
            .sort((a, b) => b.time - a.time);
        return incompleteTodos;
    }
    // 13. make undoTodo method 
    undoTodo(taskName) {
        const task = this.todos.find((todo) => todo.name === taskName);

        if (!task) {
            return false;
        }

        if (task.completed) {
            task.completed = false;
            return true;
        }
        return false;
    }
    // 14. make completedPercentage method 
    completedPercentage() {
        const completedCount = this.todos.filter((todo) => todo.completed).length;
        const totalCount = this.todos.length;
        if (totalCount === 0) {
            return 0;
        }
        return (completedCount / totalCount) * 100;
    }
    // 15. add importTodos method 
    importTodos(jsonString) {
        try {
            const todos = JSON.parse(jsonString);

            if (Array.isArray(todos)) {
                todos.forEach((todo) => {
                    if (
                        todo.name &&
                        todo.time &&
                        todo.category &&
                        typeof todo.completed === "boolean"
                    ) {
                        this.addTodo(todo.name, todo.time, todo.category);
                        const newTask = this.todos[this.todos.length - 1];
                        newTask.completed = todo.completed;
                    } else {
                        console.warn("Invalid todo format in JSON:", todo);
                    }
                });
            } else {
                console.error("Invalid JSON format: Must be an array of todos.");
            }
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
    // 16. make clearAllTodos method 
    clearAllTodos() {
        this.todos = [];
    }
}

const todoApp = new TodoApp();

todoApp.addTodo("Learn JavaScript", 6, "Study");
todoApp.addTodo("Grocery Shopping", 1, "Personal");
todoApp.addTodo("Exercise", 0.5, "Health");
todoApp.addTodo("Read a Book", 2, "Entertainment");

console.log("Initial Todo List:");
todoApp.displayTodoList();

todoApp.completeTodo("Learn JavaScript");
console.log("\nTodo List after completing 'Learn JavaScript':");
todoApp.displayTodoList();

console.log("\nHours Worked:", todoApp.hoursWorked());
console.log("Time Needed:", todoApp.timeNeeded());

todoApp.editTodo("Grocery Shopping", { time: 1.5 });
console.log("\nTodo List after editing 'Grocery Shopping':");
todoApp.displayTodoList();

console.log("\nLargest Todo:", todoApp.largestTodo());
console.log("Smallest Todo:", todoApp.smallestTodo());

console.log("\nSorted Todos:");
console.log(todoApp.sortTodos());

todoApp.undoTodo("Learn JavaScript");
console.log("\nTodo List after undoing 'Learn JavaScript':");
todoApp.displayTodoList();

console.log("\nCompleted Percentage:", todoApp.completedPercentage());

const jsonTodos =
    '[{"name": "Pay Bills", "time": 1, "category": "Personal", "completed": true}, {"name": "Write Code", "time": 3, "category": "Study", "completed": false}]';
todoApp.importTodos(jsonTodos);
console.log("\nTodo List after importing Todos:");
todoApp.displayTodoList();

