import React from "react";



const Card = (props) => {

    const { title, link, description, learnMore } = props
    const buttonText = learnMore ? "Learn More" : title;

    return (
        <div className="card m-5" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p class="card-text">{ description }</p>
                <a href={`/${title}`}  className="btn btn-primary">{ title }</a>
            </div>
        </div>
    );
};

export default Card