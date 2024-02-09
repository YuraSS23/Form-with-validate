import "./styles.css"
import IMask from "imask";
import {api} from "../api/api";
import {validator} from "../scripts/validator";

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

    const formData = new FormData(form);
    if (validator()) {
        api(formData).then(()=>form.reset())
    }

    /*const data = (await response).body
    debugger
            if (data.status === 'success') {
                alert(data.message);
                form.reset();
            } else if (data.status === 'error') {
                alert(`Произошла ошибка, попробуйте позже. Код ошибки: ${data.message}`);
            }*/
});

//modal

document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
});
