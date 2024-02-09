import "./styles.css"
import IMask from "imask";
const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');


const phoneMask = IMask(phoneInput, {
    mask: "+{375} (20) 000-00-00",
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
        showError('name', 'Пожалуйста, введите имя');
    } else {
        hideError('name');
    }

    // Validate email (required and valid format)
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

/*    // If all validations pass, submit the form via AJAX
    const formData = new FormData(form);
    try {
        const response = await fetch('/submit-feedback', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        if (data.status === 'success') {
            alert(data.msg);
            // Optionally, reset the form
            form.reset();
        } else if (data.status === 'error') {
            // Handle specific field errors
            for (const fieldName in data.fields) {
                showError(fieldName, data.fields[fieldName]);
            }
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }*/

});

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
    // Basic email validation (you can use a more robust regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
