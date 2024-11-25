import { useState, useContext } from "react";
import { useDistrict } from "../../../hooks/useDisctrict";
import { useCheckoutForm } from "../../../hooks/useCheckForm"
import district from "./district.json"





const FooterCart: React.FC = () => {
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const district = useDistrict();
    const { formData, errors, handleInputChange, validateForm, resetForm } = useCheckoutForm()



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Pedido registrado con éxito");
            console.log(formData);

            resetForm();



            window.location.href = "/";
        }
    };

    const handleCheckoutClick = () => {
        setShowCheckoutForm((prev) => !prev);
    };

    return (
        <footer className="footer-subtotal-cart">
            {!showCheckoutForm ? (
                // Vista del footer inicial
                <div>
                    <div className="container-subtotal">
                        <span className="subtotal"> order total </span>
                        <p className="subtotal">${}</p>
                    </div>
                    <p className="shipping-cost">
                        Shipping cost from $5.00 will be added in the checkout
                    </p>
                    <button className="check-out" onClick={handleCheckoutClick}>
                        Check out
                    </button>
                    <p className="privacy-policy">
                        By proceeding you are agreeing to our Terms & Conditions and Privacy Policy.
                    </p>
                </div>
            ) : (
                // Vista del formulario de checkout
                <div className="checkout-form">
                    <h2>Checkout</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Full Name:
                            <input type="text" name="fullname" required value={formData.fullname} onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                            {errors.fullname && <span>{errors.fullname}</span>}
                        </label>
                        <label>
                            Adress:
                            <input type="text" name="adress" required value={formData.adress} onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                            {errors.adress && <span>{errors.adress}</span>}

                        </label>
                        <label>
                            Distric:
                            <select className="select-form" name="district" value={formData.district} onChange={(e) => handleInputChange(e.target.name, e.target.value)}>
                                <option value="">Selecction</option>
                                {district.map((distrito) => (
                                    <option key={distrito.id} value={distrito.name}>
                                        {distrito.name}
                                    </option>
                                ))}
                            </select>
                            {errors.district && <span>{errors.district }</span>}
                        </label>
                        <label>
                            Phone:
                            <input type="tel" name="phone" required value={formData.phone} onChange={(e) => handleInputChange(e.target.name, e.target.value)} />
                            {errors.phone && <span>{errors.phone}</span>}
                        </label>
                        <div className="form-buttons">
                            <button className="place-order" type="submit">Place Order</button>
                            <button className="cancel" type="button" onClick={() => setShowCheckoutForm(false)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </footer>
    );
};

export default FooterCart;
