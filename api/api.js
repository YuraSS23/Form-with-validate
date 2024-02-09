export function api(formData) {
     return fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: formData,
    })
         .then((response)=>{
        return response.json()
    })
         .then((data)=>{
            alert(data.message);
        })
}