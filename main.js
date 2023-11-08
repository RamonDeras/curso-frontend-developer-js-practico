const vEmail = document.querySelector('.navbar-email');
const vDesktopMenu = document.querySelector('.desktop-menu');
const vMenuHamIcon = document.querySelector('.menu');
const vMobilMenu = document.querySelector('.mobile-menu');
const vMenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const vshoppingCartContainer = document.querySelector('#shoppingCartContainer');
const vCardsContainer = document.querySelector('.cards-container');

vEmail.addEventListener('click', toggleDesktopMenu);
vMenuHamIcon.addEventListener('click', toggleMobileMenu);
vMenuCarritoIcon.addEventListener('click', toggleCarritoAside);

// mostrar menu colgante
function toggleDesktopMenu() {
  const isAsideClosed  = vshoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    vshoppingCartContainer.classList.add('inactive');
  }
  vDesktopMenu.classList.toggle('inactive');
}

// mostrar menu Mobil
function toggleMobileMenu() {
  const isAsideClosed  = vshoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    vshoppingCartContainer.classList.add('inactive');
  }
  vMobilMenu.classList.toggle('inactive');
}

// mostrar menu Carrito 
function toggleCarritoAside() {
  const isMobileMenuClosed  = vMobilMenu.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    vMobilMenu.classList.add('inactive');
  }
  vshoppingCartContainer.classList.toggle('inactive');
}


// mostrar lista de productos
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Monito',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Laptop',
  price: 1500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Silla',
  price: 750,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    vCardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
