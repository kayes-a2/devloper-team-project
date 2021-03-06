//import components & css file & font awesome external react node pakage
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Devloper.css'

//devloper arrow function
const Devloper = (props) => {
    //destructuring of props
    const { name, designation, age, image, salary, experience } = props.project
    console.log(props);

    return (
        //devloper part of html (jsx) & event hander anonymous function & font awesome icon
        <div className="devloper-cart">
            <div>
                <img className="devloper-image" src={image} alt="" />
            </div>
            <div className="details">
                <h4 className="devloper-name"> <span className="property">Name</span> : {name}</h4>
                <h4><span className="property"> Designation</span> : {designation}</h4>
                <h4><span className="property"> Age</span> : {age}</h4>
                <h4><span className="property"> Experience</span> : {experience}</h4>
                <h4><span className="property"> Salary</span> : ${salary}</h4>

                <button
                    onClick={() => props.handleAddToDevloperCart(props.project)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faUserPlus} /> Add Devloper</button>

            </div>
        </div >
    );
};

//export default devloper file
export default Devloper;