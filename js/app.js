// убираем дефолтное поведение с button при клике
let btn = document.querySelector('.btn');

function preventDef(event) {
    event.preventDefault();
};

btn.addEventListener('click', preventDef);

// делаем смену темной темы и светлой
let page = document.querySelector('.page');
let themeName = document.querySelector('.theme-name');
let switchBtn = document.querySelector('.checkbox-google-switch');

switchBtn.onclick = function () {
    if(page.classList.toggle('dark')) themeName.innerHTML = 'Тёмная тема';
    if(page.classList.toggle('light')) themeName.innerHTML = 'Светлая тема';
};
