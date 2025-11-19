// simple-approach.js
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { priceFilter, saleFilter } from "./filters.js";

const salePrice = () =>{   
    let currentMinPrice = 0;
    let currentMaxPrice = 999999;
    let currentSaleFilter = false;

    const updateGoods = () => {
        getData().then(data => {
            let filteredGoods = data;
            
            // Применяем фильтр по цене
            filteredGoods = priceFilter(filteredGoods, currentMinPrice, currentMaxPrice);
            
            // Применяем фильтр по акции если активен
            if (currentSaleFilter) {
                filteredGoods = saleFilter(filteredGoods);
            }
            
            renderGoods(filteredGoods);
        });
    };

    // Инициализация фильтра цены
    const priceBefore = document.getElementById('min');
    const priceAfter = document.getElementById('max');

    priceBefore.addEventListener('input', (event) => {
        currentMinPrice = event.target.value === '' ? 0 : Number(event.target.value);
        updateGoods();
    });

    priceAfter.addEventListener('input', (event) => {
        currentMaxPrice = event.target.value === '' ? 999999 : Number(event.target.value);
        updateGoods();
    });

    // Инициализация фильтра акций
    const saleBox = document.querySelector('.filter-check_checkmark');
    saleBox.addEventListener('click', () => {
        currentSaleFilter = !currentSaleFilter;
        saleBox.style.background = currentSaleFilter ? '#005bff' : '';
        updateGoods();
    });

    // Первоначальная загрузка
    updateGoods();
} 
export default salePrice;