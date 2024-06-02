

import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../store/context";
import Card from "../components/Card";
import '../css/style.css'

function People() {
  const { store, actions } = useContext(Context);
  const [current, setCurrent] = useState(1);
  const [maxCurrent, setMaxCurrent] = useState();
  const [peopleList, setPeopleList] = useState([]);
  const [actualPageData, setActualPageData] = useState("https://www.swapi.tech/api/people?page=1&limit=10");


  useEffect(() => {
    const fetchData = async () => {
      await actions.getPeople(actualPageData);
    };
    fetchData();
  }, [actualPageData]);


  useEffect(() => {
    if (store.peopleObject && store.peopleObject.results) {
      setPeopleList(store.peopleObject.results);
      setMaxCurrent(store.peopleObject.total_pages)
    }
  },[store.peopleObject]) 


  console.log(store.peopleObject);

  

  const handleNext = () => {
    if(current < maxCurrent ) {
      let index = current + 1;
      setCurrent(index)
      if(store.peopleObject.next) {
        setActualPageData(store.peopleObject.next)
      }
    }
  }

  const handlePrev = () => {
    if (current > 1) {
      let index = current - 1;
      setCurrent(index)
      if(store.peopleObject.previous) {
        setActualPageData(store.peopleObject.previous)
      }
    }
  }

  const handleHighlight1 = () => {
    if (current === 1 ) {
      return "active"
    } else {
      return ""
    }
  }
  const handleHighlight2 = () => {
    if (current != 1 && current != maxCurrent) {
      return "active"
    } else {
      return ""
    }

  }
  const handleHighlight3 = () => {
    if (current === maxCurrent  ) {
      return "active"
    } else {
      return ""
    }

  }



  
  return (
    <div>
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example" className="mt-3 me-5" key = "nav">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" onClick={handlePrev}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" className={`custom-disabled-style ${handleHighlight1()}`} ><a class="page-link" href="#">{current === 1 ? current : (current === maxCurrent ? (current - 2 ) : current -1)}</a></li>
            <li class="page-item" className={`custom-disabled-style ${handleHighlight2()}`} ><a class="page-link" href="#">{current === 1 ? (current + 1) : (current === maxCurrent ? (maxCurrent -1) : current)}</a></li>
            <li class="page-item" className={`custom-disabled-style ${handleHighlight3()}`} ><a class="page-link" href="#">{current === 1 ? current + 2 : (current === maxCurrent ? maxCurrent : current + 1)}</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" onClick={handleNext} >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <div className="row row-cols-1 row-cols-md-5 g-4">

        {peopleList.length > 0 ? (peopleList.map((item, index) => (
            <div className="m-5">
              <Card
                key = {index} 
                title={item.name} 
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}  
                btnName="Learn more"
                to={`/character/${item.uid}`}
                object={item}
                object2={store.favoriteList}
                favoriteClick={() => actions.handleFavorite(item.name)}
                favoritable/>
            </div>
          
          ))) : (<p>Loading...</p>)}

      </div>



    </div>
  )
}

export default People