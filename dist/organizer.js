"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            // Add click event to remove item
            listItem.addEventListener('click', function () {
                listItem.remove();
            });
            // Add the new list item to the list
            todoList.appendChild(listItem);
            // Clear the input
            todoInput.value = '';
        }
    });
});
