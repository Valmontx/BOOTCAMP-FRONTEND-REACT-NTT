import Footer from "../../components/footer/Footer"
import FooterCart from "./components/FooterCart";
import Navbar from "../../components/navbar/Navbar"
import { useCart } from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";


import { FC } from "react"

const Cart: FC = () => {
  const { cartCount } = useProducts()
  const { cart, incrementQuantity, decrementQuantity, deleteFromCart, getItemCount } = useCart()

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <section className="header-banner">
        <p>Black friday! 24Hours only 50% OFF</p>
      </section>
      <section>
        <h5 className="shopping-bag">Shopping Bag</h5 >
        <p className="items-bag"> items {getItemCount()} </p>
        <div className="container-section-cart">
          <div className="container-products-cart">
            {cart.map((product) => (
              <div className="products-cart" key={product.id}>
                <div className="container-img-cart"> <img src={product.images[0]} />  </div>
                <div className="container-details-cart">
                  <p className="product-cart-tittle" >{product.title}</p>
                  <p className="product-cart-price" >${product.price}</p>
                  <p className={`available ${product.availabilityStatus === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>  {product.availabilityStatus} </p>
                </div>
                <div className="container-cart-quantity">
                  <span onClick={() => decrementQuantity(product.id)}>
                    <i className="fa-solid fa-minus fa-sm"></i>
                  </span>
                  <p className="product-quantity " >{product.quantity}</p>
                  <span onClick={() => incrementQuantity(product.id)}>
                    <i className="fa-solid fa-plus fa-sm"></i>
                  </span>
                </div>
                <div className="container-price-and-delete">
                  <p className="product-price-quantity"> <span>Subtotal:</span> {(product.price * product.quantity).toFixed(2)}$</p>
                  <button className="product-cart-button-delete" onClick={() => deleteFromCart(product.id)} >
                    <i className="fa-solid fa-xmark "></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <FooterCart  />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )

}

export default Cart