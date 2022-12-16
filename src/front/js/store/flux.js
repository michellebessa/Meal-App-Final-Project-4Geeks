const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      user: [],
      recipes: [],
      data: [],
      message: null,
      alert: {
        type: "",
        msg: "",
        show: false,
      },
      complex: [],
      token: null,
      message: null,
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
      getRecipeData: () => {
        fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=35aaf0fcff674e94b10b99b4e6c69a6b"
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
            console.log("These are my actual recipes", responseAsJson);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },
      getRecipeDetails: (id) => {
        fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=35aaf0fcff674e94b10b99b4e6c69a6b`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ data: responseAsJson });
            console.log("My recipes", getStore().data);
            console.log("This is my actual data", responseAsJson);
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

      login: async (email, password) => {
        console.log("email: " + email, "password: " + password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        // fetch(BACKEND_URL + "/api/login", opts)
        //   .then((resp) => resp.json())
        //   .then((data) => console.log(data));
        try {
          const resp = await fetch(BACKEND_URL + "/api/login", opts);
          if (resp.status !== 200) {
            alert("An error has occurred");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token); //Access token needed here
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has be an error logging in", error);
        }
      },
      setAlert: (payload) => {
        /* payload should be an object with the following shape:
                  {
                      type: "",
                      msg: "",
                      show: false
                  }
                  type either: danger, success, warning
              */
        setStore({ alert: payload });
      },
      resetAlert: () => {
        setStore({
          alert: {
            type: "",
            msg: "",
            show: false,
          },
        });
      },
      protected: () => {
        let token = sessionStorage.getItem("token");
        const opts = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        fetch(`${process.env.BACKEND_URL}/api/protected`, opts)
          .then((rep) => rep.json())
          .then((data) => {
            console.log(data);
            setStore({
              user: data,
            });
          });
      },
    },
  };
};

export default getState;
