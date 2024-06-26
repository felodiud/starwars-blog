import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Card from "../components/Card";



// POR ALGUNA RAZON MI VERSION DE RECT EMPEZO A DAR PROBLEMAS Y NO FUI CAPAS DE SOLUCIONARLO LO QUE CAUSA QUE NO FUNCIONE CORRECTAMENTE CON EL COLLAPSE DE BOOTSTRAP



function Landing() {
    const { store, actions } = useContext(Context);


    useEffect(() => {
        const fetchData = async () => {
          await actions.getApi();
        };
      
        fetchData();
      }, []);

      
        
    return (
        
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {store.startList.length > 0 ? (store.startList.map((item, 
            index) => (
            <Card 
              key={index} 
              src={`https://starwars-visualguide.com/assets/img/categories/${item.category}.jpg`} 
              title={item.category} 
              link={item.url}
              btnName="Learn more" 
            />
            ))) : (<p>Loading...</p>)}
        </div>  
        

  
    );
}

export default Landing;
