# Task Tracker CLI - Complete Documentation

## Overview

Task Tracker CLI is a command-line interface application built with Node.js for managing tasks and to-do lists. The application provides a simple and efficient way to track tasks, manage their statuses, and maintain a persistent record of all activities through a JSON-based storage system.

## Project Information

**Repository:** ganeshchandra111/Task-Tracker-CLI  
**Language:** JavaScript (100%)  
**Runtime:** Node.js  
**Storage:** JSON file-based persistence

## Core Features

The Task Tracker CLI enables users to perform the following operations:

- Add new tasks with descriptions
- Update existing task descriptions
- Delete tasks from the system
- Mark tasks with different status levels (todo, in-progress, done)
- List all tasks or filter by specific status
- Persistent storage of all task data in JSON format

## Project Structure

The repository contains the following files:

```
Task-Tracker-CLI/
├── index.js           # Main application logic and CLI interface
├── copy.js            # Utility functions or backup operations
├── todos.json         # JSON file for task data storage
├── package.json       # Project dependencies and metadata
├── package-lock.json  # Locked versions of dependencies
└── .gitignore        # Git ignore configuration
```

## Installation

### Prerequisites

Before installing the Task Tracker CLI, ensure you have the following installed on your system:

- Node.js (version 12.0 or higher recommended)
- npm (Node Package Manager)

### Setup Steps

1. Clone the repository from GitHub:
```bash
git clone https://github.com/ganeshchandra111/Task-Tracker-CLI.git
```

2. Navigate to the project directory:
```bash
cd Task-Tracker-CLI
```

3. Install the required dependencies:
```bash
npm install
```

4. Verify the installation by checking if all files are present and the application can run.

## Usage

### Command Structure

The general command structure for the Task Tracker CLI follows this pattern:

```bash
node index.js [command] [arguments]
```

### Available Commands

#### Adding a Task

To add a new task to your list:

```bash
node index.js add "Task description here"
```

Example:
```bash
node index.js add "Buy groceries"
node index.js add "Complete project documentation"
node index.js add "Call the dentist for appointment"
```

Expected output:
```
Task added successfully (ID: 1)
```

#### Updating a Task

To update the description of an existing task:

```bash
node index.js update [taskId] "New description"
```

Example:
```bash
node index.js update 1 "Buy groceries and cook dinner"
```

Expected output:
```
Task updated successfully (ID: 1)
```

#### Deleting a Task

To remove a task from your list:

```bash
node index.js delete [taskId]
```

Example:
```bash
node index.js delete 1
```

Expected output:
```
Task deleted successfully (ID: 1)
```

#### Marking Task Status

Tasks can have three different statuses: todo, in-progress, and done.

Mark a task as in progress:
```bash
node index.js mark-in-progress [taskId]
```

Example:
```bash
node index.js mark-in-progress 1
```

Mark a task as completed:
```bash
node index.js mark-done [taskId]
```

Example:
```bash
node index.js mark-done 1
```

#### Listing Tasks

List all tasks:
```bash
node index.js list
```

List tasks by specific status:
```bash
node index.js list todo
node index.js list in-progress
node index.js list done
```

Expected output format:
```
Task{id=1, description='Buy groceries', status='todo', createdAt=2024-01-07T10:30:00, updatedAt=2024-01-07T10:30:00}
Task{id=2, description='Complete documentation', status='in-progress', createdAt=2024-01-07T11:00:00, updatedAt=2024-01-07T12:00:00}
```

## Data Storage

### JSON File Structure

Tasks are stored in the `todos.json` file with the following structure:

```json
[
  {
    "id": 1,
    "description": "Task description",
    "status": "todo",
    "createdAt": "2024-01-07T10:30:00.000Z",
    "updatedAt": "2024-01-07T10:30:00.000Z"
  }
]
```

### Task Properties

Each task object contains the following properties:

- **id**: Unique identifier for the task (integer)
- **description**: Text description of the task (string)
- **status**: Current status of the task (string: "todo", "in-progress", or "done")
- **createdAt**: Timestamp when the task was created (ISO 8601 format)
- **updatedAt**: Timestamp when the task was last modified (ISO 8601 format)

## Technical Implementation

### Key Technologies

- **Node.js**: JavaScript runtime for executing the application
- **File System (fs)**: Built-in Node.js module for reading and writing to the JSON file
- **Command-line Arguments**: Process.argv for parsing user input

### Application Flow

1. User executes a command through the terminal
2. The application parses command-line arguments
3. Based on the command, the application performs the requested operation
4. Data is read from or written to the `todos.json` file
5. Feedback is provided to the user through console output
6. The application exits after completing the operation

## Best Practices

### When Using the Application

1. Always use quotation marks around task descriptions that contain spaces
2. Keep task descriptions clear and concise
3. Regularly review and update task statuses
4. Delete completed tasks periodically to maintain a clean list
5. Back up your `todos.json` file if it contains important data

### For Development

1. Ensure proper error handling for file operations
2. Validate user input before processing commands
3. Maintain consistent timestamp formatting
4. Implement unique ID generation for new tasks
5. Add input sanitization to prevent JSON corruption

## Error Handling

The application should handle common errors such as:

- Invalid command syntax
- Non-existent task IDs
- Corrupted JSON file
- File permission issues
- Missing required arguments

## Troubleshooting

### Common Issues and Solutions

**Issue**: Command not recognized
- **Solution**: Verify the command syntax and ensure you are using the correct format

**Issue**: Task ID not found
- **Solution**: List all tasks to verify the correct ID and ensure the task exists

**Issue**: JSON file corruption
- **Solution**: Check the `todos.json` file for syntax errors or restore from backup

**Issue**: Permission denied errors
- **Solution**: Ensure you have read and write permissions for the project directory

## Development Roadmap

Potential enhancements for future versions:

- Add task prioritization levels (low, medium, high)
- Implement due date functionality
- Add search and filter capabilities
- Create task categories or tags
- Export tasks to different formats (CSV, Markdown)
- Add recurring task support
- Implement task dependencies
- Create a configuration file for user preferences
- Add color-coded output for better readability
- Implement task archiving functionality

## Contributing

To contribute to the Task Tracker CLI project:

1. Fork the repository
2. Create a new branch for your feature
3. Implement your changes with appropriate tests
4. Submit a pull request with a clear description of your changes
5. Ensure your code follows the existing style and conventions

## License

Please refer to the repository for license information.

## Support and Contact

For issues, questions, or suggestions:

- Open an issue on the GitHub repository
- Review existing issues for solutions
- Contact the repository maintainer through GitHub

## Conclusion

The Task Tracker CLI is a practical tool for managing daily tasks through a simple command-line interface. It demonstrates fundamental programming concepts including file system operations, JSON data handling, and command-line argument processing. This project serves as an excellent foundation for learning CLI application development and can be extended with additional features based on user needs.

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Maintainer**: ganeshchandra111