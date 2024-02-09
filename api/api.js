export async function api(formData) {
    const response = await fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: formData,
    })
    const data  = await response.json()
    await alert(data.message);
}