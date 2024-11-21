// Mapper for section of filter categories 
const categoryMapper = {
    fragrances: "fragrances",
    beauty: "makeup",
    furniture: "furniture",
}

document.getElementById("category-selector").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    filterByCategory(selectedCategory);
});

function filterByCategory(selectedCategory) {
    let filteredProducts;
    if (selectedCategory === "all") {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product => product.category === selectedCategory)
    }

    displayProducts(filteredProducts.slice(0, visibleProducts));
}

// Filter - the search

function searchProducts(search) {
    // tal vez [product.title, product.description, String(product.price), String(product.rating)].includes(search.toLowerCase())
    const filteredProducts = allProducts.filter(product => 
            product.title.toLowerCase().includes(search.toLowerCase()) || 
            product.description.toLowerCase().includes(search.toLowerCase()) || 
            String(product.price).includes(search.toLowerCase()) || 
            String(product.rating).includes(search.toLowerCase())
        );
        
        displayProducts(filteredProducts)
    }


document.getElementById("search-products").addEventListener("input", (event) => {
    const valueInput = event.target.value;
    searchProducts(valueInput);
})