const deleteData = () =>{
    return fetch('http://localhost:3000/goods/bf80',{
        method: "DELETE",
    })
}

export default deleteData;
