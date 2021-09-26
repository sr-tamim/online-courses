// import all necessary resources
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Shop.css';

const Shop = () => {
    // get courses fake data by fetching
    const [allCourses, setAllCourses] = useState([]);
    function getProducts() {
        fetch('./fakeData.JSON').then(r => r.json()).then(d => setAllCourses(d));
    }
    useEffect(getProducts, []); // set fetched data as allCourses

    // set cart as a state
    const [cart, setCart] = useState([]);

    // add a course to the cart function
    const addToCart = (course) => setCart([...cart, course]);

    return (
        <div>
            <div id="shop">
                {/* show all courses component */}
                <Courses addToCart={addToCart} allCourses={allCourses} />

                {/* cart component */}
                <Cart cart={cart} setCart={setCart} />
            </div>
        </div>
    );
}

export default Shop;