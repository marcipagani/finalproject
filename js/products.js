<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() { 
=======
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
=======
document.addEventListener("DOMContentLoaded", function() { 
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
    const categoryId = localStorage.getItem("catID");

    if (!categoryId) {
        console.error('Error: No se encontró el "catID" en localStorage. (╥_╥)');
        return;
    }

    const url = `https://japceibal.github.io/emercado-api/cats_products/${categoryId}.json`;

    let products = [];
    let filteredProducts = [];

    // Función para cargar productos
    function loadProducts() {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la red al intentar cargar los productos. (╥_╥)');
                }
                return response.json();
            })
            .then(data => {
                products = data.products;
                filteredProducts = products;
                displayProducts(products);
                updateResultsInfo();
            })
            .catch(error => console.error('Error al cargar productos: (╥_╥)', error));
    }

    function displayProducts(productList) {
        const container = document.getElementById('product-list');
<<<<<<< HEAD
=======
<<<<<<< HEAD
        
        container.innerHTML = '';

        if (!productList || productList.length === 0) {

            container.innerHTML = '<h1> No hay productos disponibles. ૮꒰ ˶╥ ༝ ╥˶꒱ა ♡ </h1>';
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        container.innerHTML = '';

        if (!productList || productList.length === 0) {
            container.innerHTML = '<h1>No hay productos disponibles. ૮꒰ ˶╥ ༝ ╥˶꒱ა ♡</h1>';
<<<<<<< HEAD
=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
            return;
        }

        productList.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';

            productItem.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}')"></div>
                <div class="product-content">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="product-sold">Vendidos: ${product.soldCount}</p>
                </div>
                <div class="product-price"> 
                    ${product.currency} ${product.cost}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
                <button id="ver-btn-${product.id}" class="btn btn-outline-secondary">Ver detalles</button>
                </div>
            `;
            
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
                <button id="ver-btn-${product.id}" class="btn btn-outline-secondary">Ver detalles</button>
                </div>
            `;

<<<<<<< HEAD
=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
            container.appendChild(productItem);

            // Agregar evento para guardar ID y redirigir
            document.getElementById(`ver-btn-${product.id}`).addEventListener('click', function() {
                saveProductId(product.id, categoryId);
            });
        });
    }

    function filterAndSortProducts() {
        let filtered = products;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
        const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
        const sortBy = document.getElementById('sort-options').value;

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        // Filtro por el rango de precios
        filtered = filtered.filter(product => product.cost >= minPrice && product.cost <= maxPrice);

        // Ordenar productos
        if (sortBy === 'asc-price') {
            filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortBy === 'des-price') {
            filtered.sort((a, b) => b.cost - a.cost);
        } else if (sortBy === 'des-relevance') {
            filtered.sort((a, b) => b.soldCount - a.soldCount);
        }
<<<<<<< HEAD

=======
<<<<<<< HEAD
        
=======

>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        filteredProducts = filtered;
        displayProducts(filteredProducts);
        updateResultsInfo();
    }

    function updateResultsInfo() {
        const resultsInfo = document.querySelector('.col-8.my-0');
        if (resultsInfo) {
            const totalResults = products.length;
            const displayedResults = filteredProducts.length;
            const start = displayedResults > 0 ? 1 : 0;
            const end = displayedResults > 0 ? displayedResults : 0;

            resultsInfo.textContent = `Mostrando ${start} - ${end} de ${totalResults} resultados encontrados`;
        }
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
    
=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
    // Función para configurar los botones de vista
    function setupViewButtons() {
        const productList = document.getElementById('product-list');
        const gridViewButton = document.getElementById('grid-view');
        const listViewButton = document.getElementById('list-view');

        function switchToGridView() {
            productList.classList.add('grid-view');
<<<<<<< HEAD
            gridViewButton.classList.add('active');
            listViewButton.classList.remove('active');
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        }

        function switchToListView() {
            productList.classList.remove('grid-view');
<<<<<<< HEAD
            listViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        }

        if (gridViewButton && listViewButton) {
            gridViewButton.addEventListener('click', switchToGridView);
            listViewButton.addEventListener('click', switchToListView);
        } else {
            console.error('Botones de vista no encontrados (╥_╥)');
        }
    }

    function clearFilters(){
        document.getElementById("min-price").value = "";
        document.getElementById("max-price").value = "";
        document.getElementById("sort-options").value = "default";
<<<<<<< HEAD
        location.reload();
    }

=======
<<<<<<< HEAD

        location.reload();
    }
    
=======
        location.reload();
    }

>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
    document.getElementById('min-price').addEventListener('input', filterAndSortProducts);
    document.getElementById('max-price').addEventListener('input', filterAndSortProducts);
    document.getElementById('sort-options').addEventListener('change', filterAndSortProducts);
    document.getElementById("clear-filter").addEventListener("click", clearFilters);

<<<<<<< HEAD
=======
<<<<<<< HEAD

// Función para guardar el ID y redirigir a la página de detalles
function saveProductId(id, category) {
// Guardar el ID y la categoría en localStorage o redirigir con URL
const queryString = `?id=${id}&category=${category}`;
window.location.href = `product-info.html${queryString}`;
}

//Desafíate, función buscar productos
function buscarEnProductos(e){

    const buscador = document.getElementById('buscador');
    const productos = document.querySelectorAll('.product-item');

    buscador.addEventListener('input', buscarEnProductos);
    const letras = e.target.value.toLowerCase();


    productos.forEach(producto => {
      const titulo = producto.querySelector('h2').textContent.toLowerCase();
      const descripcion = producto.querySelector('p').textContent.toLowerCase();
      

      // Mostrar u ocultar los productos que coinciden con el texto de búsqueda
      if (titulo.includes(letras) || descripcion.includes(letras)) {
        producto.style.display = '';
      } else {
        producto.style.display = 'none';
      }
    })
}
    loadProducts();
    setupViewButtons();
    buscarEnProductos();

});
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
    // Función para guardar el ID y redirigir a la página de detalles
    function saveProductId(id, category) {
        const queryString = `?id=${id}&category=${category}`;
        window.location.href = `product-info.html${queryString}`;
    }

    // Función para buscar en productos
    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', function (e) {
        const letras = e.target.value.toLowerCase();
        const productos = document.querySelectorAll('.product-item');

        productos.forEach(producto => {
            const titulo = producto.querySelector('h2').textContent.toLowerCase();
            const descripcion = producto.querySelector('p').textContent.toLowerCase();

            if (titulo.includes(letras) || descripcion.includes(letras)) {
                producto.style.display = '';
            } else {
                producto.style.display = 'none';
            }
        });
    });

    loadProducts();
    setupViewButtons();
});

<<<<<<< HEAD
// Mostrar el nombre del usuario
document.addEventListener('DOMContentLoaded', function () {

    const userName = localStorage.getItem('currentUsername');

    //Mostrar nombre de usuario al iniciar sesión
    const usernameDisplay = document.getElementById ('username-display');
    usernameDisplay.textContent = userName;
});
=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
