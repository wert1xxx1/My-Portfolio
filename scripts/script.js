// Находим элементы с классами '.cursor' и '.cursor2'
var cursor = document.querySelector('.cursor'); // Находит элемент с классом 'cursor'
var cursorinner = document.querySelector('.cursor2'); // Находит элемент с классом 'cursor2'

// Находим все элементы <a> и <button> на странице
var a = document.querySelectorAll('a'); // Находит все ссылки (теги <a>)
var button = document.querySelectorAll('button'); // Находит все кнопки (теги <button>)

// Обработчик события 'mousemove' для перемещения кастомного курсора
document.addEventListener('mousemove', function (e) {
    var x = e.clientX; // Координата X курсора
    var y = e.clientY; // Координата Y курсора
    // Перемещаем элемент 'cursor' в позицию курсора
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

// Обработчик события 'mousemove' для перемещения внутреннего курсора
document.addEventListener('mousemove', function (e) {
    var x = e.clientX; // Координата X курсора
    var y = e.clientY; // Координата Y курсора
    // Перемещаем элемент 'cursorinner' в позицию курсора
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

// Обработчик события 'mousedown' для добавления класса при нажатии кнопки мыши
document.addEventListener('mousedown', function () {
    cursor.classList.add('click'); // Добавляем класс 'click' к элементу 'cursor'
    cursorinner.classList.add('cursorinnerhover'); // Добавляем класс 'cursorinnerhover' к элементу 'cursorinner'
});

// Обработчик события 'mouseup' для удаления класса при отпускании кнопки мыши
document.addEventListener('mouseup', function () {
    cursor.classList.remove('click'); // Убираем класс 'click' у элемента 'cursor'
    cursorinner.classList.remove('cursorinnerhover'); // Убираем класс 'cursorinnerhover' у элемента 'cursorinner'
});

// Для всех элементов <a> добавляем обработчики наведения и ухода курсора
a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover'); // Добавляем класс 'hover' при наведении
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover'); // Убираем класс 'hover' при уходе курсора
    });
});

// Для всех элементов <button> добавляем обработчики наведения и ухода курсора
button.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover'); // Добавляем класс 'hover' при наведении
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover'); // Убираем класс 'hover' при уходе курсора
    });
});

// Функция для установки текущего года в элемент с id 'currentYear'
function setYearForCopyright() {
    const currentYearElem = document.getElementById("currentYear"); // Находим элемент с id 'currentYear'
    const year = new Date().getFullYear(); // Получаем текущий год
    currentYearElem.innerText = year; // Устанавливаем текущий год в элемент
}
setYearForCopyright(); // Вызываем функцию для установки года

// Функция для открытия полноэкранного навигационного меню
function openFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen"); // Находим элемент с id 'navFullScreen'
    navFullScreen.classList.remove("nav-fullscreen-close"); // Убираем класс 'nav-fullscreen-close'
    navFullScreen.classList.add("nav-fullscreen-open"); // Добавляем класс 'nav-fullscreen-open'
}

// Функция для закрытия полноэкранного навигационного меню
function closeFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen"); // Находим элемент с id 'navFullScreen'
    navFullScreen.classList.add("nav-fullscreen-close"); // Добавляем класс 'nav-fullscreen-close'
    navFullScreen.classList.remove("nav-fullscreen-open"); // Убираем класс 'nav-fullscreen-open'
}

// Объект с переводами на разные языки
const translations = {
    en: {
        'nav-home': 'HOME',
        'nav-portfolio': 'WORK',
        'nav-about': 'ABOUT',
        'nav-contact': 'CONTACT',
        'intro-1': 'Hello 👋🏻 I am Wert1xxx',
        'intro-2': 'I create',
        'apps': 'APPS',
        'website': 'WEBSITE',
        'ui-ux': 'UI/UX',
        'frameworks-heading': 'FRAMEWORKS',
        'frameworks-subheading': 'I USE',
        'intro-paragraph-1': 'Hi there 👋🏻, My name is Wert1xxx, I am a python, lua roblox programmer and also a web developer.',
        'intro-paragraph-2': 'Some of my works can be seen below. I will be glad if you write me about providing services, of course not for free.',
        'intro-paragraph-3': 'Hi there 👋🏻, My name is Wert1xxx',
        'intro-paragraph-4': 'I create',
        'intro-paragraph-5': 'FRAMEWORKS',
        'intro-paragraph-6': 'WHICH I USE',
        'intro-paragraph-7': 'MY',
        'intro-paragraph-8': 'WORKS',
        'intro-paragraph-9': 'ABOUNT',
        'intro-paragraph-10': 'ME',
        'intro-paragraph-11': 'contact',
        'intro-paragraph-12': 'me'
    },
    ru: {
        'nav-home': 'ГЛАВНАЯ',
        'nav-portfolio': 'РАБОТЫ',
        'nav-about': 'ОБО МНЕ',
        'nav-contact': 'СВЯЗЬ СО МНОЙ',
        'intro-1': 'Привет 👋🏻 меня зовут кряша',
        'intro-2': 'Я создаю',
        'apps': 'APPS',
        'website': 'WEBSITE',
        'ui-ux': 'UI/UX',
        'frameworks-heading': 'ФРЕЙМВОРКИ',
        'frameworks-subheading': 'КОТОРЫЕ Я ИСПОЛЬЗУЮ',
        'intro-paragraph-1': 'Привет 👋🏻, меня зовут Wert1xxx, я программист на Python, Lua для Roblox и также веб-разработчик.',
        'intro-paragraph-2': 'Некоторые из моих работ можно увидеть ниже. Буду рад, если вы напишете мне по поводу оказания услуг, конечно, не бесплатно.',
        'intro-paragraph-3': 'Привет 👋🏻, меня зовут Wert1xxx',
        'intro-paragraph-4': 'Я создаю',
        'intro-paragraph-5': 'ФРЕЙМВОРКИ',
        'intro-paragraph-6': 'КОТОРЫЕ Я ИСПОЛЬЗУЮ',
        'intro-paragraph-7': 'МОИ',
        'intro-paragraph-8': 'РАБОТЫ',
        'intro-paragraph-9': 'ОБО',
        'intro-paragraph-10': 'МНЕ',
        'intro-paragraph-11': 'связаться со',
        'intro-paragraph-12': 'мной'
    }
};

// Функция для установки языка на странице
function setLanguage(language) {
    // Проходим по всем элементам с атрибутом 'data-key'
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key'); // Получаем значение атрибута 'data-key'
        element.textContent = translations[language][key]; // Устанавливаем текст в соответствии с переводом
    });
}

setLanguage('ru'); // Устанавливаем язык страницы на русский
