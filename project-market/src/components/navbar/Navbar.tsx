import { NavbarProps } from "../../domain/product";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../module-routes";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../hooks/useAuthAction";
import { useAuthState } from "../../hooks/useAuthState";
import React from "react";

const Navbar: React.FC<NavbarProps> = () => {
    const { getItemCount } = useCart()
    
    const { isAuthenticated, username } = useAuthState();
    const { login, logout } = useAuthActions();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(ModuleRoutes.Login);
    };



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
                    <i className="fas fa-shopping-cart fa-sm"  title="shoppin cart">  </i>
                    <div className="cart-number">{getItemCount()}</div>
                </Link>
                <i className="fa-solid fa-arrow-right-from-bracket" onClick={handleLogout} title="logout"></i>
            </div>
            {username && <p className="email-welcome" > <span>Welcome:</span> {username}</p>}

        </header>
    
    )
}


export default Navbar