const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peopleList: [],
      favoriteList: [],
      startList: [],
      planetList: [],
    },
    actions: {
      getPeople: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          const data = await response.json();
          console.log(data);
          return data; // Return the data from the action
        } catch (error) {
          console.error(error);
          throw error; // Rethrow the error to be caught in the component
        }
      },
      getApi: () => {
        fetch("https://www.swapi.tech/api/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            const apiList = Object.entries(data.result).map(
              ([category, url]) => ({
                category,
                url,
              })
            );
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
    },
  };
};

export default getState;
