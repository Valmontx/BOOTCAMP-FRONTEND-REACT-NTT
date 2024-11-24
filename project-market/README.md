## React 

## YOUMARKET♡ 💄🛒

Se realizó una iteración  completamente diferente del  market anterior. Esta vez tenemos el YOUMARKET♡ , una tienda en linea
lo cual podrás realizar tus compras fácilmente, podrás agregar como favorito, filtrar por categorias o por producto en especifico. 


## 📸 Vista previa del proyecto:
![Vista previa de youMarket ](./src/assets/youMarket.png)


## 🛠️ Migración a React con typescript

Este proyecto ha sido migrado  de `Javascript` a ` React con typescript` se ha componetizado el código y separado la lógica de negocio, se ha creado cada carpeta y archivo necesario para separar responsabilidades ademas de volverlo reutilizable y practico al momento de realizar los test.


Las principales características de React que se han integrado incluyen:

- **Componentes**: Creados especificamente para cada sección, como el header, navbar, footer..entre otros, lo cual solo contienen eventos y jxs. En caso se requiera agregar componentes "atomos" o "moleculas" *(siguiendo los sistemas de diseño)* se  podrá añadir facilmente ya que cada uno tiene su propia carpeta.
- **Hooks**: Se utilizan hooks como useState y useEffect para manejar el estado y los efectos secundarios de la aplicación de forma más eficiente.
- **Props**: Uso de props en componentes, como `productCard.tsx` que recibe datos de productos, como el *title, description, price, rating etc*.
- **React-router-dom**: Se instalo router-dom para la navegacion de páginas, para este proyecto es necesario navegar hasta la vista del carrito para visualizar el resume de tus compras. 

## 💻 Uso de useState

Se utilizó `useState`para:
 - Visibilidad de productos.
 - Productos visibles *(Solo muestra los primeros 4 productos)*
 - Botón de mostrar todos los productos
 - Filtrado del buscador.
 - Desplegable por categoria.
 - El contador del carrito
 - El boton de favoritos.
 - Un loading antes de mostrar los productos. 

## 💻 Uso de useEffect
Se utilizó `useEffect` para cargar y mostrar los productos utilizando la `Fetch API` el hook se ejecuta una vez al montar al componente para realizar la llamada al servicio y actualizar el estado de los productos.


## 🔰 Características principales:

- `Carrito de compras:` Incrementa dinámicamente el contador de productos al agregar productos al carrito. Además, al hacer click en el   icono del carrito, te dirige a la vista de cart.
- `Favoritos:` Permite marcar productos como favoritos. `Lógica pendiente`
- `Perfil de usuario:` Función en desarrollo.
- `Buscador: `
  1.Permite realizar una búsqueda de productos a través de la caja de busqueda.
  2.La búsqueda se realiza en las propiedades `title`, `description`, `price`, y `rating` de los productos.
  3.El filtro de búsqueda no es sensible a mayúsculas/minúsculas.
- `Desplegable de categorías: `Se añadió un menú desplegable `<select>` con las categorías que escogí de la API. 
- `Diseño responsive: `
  1. Compatible con dispositivos móviles, tablets y desktops.
  2. Usé Media Queries en CSS para personalizar estilos en distintos breakpoints.
  3. Utilicé Flexbox para una estructura flexible y adaptable de cada elemento.


## 🔧 Herramientas utilizadas 

| Tecnología     | Uso                                 |
|-------------   |-------------------------------------|
| **HTML**       | Estructura base del proyecto        |
| **CSS**        | Estilo visual y diseño responsive   |
| **Flexbox**    | Organización de elementos           |
| **JavaScript** | Funciones                           |
| **modules**    | import y export                     |
| **React**      | Hooks, componentes,react-router-dom |
| **Typescript** | Tipado estático                     |
|**Font Awesome**| Iconos personalizados.              |
|**Google Fonts**| Fuentes personalizadas.             |


## 📁 Esctructura  de carpetas y archivos 

-`project-market/`
  -`public/`
   -`src/`
     -`assets/`
     -`components/`
      -`card/`
         -`Productcard.tsx`
         -`ProductList.tsx`
      -`filters/`
         -`CategoryFilter.tsx`
         -`SearchFilter.tsx`
      -`footer/`
         -`Footer.tsx`
         -`navbar/`
         -`Navbar.tsx`
      -`context/`
          -`reducer.ts/`
      -`domain/`
         -`Product.ts`
      -`hooks/`
        -`useProduct.ts`
      - `Pages/` 
        -`Cart/` 
         -`Cart.tsx` 
        -`Home/` 
         -`Home.tsx` 
      -`services/`
        -`api.ts` 
      -`state/`
        -`Categories.ts` 
        -`ProductState.ts` 
      -`utils/`
        -`filterCategory.ts`
      -`App.tsx`
      -`main.tsx`
      -`module-routes.ts`
      -`style.css`
   - `index.html`
   - `package.json`




## 🌵 Ramas del proyecto

   `feature/diseño-y-estilos `
   `feature/javaScript `
   `feature/typescript ` 
   `feature/react-fundamentos`


## Tareas Completadas

- [x]  Migración de Javascript a React con Typescript.
- [x]  Uso de useState y useEffect.
- [x]  Arquitectura de carpetas. 
- [x]  El proyecto funcional


## 📋 Instalación 

1. Clona el repositorio:
  ```
  git clone https://github.com/Valmontx/BOOTCAMP-FRONTEND-REACT-NTT.git

2. Ingresa a la carpeta
   cd project/market 

3. Inicia el servidor 
   npm run dev 

4. Rama en la que se está trabajando
   git checkout feature/react-fundamentos
  
   ```
 



## Créditos
- Proyecto desarrollado como parte del bootcamp **NTT DATA**.

