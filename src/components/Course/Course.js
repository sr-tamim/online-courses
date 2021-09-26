// import all necessary resources
import React from 'react';
import './Course.css';



const Course = (props) => {
    // destructure course information from props
    const { name, img, price, skills } = props.course;

    return (
        <div className="course">
            {/* course thumbnail */}
            <div className="course-img"><img src={img} alt={name} /></div>

            {/* course information */}
            <div className="course-info">
                {/* course name */}
                <h2 className="course-name">{name}</h2>
                {/* offering skills */}
                <div className="course-skills">
                    <div>
                        {
                            skills.map(skill => <h5 key={skills.indexOf(skill)}><i className="fas fa-check"></i> {skill}</h5>)
                        }
                    </div>
                </div>
                {/* course price and add to cart button */}
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

export default Course;