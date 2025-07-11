const db = require('../../infrastructure/db/index');

class DeleteTodoItemCommand {
  static async execute(todoID, { deletionReason }) {
    const todoItem = await db.findById('todoItems', todoID);
    if (!todoItem) {
      throw new Error('Todo Item not found');
    }
    await db.remove('todoItems', todoID);
    return { todoID, deletionReason };
  }
}

module.exports = DeleteTodoItemCommand;