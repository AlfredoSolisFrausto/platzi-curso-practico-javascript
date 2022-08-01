const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');


navbarEmail.addEventListener('click', () =>
{
    //Cierra el shoppingCartContainer en caso de estar abierto:
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Cierra el productDetail
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
});

burgerMenu.addEventListener('click', () =>
{
    //Cierra el shoppingCartContainer en caso de estar abierto:
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Cierra el productDetail
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
});

navbarShoppingCart.addEventListener('click', () =>
{
    //Cierra el mobileMenu en caso de estar abierto:
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    //Cierra el desktopMenu en caso de estar abierto:
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    //Cierra el productDetail
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
});

productDetailCloseIcon.addEventListener('click', () =>
{
    productDetailContainer.classList.add('inactive');
});

const productList = [];
for (var i = 0; i < 10; i++)
{
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
}

function openProductDetailAside()
{
    //Cierra el shoppingCartContainer en caso de estar abierto:
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Cierra el desktopMenu en caso de estar abierto:
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

const cardsContainer = document.querySelector('.cards-container');
for (product of productList){
    // const htmlCard = `<div class="product-card">
    // <img src=${product.image} class="product-img">
    // <div class="product-info">
    // <div>
    // <p>$${product.price}</p>
    // <p>$${product.name}</p>
    // </div>
    // <figure>
    // <img src="./icons/bt_add_to_cart.svg">
    // </figure>
    // </div>
    // </div>`

    // cardsContainer.innerHTML += htmlCard;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement('p');
    productName.innerText = `$${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgBuy = document.createElement('img');
    productImgBuy.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgBuy);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}