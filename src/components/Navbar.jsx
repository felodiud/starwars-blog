import React, { useContext } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { Context } from "../store/context";




const Navbar = () => {
    const {actions, store} = useContext(Context);

  
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid col-12">
                <Link to={"/"}>
                    <img 
                    src="/empirelogo.jpeg" 
                    className="img-fluid  max-width-50 m-2" 
                    alt="empire logo" 
                    style={{ maxHeight: "65px" }}
                    />
                </Link>
                <div className= "d-flex justify-content-end col">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    Favorites
                    </button>
                </div>
            </div>
        </nav>
        <div className="collapse m-4" id="collapseExample">
        {store.favoriteList.length > 0 ? (store.favoriteList.map((item, index) => (
           <ul>{item}</ul>
    
    ))) : (<p>No favorites added yet</p>)}
        </div>
        </>

    );

};

export default Navbar
