const db = require('../../infrastructure/db/index');

class UpdateTodoItemCommand {
  static async execute(todoID, { newTitle, newDescription, newDueDate, newPriorityLevel, newCategory }) {
    const todoItem = await db.findById('todoItems', todoID);
    if (!todoItem) {
      throw new Error('Todo Item not found');
    }
    const updatedTodoItem = {
      ...todoItem,
      todoTitle: newTitle || todoItem.todoTitle,
      description: newDescription || todoItem.description,
      dueDate: newDueDate || todoItem.dueDate,
      priorityLevel: newPriorityLevel || todoItem.priorityLevel,
      category: newCategory || todoItem.category
    };
    await db.update('todoItems', todoID, updatedTodoItem);
    return updatedTodoItem;
  }
}

module.exports = UpdateTodoItemCommand;