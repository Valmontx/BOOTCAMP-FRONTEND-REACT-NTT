import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import useProducts from "../../hooks/useProducts";

const Cart = () => {

  const {
    cartCount,
  } = useProducts();


    return (
        <div>
          <h1>Shopping Bag</h1>
         <Navbar cartCount={cartCount} />
        <footer>
        <Footer />
      </footer>
        </div>
    )
}

export default Cart