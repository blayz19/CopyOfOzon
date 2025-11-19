export const searchFilter = (goods,value) => {
    return goods.filter(goodsItem => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export const categoryFilter = (goods,value) => {
    return goods.filter(goodsItem => {
        return goodsItem.category === value;
    });
}

export const priceFilter = (goods,priceBefore=0,priceAfter=999999)=>{
    return goods.filter(goodsItem => {
        if(goodsItem.price<=priceAfter && goodsItem.price >= priceBefore){
            return true;
        }
    });
}

export const saleFilter = (goods) => {
    return goods.filter(goodsItem =>{
        return goodsItem.sale;
    })
}