import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";

export const PeopleDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
   
    const src = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    
    useEffect(() => {
        const fetchData = async () => {
            await actions.getPeopleDetail(`https://www.swapi.tech/api/people/${id}`);
            
        };
        fetchData();
    }, []);

    console.log(store.peopleDetail);


    return (
        <div className="container">
            {store.peopleDetail.properties ? (
                <div>
                    <div className="row">
                        <div className="col-3">
                            <img src={src} className="card-img-top mt-2" alt="..." />
                        </div>
                        <div className="col-9">
                            <p><strong>Name :</strong> {store.peopleDetail.properties?.name}</p>
                            <p><strong>Height :</strong> {store.peopleDetail.properties?.height}</p>
                            <p><strong>Mass :</strong> {store.peopleDetail.properties?.mass}</p>
                            <p><strong>Hair color :</strong> {store.peopleDetail.properties?.hair_color}</p>
                            <p><strong>Skin color :</strong> {store.peopleDetail.properties?.skin_color}</p>
                            <p><strong>Eye color :</strong> {store.peopleDetail.properties?.eye_color}</p>
                            <p><strong>Birth year :</strong> {store.peopleDetail.properties?.birth_year}</p>
                            <p><strong>Gender :</strong> {store.peopleDetail.properties?.gender}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
}
