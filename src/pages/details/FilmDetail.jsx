import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";

export const FilmDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);
    
    const src = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
    
    useEffect(() => {
        const fetchData = async () => {
            await actions.getFilmDetail(`https://www.swapi.tech/api/films/${id}`);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchNames = async () => {
            const fetchPromises = (key, setter) => {
                const data = store.filmDetail?.properties[key] ? store.filmDetail?.properties[key] : [] ; // Verificación de existencia usando '?'
                if (Array.isArray(data)) {
                    return data.map(async (url) => {
                        try {
                            const response = await fetch(url);
                            const json = await response.json();
                            const name = json.result.properties.name;
                            setter(prevState => [...prevState, name]);
                        } catch (error) {
                            console.error(`Error fetching ${key}: ${error}`);
                        }
                    });
                } else {
                    return [];
                }
            };
    
            fetchPromises("characters", setCharacters);
            fetchPromises("planets", setPlanets);
            fetchPromises("starships", setStarships);
            fetchPromises("vehicles", setVehicles);
            fetchPromises("species", setSpecies);
        };
    
        fetchNames();
    }, [store.filmDetail]);
    


    return (
        <div className="container">
            {store.filmDetail.properties ? (
                <div>
                    <div className="row">
                        <div className="col-3">
                            <img src={src} className="card-img-top mt-2" alt="..." />
                        </div>
                        <div className="col-9">
                            <p><strong>title :</strong> {store.filmDetail.properties?.title}</p>
                            <p><strong>created :</strong> {store.filmDetail.properties?.created}</p>
                            <p><strong>director :</strong> {store.filmDetail.properties?.director}</p>
                            <p><strong>producer :</strong> {store.filmDetail.properties?.producer}</p>
                            <p><strong>edited :</strong> {store.filmDetail.properties?.edited}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 border border-primary rounded-4 mt-2 ms-2"
                            toggle = "true">
                            <h4>Characters</h4>
                            {characters.length > 0 ? characters.map((name, index) => (
                                <div className="col-3" key={index}>
                                    <p>{name}</p>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                        <div className="col-2 border border-primary rounded-4 mt-2 ms-2 ">
                            <h4>Planets</h4>
                            {planets.length > 0 ? planets.map((name, index) => (
                                <div className="col-3" key={index}>
                                    <p>{name}</p>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                        <div className="col-2 border border-primary rounded-4 mt-2 ms-2 ">
                            <h4>Starships</h4>
                            {starships.length > 0 ? starships.map((name, index) => (
                                <div className="col-3" key={index}>
                                    <p>{name}</p>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                        <div className="col-2 border border-primary rounded-4 mt-2 ms-2 ">
                            <h4>Vehicles</h4>
                            {vehicles.length > 0 ? vehicles.map((name, index) => (
                                <div className="col-3" key={index}>
                                    <p>{name}</p>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                        <div className="col-2 border border-primary rounded-4 mt-2 ms-2 ">
                            <h4>Species</h4>
                            {species.length > 0 ? species.map((name, index) => (
                                <div className="col-3" key={index}>
                                    <p>{name}</p>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
}
