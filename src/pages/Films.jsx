import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Card from "../components/Card";
import { FilmDetail } from "./details/FilmDetail";
import { Link } from "react-router-dom";

function Films() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      await actions.getFilms();
    };
      
    fetchData();
  }, []);


  console.log(store.filmsList)
  
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
    {store.filmsList.length > 0 ? (store.filmsList.map((item, index) => (
        <div className="m-5">
          <Card 
            key = {index}
            title={item.properties.title} 
            src={`https://starwars-visualguide.com/assets/img/films/${index+1}.jpg`}  
            btnName="Learn more"
            to={`/films/${index+1}`}
            favoritable/>
      </div>
      
      ))) : (<p>Loading...</p>)}

    </div>
  )
}

export default Films
