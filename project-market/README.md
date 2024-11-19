## Typescript 

## YOUMARKET♡ 💄🛒

Se realizó una iteración  completamente diferente del  market anterior. Esta vez tenemos el YOUMARKET♡ , una tienda en linea
lo cual podrás realizar tus compras fácilmente, podrás agregar como favorito, filtrar por categorias o por producto en especifico. 


## 📸 Vista previa del proyecto:
![Vista previa de youMarket ](./src/assets/youMarket.png)


## 🛠️ Migración a TypeScript

Este proyecto ha sido migrado  de `Javascript` a `typescript` para hacer el codigo más seguro, sencillo y escalable. Es fácil de  mantener y se puede detectar errores en tiempo de compilacion.

Las principales características de TypeScript que se han integrado incluyen:

- **Tipado estático**: Se han definido interfaces y tipos para las propiedades de los productos, funciones y eventos.
- **Mejoras en el autocompletado**: Gracias al tipado estático, ahora se cuenta con una mejor experiencia de desarrollo, en especial `VSC`
-  **Manejo de rrores**: TypeScript ayuda a identificar errores comunes antes de ejecutar el código, lo que mejora la estabilidad del proyecto.

## 💻 Uso de interfaces y tipos

- **`Product` Interface**: Define las propiedades de los productos, como `title`, `description`, `price`, `rating`, etc.


## 🔰 Características principales:

- **Carrito de compras:**  Incrementa dinámicamente el contador de productos al agregar productos al carrito.
- **Favoritos:**  Permite marcar productos como favoritos. `Lógica pendiente`
- **Perfil de usuario:**  Función en desarrollo.
- **Buscador:** 
 - Permite realizar una búsqueda de productos a través de la caja de busqueda (`<input>` con id `search-products`).
 - La búsqueda se realiza en las propiedades `title`, `description`, `price`, y `rating` de los productos.
 - El filtro de búsqueda no es sensible a mayúsculas/minúsculas.
- **Desplegable de categorías:** 
 - Se añadió un menú desplegable `<select>` con las categorías que escogí de la API. 
 - Creé una función que se ejecuta en el evento change del `<select>`, filtrando los productos con base en la categoría seleccionada.
- **Diseño responsive:**  
 -  Compatible con dispositivos móviles, tablets y desktops.
 -  Usé Media Queries en CSS para personalizar estilos en distintos breakpoints.
 -  Utilicé Flexbox para una estructura flexible y adaptable de cada elemento.


## 🔧 Herramientas utilizadas 

| Tecnología     | Uso                                 |
|-------------   |-------------------------------------|
| **HTML**       | Estructura base del proyecto        |
| **CSS**        | Estilo visual y diseño responsive   |
| **Flexbox**    | Organización de elementos           |
| **JavaScript** | Funcionalidades dinámicas del sitio |
| **modules**    | import y export                     |
| **Typescript** | Tipado estático                     |
|**Font Awesome**| Iconos personalizados.              |
|**Google Fonts**| Fuentes personalizadas.             |


## 📁 Esctructura  de carpetas y archivos 

- `project-market/`
  - `public/`
  - `src/`
    - `assets/`
    - `pages/`
       - `shoping-cart.ts/`
    - `services/`
       - `api.ts/`
    - `utils`
       - `display.ts`
       - `filter.ts`
    - `index.ts`
    - `style.css` 
  - `index.html`
  - `package.json`
  - `tsconfig.json`


## 🌵 Branches

- `feature/diseño-y-estilos`
- `feature/javaScript`
- `feature/typescript`


## Roadmap

- [x]  Migración de Javascript a Typescript.
- [x]  Uso de interfaces.
- [x]  Organización de carpetas. 
- [x]  Uso de mapper. 


## 📋 Instalación 

1. Clona el repositorio:
   `git clone https://github.com/Valmontx/BOOTCAMP-FRONTEND-REACT-NTT.git`
2. Ingresa a la carpeta
   `cd project/market `
3. Inicia el servidor 
   `npm run dev` 
4. Rama en la que se está trabajando
   `git checkout feature/typescript `  



## Créditos
- Proyecto desarrollado como parte del bootcamp **NTT DATA**.

