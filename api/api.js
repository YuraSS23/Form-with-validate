export async function api(formData) {
    const response = await fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: formData,
    })
    const data  = await response.json()
    if (data.status === 'success') {
        alert(data.message);
    } else if (data.status === 'error') {
        alert(`Произошла ошибка, попробуйте позже. Ошибка: ${data.message}`);
    }
}