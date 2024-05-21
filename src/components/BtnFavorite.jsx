import React from "react";

export const BtnFavorite = ({fav, onClick}) => {

    return <button type="button" className="btn btn-outline-success" onClick={onClick}><i class="fa-solid fa-plus"></i></button>
}