import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SaladMaker from "./components/SaladMaker/SaladMaker";
import UserContext from "./components/User/User";
import { useLocalStorage } from "./components/useLocalStorage";
import Form from "./components/UserForm/UserForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [name, setName] = useLocalStorage("name", "Fred");
  const [apple] = useLocalStorage("apple", false);
  const [sweetcorn, setSweetcorn] = useLocalStorage("sweetcorn", false);
  const [mushroom, setMushroom] = useLocalStorage("mushroom", false);
  const [tomato, setTomato] = useLocalStorage("tomato", false);
  const [dressing, setDressing] = useLocalStorage("dressing", false);
  const [rice, setRice] = useLocalStorage("rice", false);
  const [aubergine, setAubergine] = useLocalStorage("aubergine", false);
  const [watermelon, setWatermelon] = useLocalStorage("watermelon", false);

  let favorites = [];
  if (apple) {
    favorites = [...favorites, "apple"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "apple";
    });
  }
  if (sweetcorn) {
    favorites = [...favorites, "sweetcorn"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "sweetcorn";
    });
  }
  if (mushroom) {
    favorites = [...favorites, "mushroom"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "mushroom";
    });
  }
  if (tomato) {
    favorites = [...favorites, "tomato"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "tomato";
    });
  }
  if (dressing) {
    favorites = [...favorites, "dressing"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "dressing";
    });
  }
  if (rice) {
    favorites = [...favorites, "rice"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "rice";
    });
  }
  if (aubergine) {
    favorites = [...favorites, "aubergine"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "aubergine";
    });
  }
  if (watermelon) {
    favorites = [...favorites, "watermelon"];
  } else {
    favorites = favorites.filter(function (word) {
      return word !== "watermelon";
    });
  }

  const user = {
    name: name,
    favorites: favorites,
  };
  console.log(favorites);
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <UserContext.Provider value={user}>
                  <Navigation />
                  <SaladMaker />
                </UserContext.Provider>
              }
            />
            <Route path="/favourites" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
