import inquirer from "inquirer";
// make a string to store you todo
let todos = ["Aamna", "ali"];
async function createTodo(arr) {
  do {
    let todoOperations = await inquirer.prompt({
      type: "list",
      name: "select",
      choices: ["add", "update", "view", "delete"],
      message: "select an operation :",
    });
    // now define operation of each operator
    // Add Todo
    if (todoOperations.select == "add") {
      let addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "Add new Todo => ",
      });
      todos.push(addTodo.todo);
      todos.forEach((element) => {
        console.log(element);
      });
    }
    // Update Todo
    if (todoOperations.select == "update") {
      let updateTodo = await inquirer.prompt({
        type: "list",
        name: "Todo",
        message: "Select the Todo to be updated :",
        choices: todos.map((val) => val),
      });
      let addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "Add new Todo => ",
      });
      let newTodo = todos.filter((val) => val !== updateTodo.Todo);
      todos = [...newTodo, addTodo.todo];
      todos.forEach((element) => {
        console.log(element);
      });
    }
    // view all Todos
    if (todoOperations.select == "view") {
      todos.forEach((element) => {
        console.log(element);
      });
    }
    // Delete any Todo
    if (todoOperations.select == "delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        name: "Todo",
        message: "Select the Todo to be deleted :",
        choices: todos.map((val) => val),
      });
      let newTodo = todos.filter((val) => val !== deleteTodo.Todo);
      todos = [...newTodo];
      todos.forEach((element) => {
        console.log(element);
      });
    }
  } while (true);
}
createTodo(todos);
