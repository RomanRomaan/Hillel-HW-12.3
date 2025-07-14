// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const TodoList = document.getElementById('TodoList');
const inputTodoLi = document.getElementById('inputTodoLi');
const addBtn = document.getElementById('addBtn');

TodoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.target.closest('li').remove();
    }
});

addBtn.addEventListener('click', function (event) {
    const inputValue = inputTodoLi.value
    if (inputTodoLi.value) {
        {
            const newLi = document.createElement('li');
            newLi.textContent = inputTodoLi.value;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            newLi.appendChild(deleteBtn);
            TodoList.appendChild(newLi);
            inputTodoLi.value = '';

        }
    }
});