import React from 'react';
import './Product.css';



const Product = (props) => {
    const { name, img, price, skills } = props.course;

    return (
        <div className="course">
            <div className="course-img"><img src={img} alt={name} /></div>

            <div className="course-info">
                <h2 className="course-name">{name}</h2>
                <div className="course-skills">
                    <div>
                        {
                            skills.map(skill => <h5 key={skills.indexOf(skill)}><i className="fas fa-check"></i> {skill}</h5>)
                        }
                    </div>
                </div>
                <div className="card-footer">
                    <h3 className="course-price">${price}</h3>
                    <button className="course-add-button" onClick={() => { props.addToCart(props.course) }}>
                        <i className="fas fa-cart-plus" style={{ marginRight: '5px' }}></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;