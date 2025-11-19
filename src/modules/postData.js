const postData = (data) => {
    return fetch('https://test-66078-default-rtdb.firebaseio.com/cart.json',{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json; charset=UTF-8',
        }

    })
    .then(res =>res.json());
}
export default postData;