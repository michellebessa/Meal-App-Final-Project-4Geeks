const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      user: [],
      recipes: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      //HERE IS THE SPOONACULAR DATA FOR THE RECIPES
      getRecipeData: (ingredient) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch${
            getStore().key
          }&&titleMatch=${ingredient}`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      findByNutrients: (carbs, proteins) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch${
            getStore().key
          }&maxCarbs=${carbs}&minProteins=${proteins}`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },


      //HERE IS THE REGISTER DATA
      register: (data) => {
        const store = getStore();
        fetch(`${process.env.BACKEND_URL}/api/register`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );
            return res.json();
          })
          .then((data) => {
            console.log("data ", data);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });
            return true;
          })
          .catch((err) => err);
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStore.getItem("token");
        console.log(
          "Application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
    },
  };
};

export default getState;
