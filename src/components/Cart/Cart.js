// import all necessary resources
import React from 'react';
import './Cart.css';

const Cart = props => {
    // destructure cart and setCart function from props
    const { cart, setCart } = props;

    // calculate total if cart's length is greater than 0
    const total = cart.length > 0 ? cart.reduce((previous, current) => previous + current.price, 0) : 0;

    /* we want to show courses names which are added to cart.
    But we don't want to show same name again and again.
    So, filter duplicates from cart */
    const addedCourses = cart.filter((course, index) => cart.indexOf(course) === index);

    return (
        <div id="cart">
            <div id="cart-container">
                <h2>Cart</h2>
                {/* cart table */}
                <table>
                    <tbody>
                        <tr>
                            <td>Course Added:</td>
                            <td>{cart.length}</td>
                        </tr>
                        <tr>
                            <td>Total Price:</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>

                {/* show added courses name */}
                <ul>
                    {
                        addedCourses.map(course => <li>{course.name} ({cart.filter(cors => cors.name === course.name).length})</li>)
                    }
                </ul>

                {/* clear all courses from cart */}
                <button id="empty-cart-button" onClick={() => setCart([])}>Empty Cart</button>
            </div>
        </div>
    );
};

export default Cart;