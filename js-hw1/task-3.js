"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль администратора.');

if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
}else if (message === null){
    console.log('Отменено пользователем.');
}else console.log('Доступ запрещен, неверный пароль!');

alert.message