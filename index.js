#!/usr/bin/env node
import figlet from "figlet";
import fs from "fs/promises";
import chalk from "chalk";
import ora from "ora";
import { select, confirm } from "@inquirer/prompts";
import { ExitPromptError } from "@inquirer/core";
import inquirer from "inquirer";

/*
Add, Update, and Delete tasks

Mark a task as in progress or done

List all tasks

List all tasks that are done

List all tasks that are not done

List all tasks that are in progress
*/

let todos = []

const FILE_NAME = "todos.json";

 const sleep  = (ms)=> new Promise(resolve=>setTimeout(resolve,ms))

async function ReadFile(FILE_NAME) {
  try {
    const todoFile = await fs.readFile(FILE_NAME, "utf-8");
    return await JSON.parse(todoFile);
  } catch (err) {
    console.log("Something went wrong while reading the file . . . . . .");
    console.log(err);
  }
}

async function WriteFile(FILE_NAME, json) {
  try {
    await fs.writeFile(FILE_NAME, "");
    await fs.writeFile(FILE_NAME, JSON.stringify(json, null, 2));
  } catch (err) {
    console.log(err);
    console.log("Something went wrong while writing the File . . .");
  }
}

async function LoadTheTasks(FILE_NAME) {
  todos = await ReadFile(FILE_NAME);
}

async function SaveTheTasks(FILE_NAME, tasks) {
  await WriteFile(FILE_NAME, tasks);
}

async function handleEnd() {
  await figlet("Thank you", (err, data) => {
    if (err) {
      console.log("Thank you");
    }
    console.log(chalk.blueBright(data));
  });
}

//show title
async function showTitle() {
  await figlet("T a s k    T r a c k e r", function (err, data) {
    if (err) {
      console.log("Something went wrong . . . . ");
      console.log(err);
    }
    console.log(chalk.redBright(data));

  });
  await LoadTheTasks(FILE_NAME);
  // console.log(todos)
}

//Add new todo
async function AddnewTodo() {
  try {
    const { newTask } = await inquirer.prompt([
      {
        type: "text",
        name: "newTask",
        message: "Enter your task - ",
      },
    ]);

    //push the new task
    todos.push({
      ID: `${Math.floor(Math.random() * 1000000)}`,
      task: `${newTask}`,
      status: "none",
    });

    //Write to the file
    await SaveTheTasks(FILE_NAME,todos)

    console.log(chalk.greenBright("----------"));
    console.log(chalk.greenBright("New task has been added . . . "));
    console.log(chalk.greenBright("----------"));
  } catch (err) {
    if (err instanceof ExitPromptError) {
      await handleEnd();
      process.exit(0);
    }
  }
}

//update the todo
async function UpdateTodo() {
  try {
    let task = "";
    const selectingTodo = todos.map((todo) => ({
      name: todo.task,
      value: todo,
      description: `The task ID = ${todo.ID}. Status = ${todo.status}`,
    }));
    // console.log(selectingTodo);

    const action = await select({
      message: "Select the task you want to update => ",
      choices: selectingTodo,
    });
    // console.log(action);

    async function UpdateTaskStatus() {
      task = await select({
        message: `Update the task = ${chalk.blue(action.task)} \n from "${chalk.blue(action.status)}" to => `,
        choices: [
          { name: "none", value: "none", description: "Just a new tasks . ." },
          {
            name: "progress",
            value: "progress",
            description: "You are started/doing this task . . .",
          },
          {
            name: "done",
            value: "done",
            description: "Your task is done . . . ",
          },
        ],
      });
    }

    await UpdateTaskStatus();

    for (let data of todos) {
      if (data.ID === action.ID) {
        data.status = task;
      }
    }
    await SaveTheTasks(FILE_NAME,todos)
    console.log(chalk.greenBright("Updated the task . . ."));
  } catch (err) {
    if (err instanceof ExitPromptError) {
      await handleEnd();
      process.exit(0);
    }
  }
}

//delete the todo
async function DeleteTodo() {
  try {
    const selectingTodo = todos.map((todo) => ({
      name: todo.task,
      value: todo,
      description: `The task ID = ${todo.ID}. Status = ${todo.status}`,
    }));

    const action = await select({
      message: "Which task you want to delete ? ",
      choices: selectingTodo,
    });

    if (action in todos) {
    }
    async function DeleteTheTask() {
      const choice = await confirm({
        message: `Do you want to delete "${action.task} with ID = ${action.ID}" ?`,
      });
      if (choice) {
        todos = todos.filter((todo) => {
          return todo.ID !== action.ID;
        });
        await WriteFile(FILE_NAME, todos);
        console.log(chalk.greenBright(`Deleted "${action.task}" . . . .`));
      } else {
        console.log(chalk.red("Action cancelled"));
      }
    }

    await DeleteTheTask();
  } catch (err) {
    if (err instanceof ExitPromptError) {
      await handleEnd();
      process.exit(0);
    }
  }
}
//List the tasks
async function ListTheItems() {
  try {
    await LoadTheTasks(FILE_NAME);

    const action = await select({
      message: "Select the type of tasks you want to list out . . .",
      choices: [
        { name: "All", value: "All", description: "Lists all the tasks" },
        {
          name: "progress",
          value: "progress",
          description: "Lists tasks that are in progress",
        },
        {
          name: "Not done",
          value: "Not_done",
          description: "Lists the tasks that are Not done",
        },
        {
          name: "done",
          value: "done",
          description: "Lists the tasks that are done",
        },
      ],
    });

    if (action === "All") {
      console.table(todos);
    } else if (action === "progress") {
      console.table(
        todos.filter((todo) => {
          return todo.status === "progress";
        })
      );
    } else if (action === "Not_done") {
      console.table(
        todos.filter((todo) => {
          return todo.status !== "done";
        })
      );
    } else if (action === "done") {
      console.table(
        todos.filter((todo) => {
          return todo.status === "done";
        })
      );
    }
  } catch (err) {
    if (err instanceof ExitPromptError) {
      await handleEnd();
      process.exit(0);
    }
  }
}

// Main menu
async function MainMenu() {
  try {
    const spinner = ora("Loading . . . . . .").start();
    spinner.color = "yellow"
    spinner.message = "Getting you ready . . ."
    await sleep(2000)
    spinner.stop();

    const action = await select({
      message: "Select your option: ",
      choices: [
        {
          name: "Add",
          value: "Add",
          description: "Adds a new todo to your tasks list",
        },
        {
          name: "Update",
          value: "Update",
          description: "Updates existing task",
        },
        {
          name: "Delete",
          value: "Delete",
          description: "Delete your task",
        },
        {
          name: "List",
          value: "List",
          description: "List all of your tasks",
        },
        {
          name: "Exit",
          value: "Exit",
          description: "Close the application",
        },
      ],
    });

    if (action === "Add") {
      await AddnewTodo();
    } else if (action === "Update") {
      await UpdateTodo();
    } else if (action === "Delete") {
      await DeleteTodo();
    } else if (action === "List") {
      await ListTheItems();
    } else if (
      action === "Exit" ||
      action === "exit" ||
      action === "E" ||
      action === "e"
    ) {
      //save the todos before exiting
      await SaveTheTasks(FILE_NAME, todos);
      await handleEnd()
      process.exit(0);
    } else {
      console.log("Something went wrong . . . .");
      console.log(action);
    }
    await MainMenu();
  } catch (err) {
    if (err instanceof ExitPromptError) {
      await handleEnd();
      process.exit(0);
    }
  }
}

// Steps to run the code.
await showTitle();
await MainMenu();
console.log();


