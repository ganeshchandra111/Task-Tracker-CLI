Here’s a **simple and clean `README.md`** you can use for this project:

````md
# Task Tracker CLI 📝

A simple command-line **Task Tracker** built with Node.js.  
It allows you to add, update, delete, and list tasks directly from your terminal.

---

## Features

- ➕ Add new tasks  
- ✏️ Update task status (`none`, `progress`, `done`)  
- 🗑 Delete tasks  
- 📋 List tasks:
  - All tasks
  - In progress
  - Not done
  - Done  
- 💾 Tasks are saved locally in a `todos.json` file  

---

## Requirements

- Node.js v18+ (recommended)
- npm

---

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd task-tracker
````

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

Run the application using:

```bash
node index.js
```

You will be presented with an interactive menu where you can manage your tasks.

---

## Task Status

Each task can have one of the following statuses:

* `none` – newly created task
* `progress` – task is in progress
* `done` – task is completed

---

## Data Storage

All tasks are stored locally in a file called:

```
todos.json
```

This file is automatically created and updated.

---

## Dependencies

* `figlet` – ASCII art titles
* `chalk` – colored terminal output
* `ora` – loading spinner
* `inquirer` & `@inquirer/prompts` – interactive CLI prompts

---

## Exit

You can safely exit the application using the **Exit** option.
Your tasks will be saved automatically.

---

## License

This project is open-source and free to use.

