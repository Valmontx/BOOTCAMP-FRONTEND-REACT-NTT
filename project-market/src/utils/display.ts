import {uploadProducts} from "../services/api"
import { incrementCartCounter} from "../pages/shopping-cart";
import { Product , state } from "../index";



//Painting to the API

export function displayProducts(products: Product[]): void {

    const container = document.getElementById("products-container");
   if(!container) return;
    container.innerHTML = '';

    products.forEach(product => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        const containerImg = document.createElement('div');
        containerImg.classList.add('container-img');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.src = product.images[0];

        const heartIcon = document.createElement('i');
        heartIcon.classList.add('fa-regular', 'fa-heart');
        heartIcon.addEventListener('click', () => {
            heartIcon.classList.toggle('active'); 
        });

        containerImg.appendChild(img);
        containerImg.appendChild(heartIcon);

        const title = document.createElement('h2');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = product.price + "$"

        const rating = document.createElement('p');
        rating.classList.add('rating');
        rating.textContent = String(product.rating);
        
        const startIcon = document.createElement('i');
        startIcon.classList.add('fa-solid', 'fa-star');

        rating.appendChild(startIcon)

        const containerButton = document.createElement('div');
        containerButton.classList.add('container-card-button');

        const button = document.createElement('button');
        button.classList.add('card-button');
        button.id = "addToBag"
        button.textContent = 'Add to bag ';

        button.addEventListener('click', () =>{
            incrementCartCounter()
        })

        containerButton.appendChild(button); 

        card.appendChild(containerImg);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(containerButton);

        container.appendChild(card);

    });
}
// Button of all products

export function loadAllProducts() {
    
    state.visibleProducts = state.allProducts.length;
    displayProducts(state.allProducts);

    const loadMoreButton = document.getElementById("load-more-button") as HTMLButtonElement;
    if(loadMoreButton){
        loadMoreButton.textContent = "all products are loaded";
        loadMoreButton.disabled = true; 
    }  
}

document.getElementById("load-more-button")?.addEventListener("click", loadAllProducts) 



// Inicializa
uploadProducts();

window.onload = () => {
uploadProducts();
}