//Consuming the API and Filtering by Categories

let allProducts = [];
let visibleProducts = 4

// separemos la logica de consumo de servicios, mapper, e insercion en diferentes funciones
async function uploadProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();


        // no usemos palabras m'agicas podemos guardar esto en un objeto para evitar escribirlo manualmente
        allProducts = data.products.filter(product =>
            product.category === "beauty" ||
            product.category === "fragrances" ||
            product.category ===  "furniture"
        );

        displayProducts(allProducts.slice(0, visibleProducts));
        return data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

//Painting to the API

function displayProducts(products) {

    const container = document.getElementById("products-container");
    container.innerHTML = '';

    products.forEach(product => {
        // no console.log
        console.log(products);
       
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
        rating.textContent = product.rating;
        
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
            cartCounter++
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

function loadAllProducts() {
    visibleProducts = allProducts.length;
    displayProducts(allProducts);

    const loadMoreButton = document.getElementById("load-more-button");
    loadMoreButton.textContent = "all products are loaded";
    loadMoreButton.disabled = true; 
}

document.getElementById("load-more-button").addEventListener("click", loadAllProducts);



// Inicializa
uploadProducts();

window.onload = () => {
    uploadProducts();
}