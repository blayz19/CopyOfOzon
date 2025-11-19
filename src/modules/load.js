import getData from "./getData.js";
import deleteData from "./deleteData.js";
import renderGoods from "./renderGoods.js";

function load(){
    
    getData().then((data)=>{
        renderGoods(data);
    });

           
        
    
}

export default load;