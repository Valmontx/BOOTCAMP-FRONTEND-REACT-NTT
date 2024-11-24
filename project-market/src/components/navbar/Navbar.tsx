import {NavbarProps} from "../../domain/product";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../module-routes";

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {

    return (
        <header className="nav-bar">
            <p className="header-title">YouMarket ♡</p>
            <ul>
                <li> <Link to ={`/${ModuleRoutes.Home}`}> Home </Link> </li>
                <li><a href="#products">Products</a></li>
                <li> <a href="#blackFriday">Black friday</a></li>
                <li><a href="#contact">Contact </a> </li>
            </ul>
            
            <div className="header-icons">
            <Link to ={`/${ModuleRoutes.Cart}`} className="icon-link" >
            <i className="fas fa-shopping-cart fa-sm"> </i>
            <span className="cart-number"> ({cartCount})  </span>
            </Link>
             
            <i className="fa-solid fa-heart-circle-check"></i>
            <i className="fa-solid fa-user fa-sm"></i>   
        </div>
        </header>
    )
}


export default Navbar