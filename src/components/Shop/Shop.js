import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [allCourses, setAllCourses] = useState([]);
    function getProducts() {
        fetch('./fakeData.JSON').then(r => r.json()).then(d => setAllCourses(d));
    }
    useEffect(getProducts, []);

    const [cart, setCart] = useState([]);

    const addToCart = (course) => setCart([...cart, course]);

    useEffect(() => console.log(cart), [cart]);

    return (
        <div>
            <div id="shop">

                <Products addToCart={addToCart} allCourses={allCourses} />
                <Cart cart={cart} setCart={setCart} />

            </div>
        </div>
    );
}

export default Shop;