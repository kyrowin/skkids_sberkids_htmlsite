document.addEventListener("DOMContentLoaded", function() {
    const historyHeader = document.getElementById("history-header");
    const history = document.getElementById("history");
    const arrow = document.getElementById("arrow");

    historyHeader.addEventListener("click", function() {
        history.classList.toggle("open");
        
        if (history.classList.contains("open")) {
            arrow.textContent = "▲"; // Arrow up
        } else {
            arrow.textContent = "▼"; // Arrow down
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactList = document.getElementById("contact-list");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    scrollLeftBtn.addEventListener("click", () => {
        contactList.scrollBy({
            left: -100,
            behavior: "smooth"
        });
    });

    scrollRightBtn.addEventListener("click", () => {
        contactList.scrollBy({
            left: 100,
            behavior: "smooth"
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const addSavingsBtn = document.getElementById('add-savings-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalAddBtn = document.getElementById('modal-add-btn');
    const goalNameInput = document.getElementById('goal-name');
    const goalAmountInput = document.getElementById('goal-amount');

    // Открыть модальное окно
    addSavingsBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Добавить новую копилку
    modalAddBtn.addEventListener('click', () => {
        const goalName = goalNameInput.value;
        const goalAmount = goalAmountInput.value;

        if (goalName && goalAmount) {
            const savingsContainer = document.querySelector('.container');

            // Создаем новую копилку
            const newSavingsGoal = document.createElement('div');
            newSavingsGoal.classList.add('savings-goal');
            newSavingsGoal.innerHTML = `
                <h3>${goalName}</h3>
                <p>Цель: ${goalAmount} ₽</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 0%;"></div>
                </div>
                <p>Собрано: 0 ₽</p>
                <button class="savings-action add-funds">Пополнить</button>
                <button class="savings-action withdraw-funds">Снять</button>
            `;

            // Добавляем копилку на страницу
            savingsContainer.appendChild(newSavingsGoal);

            // Сброс значений и закрытие модального окна
            goalNameInput.value = '';
            goalAmountInput.value = '';
            modal.style.display = 'none';
        } else {
            alert("Введите цель и сумму для новой копилки.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('add-task-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalAddBtn = document.getElementById('modal-add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Открыть модальное окно для добавления задачи
    addTaskBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Добавить задачу
    modalAddBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');

            // Создаем элементы задачи
            taskItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="task-complete-btn">Выполнено</button>
                <button class="task-delete-btn">Удалить</button>
            `;

            // Добавляем обработчики для новых задач
            taskItem.querySelector('.task-complete-btn').addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.querySelector('.task-delete-btn').addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            // Добавляем задачу в список
            taskList.appendChild(taskItem);

            // Очищаем и закрываем модальное окно
            taskInput.value = '';
            modal.style.display = 'none';
        } else {
            alert('Введите описание задачи');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle-btn');

    // Проверка сохранённой темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');
    themeToggleButton.textContent = savedTheme === 'light' ? 'Тёмная' : 'Светлая';

    // Переключение темы при нажатии на кнопку
    themeToggleButton.addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Обновление класса темы
        document.body.classList.remove(currentTheme + '-theme');
        document.body.classList.add(newTheme + '-theme');

        // Обновление текста кнопки и сохранение в localStorage
        themeToggleButton.textContent = newTheme === 'light' ? 'Тёмная' : 'Светлая';
        localStorage.setItem('theme', newTheme);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const supportBtn = document.getElementById('support-btn');
    const supportModal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    // Открыть модальное окно при нажатии на кнопку поддержки
    supportBtn.addEventListener('click', () => {
        supportModal.style.display = 'flex';
    });

    // Закрыть модальное окно при нажатии на крестик
    closeModal.addEventListener('click', () => {
        supportModal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target == supportModal) {
            supportModal.style.display = 'none';
        }
    });
});

