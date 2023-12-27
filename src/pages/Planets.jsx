import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Card from "../components/Card";

function Planets() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
          await actions.getPlanets();
        };
      
        fetchData();
      }, []);

    
    return (
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {store.planetList.length > 0 ? (store.planetList.map((item, index) => (
            <Card key={index} title={item.name} link={item.url} />))) : (<p>Loading...</p>)}
        </div>
    )
}

export default Planets