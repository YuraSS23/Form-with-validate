const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

export function validator() {
    if (!nameInput.value.trim()) {
        showError('name', 'Пожалуйста, введите имя');
    } else {
        hideError('name');
    }
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        showError('email', 'Пожалуйста, введите адрес электронной почты');
    } else if (!isValidEmail(emailValue)) {
        showError('email', 'Пожалуйста, введите корректный адрес электронной почты');
    } else {
        hideError('email');
    }

    if (!phoneInput.value.trim()) {
        showError('phone', 'Пожалуйста, введите корректный номер телефона');
    } else {
        hideError('phone');
    }

    if (!messageInput.value.trim()) {
        showError('message', 'Пожалуйста, введите сообщение');
    } else {
        hideError('message');
    }
    return nameInput.value.trim() && isValidEmail(emailValue) && phoneInput.value.trim() && messageInput.value.trim()
}

function showError(fieldId, errorMessage) {
    const input = document.getElementById(fieldId);
    input.classList.add('error');
    const errorDiv = document.getElementById(`${fieldId}-error`);
    errorDiv.textContent = errorMessage;
}

function hideError(fieldId) {
    const input = document.getElementById(fieldId);
    input.classList.remove('error');
    const errorDiv = document.getElementById(`${fieldId}-error`);
    errorDiv.textContent = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}