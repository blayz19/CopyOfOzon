const getData = () => {
    return fetch(`https://test-66078-default-rtdb.firebaseio.com/goods.json`)
      .then(response => response.json());
      
}

export default getData;