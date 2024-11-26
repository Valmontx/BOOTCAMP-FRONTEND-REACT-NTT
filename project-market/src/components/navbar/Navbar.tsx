import { NavbarProps } from "../../domain/product";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../module-routes";
import { useCart } from "../../hooks/useCart";

const Navbar: React.FC<NavbarProps> = () => {
    const { getItemCount } = useCart()
    return (
        <header className="nav-bar">
            <Link to={`/${ModuleRoutes.Home}`} className="header-title">
                <p>YouMarket ♡</p>
            </Link>
            <ul>
                <li> <Link to={`/${ModuleRoutes.Home}`}> Home </Link> </li>
                <li><a href="#products">Products</a></li>
                <li> <a href="#blackFriday">Black friday</a></li>
                <li><a href="#contact">Contact </a> </li>
            </ul>

            <div className="header-icons">
                <Link to={`/${ModuleRoutes.Cart}`} className="icon-cart" >
                    <i className="fas fa-shopping-cart fa-sm"> </i>
                    <span className="cart-number"> ({getItemCount()})  </span>
                </Link>

                <i className="fa-solid fa-heart-circle-check"></i>
                <i className="fa-solid fa-user fa-sm"></i>
            </div>
        </header>
    )
}


export default Navbar