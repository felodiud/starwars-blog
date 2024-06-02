import React from "react";
import { BtnFavorite } from "./BtnFavorite";



const Card = (props) => {

    const { title, src, description, learnMore, btnName, exists , to, favoritable, favoriteClick, object, object2 } = props
    const buttonText = learnMore ? "Learn More" : title;

    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p class="card-text">{ description }</p>
                <div className="d-flex">
                    {to ? (
                        <a href={`${to}`}  className="btn btn-primary">{ btnName ? btnName: title }</a>
                        
                    ) : (
                        <a href={`${title}`}  className="btn btn-primary">{ btnName ? btnName: title }</a>
                    )}
                    {favoritable ? (<div className = "col d-flex justify-content-end">
                        <BtnFavorite onClick={favoriteClick} exists={exists} object={object} object2={object2}/>
                    </div>) : ''}
                    
                </div>
            </div>
        </div>
    );
};

export default Card