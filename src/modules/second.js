import getData from "./getData.js";
import postData from "./postData.js";
import deleteData from "./deleteData.js";

function second(){
    const cartBtn = document.getElementById('cart');
    
    cartBtn.addEventListener('click',()=>{
        getData().then((data)=>{
                console.log(data);
            })

    })        
        
    
}

export default second;