import React from "react";
import './Product.css';


const Product: React.FC = (): JSX.Element => {
    return (
        <div className="Product">
            <div className="Product__thumbnail">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" />
            </div>
            <h2 className="Product__title">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h2>
        </div>
    )
}

export default Product;
