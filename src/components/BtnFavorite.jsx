import React, { useContext } from "react";

export const BtnFavorite = ({ onClick, object, object2}) => {


    const exists = object2.includes(object);

    if (exists === false ) {
        return <button type="button" className="btn btn-outline-success"onClick={onClick}><i class="fa-solid fa-plus"></i></button>
    } else {
        return <button type="button" className="btn btn-outline-danger"onClick={onClick}><i class="fa-solid fa-trash"></i></button>
    }
}