import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { saleFilter } from "./filters.js";

const sale = () =>{
    const saleBox = document.querySelector('.filter-check_checkmark');
    let isOpen = false;
    saleBox.addEventListener('click',()=>{
        isOpen = !isOpen;
        if(isOpen){
            saleBox.style.background = '#005bff';

            getData().then(data => {
                renderGoods(saleFilter(data));
            });
        }
        else{
            saleBox.style.background = '';
            getData().then(data => {
                renderGoods(data);
            });
        }
    });
}

export default sale;