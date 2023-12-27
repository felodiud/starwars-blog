import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to={"/"}>
                <img 
                src="/empirelogo.jpeg" 
                className="img-fluid  max-width-50 m-2" 
                alt="empire logo" 
                style={{ maxHeight: "65px" }}
                />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
                <button className="btn btn-outline-success me-2 btn-lg" type="submit"><i class="bi bi-star-fill"></i></button>
            </form>
            </div>
        </div>
        </nav>

    );

};

export default Navbar
