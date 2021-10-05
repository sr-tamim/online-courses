import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Courses</h2>
            <div id="products">
                {
                    props.allCourses.map(course => <Product key={course.key} course={course} addToCart={props.addToCart} />)
                }
            </div>
        </div>
    );

};

export default Products;