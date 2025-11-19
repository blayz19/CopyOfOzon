import postData from "./postData.js";
import renderCart from "./renderCart.js";
const cart = () => {
    const cartBtn = document.getElementById("cart");
    const cartModal = document.querySelector(".cart");
    const closeCartBtn = cartModal.querySelector(".cart-close");
    const goodsWrapper = document.querySelector('.goods');
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartSend = document.querySelector('.cart-confirm');

    const openCart = () => {
        cartModal.style.display = 'flex';
        const cart = localStorage.getItem('cart') ? 
            JSON.parse(localStorage.getItem('cart')) : [] ;
        
        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem)=>{
            return sum + goodItem.price;
        },0)
    }
    const closeCart = () => {
        cartModal.style.display = 'none';
    }

    cartBtn.addEventListener('click',()=>{
        openCart();

    });
    closeCartBtn.addEventListener('click',closeCart);
    
    goodsWrapper.addEventListener('click', (event)=>{
        if(event.target.classList.contains('btn-primary')){
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [] ;
            
            const goodItem = goods.find((item)=>{
                return item.id == key;
            });

            cart.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cart));
            
        }
    });

    cartWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary')){
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];
            const card = event.target.closest('.card');
            const key = card.dataset.key;

            const index = cart.findIndex((item)=>{
                return item.id == key;
            });

            cart.splice(index, 1)
            
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem)=>{
                return sum + goodItem.price;
            },0);
        }
    });

    cartSend.addEventListener('click',()=>{
        const cart = localStorage.getItem('cart') ? 
            JSON.parse(localStorage.getItem('cart')) : [];
        
        postData(cart).then(()=>{
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0;
        });


    });
}

export default cart;
