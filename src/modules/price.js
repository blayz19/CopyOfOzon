import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { priceFilter } from "./filters.js";
import sale from "./sale.js";

const price = () => {
    const priceBefore = document.getElementById('min');
    const priceAfter = document.getElementById('max');
    let value1 = 0;
    let value2 = 999999;

    const updateGoods = () => {
        getData().then((data) => {
            const minPrice = priceBefore.value === '' ? 0 : Number(priceBefore.value) ;
            const maxPrice = priceAfter.value === '' ? 999999 : Number(priceAfter.value);
            
            renderGoods(priceFilter(data, minPrice, maxPrice));
        });
    };

    priceBefore.addEventListener('input', (event) => {
        value1 = event.target.value;
        console.log('Min:', value1);
        updateGoods();
    });

    priceAfter.addEventListener('input', (event) => {
        value2 = event.target.value;
        console.log('Max:', value2);
        updateGoods();
    });

    updateGoods();
}

export default price;