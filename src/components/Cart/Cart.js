import React from 'react';
import './Cart.css';

const Cart = props => {
    const { cart, setCart } = props;
    const subTotal = cart.length > 0 ? cart.reduce((previous, current) => previous + current.price, 0) : 0;

    const addedCourses = cart.filter((name, index) => cart.indexOf(name) === index);

    return (
        <div id="cart">
            <div id="cart-container">
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Course Added:</td>
                            <td>{cart.length}</td>
                        </tr>
                        <tr>
                            <td>Total Price:</td>
                            <td>${subTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    {
                        addedCourses.map(course => <li>{course.name} ({cart.filter(cors => cors.name === course.name).length})</li>)
                    }
                </ul>
                <button id="empty-cart-button" onClick={() => setCart([])}>Empty Cart</button>
            </div>
        </div>
    );
};

export default Cart;