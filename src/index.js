import "./styles.scss"
import IMask from "imask";
import {api} from "../api/api";
import {validator} from "../scripts/validator";
import "../modal/modal.scss"

const form = document.getElementById('feedback-form');
const phoneInput = document.getElementById('phone');

IMask(phoneInput, {
    mask: "+{375} (00) 000-00-00",
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    if (validator()) {
        debugger
        await api(formData)
        form.reset()
    }
});
