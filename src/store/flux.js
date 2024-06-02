import { PeopleDetail } from "../pages/details/PeopleDetal";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peopleObject: {},
      peopleList: [],
      peopleDetail: [],
      favoriteList: [],
      startList: [],
      originalStartList: [],
      planetList: [],
      filmsList: [],
      filmDetail: [],
      chgaracterDetail: [],
    },
    actions: {
      getApi: () => {
        fetch("https://www.swapi.tech/api/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const apiList = Object.entries(data.result)
              .filter(
                ([category]) =>
                  !["starships", "vehicles", "species"].includes(category)
              )
              .map(([category, url]) => {
                if (category === "people") {
                  category = "character";
                }
                return {
                  category,
                  url,
                };
              });

            setStore({ startList: apiList });
          })
          .catch((error) => console.log(error));
      },

      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ planetList: data.results }))

          .catch((error) => console.log(error));
      },

      getPeople: (link) => {
        fetch(`${link}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ peopleObject: data });
          })
          .catch((error) => console.log(error));
      },

      getPeopleDetail: (link) => {
        fetch(`${link}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ peopleDetail: data.result }))
          .catch((err) => console.log(err));
      },

      getFilms: () => {
        fetch("https://www.swapi.tech/api/films/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ filmsList: data.result }))

          .catch((error) => console.log(error));
      },

      getFilmDetail: (link) => {
        fetch(`${link}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ filmDetail: data.result }))
          .catch((err) => console.log(err));
      },

      getCharacterDetail: (link) => {
        fetch(`${link}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ characterDetail: data.result.properties }))
          .catch((err) => console.log(err));
      },

      handleFavorite: (favorite) => {
        const store = getStore();
        if (store.favoriteList.includes(favorite)) {
          const updatedList = store.favoriteList.filter(
            (item) => item !== favorite
          );
          setStore({ favoriteList: updatedList });
          console.log("Favorito eliminado");
        }
        setStore({ favoriteList: [...store.favoriteList, favorite] });
        return console.log(store.favoriteList);
      },
    },
  };
};

export default getState;
