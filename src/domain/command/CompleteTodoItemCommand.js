const db = require('../../infrastructure/db/index');

class CompleteTodoItemCommand {
  static async execute(todoID, { completionDate, completionNotes }) {
    const todoItem = await db.findById('todoItems', todoID);
    if (!todoItem) {
      throw new Error('Todo Item not found');
    }
    const completedTodoItem = {
      ...todoItem,
      completionDate,
      completionNotes
    };
    await db.update('todoItems', todoID, completedTodoItem);
    return completedTodoItem;
  }
}

module.exports = CompleteTodoItemCommand;