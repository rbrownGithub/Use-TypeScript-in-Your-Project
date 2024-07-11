document.addEventListener('DOMContentLoaded', function() {
  const todoList: HTMLElement = document.getElementById('todo-list')!;
  const todoInput: HTMLInputElement = document.getElementById('todo-input') as HTMLInputElement;
  const addBtn: HTMLElement = document.getElementById('add-btn')!;

  addBtn.addEventListener('click', function() {
    const todoText: string = todoInput.value.trim();

    if (todoText !== '') {
      // Create new list item
      const listItem: HTMLLIElement = document.createElement('li');
      listItem.textContent = todoText;

      // Add click event to remove item
      listItem.addEventListener('click', function() {
        listItem.remove();
      });

      // Add the new list item to the list
      todoList.appendChild(listItem);

      // Clear the input
      todoInput.value = '';
    }
  });
});
