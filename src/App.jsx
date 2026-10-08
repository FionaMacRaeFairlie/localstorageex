import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SaladMaker from "./components/SaladMaker/SaladMaker";
import UserContext from "./components/User/User";
import { useLocalStorage } from "./components/useLocalStorage";
import Form from "./components/UserForm/UserForm";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [name, setName] = useLocalStorage("name", "Fred");

  const [ingredients, setIngredients] = useLocalStorage("ingredients", {
    apple: false,
    sweetcorn: false,
    mushroom: false,
    tomato: false,
    dressing: false,
    rice: false,
    aubergine: false,
    watermelon: false,
  });

  const favorites = Object.keys(ingredients).filter(
    (ingredient) => ingredients[ingredient],
  );

  const user = {
    name,
    favorites,
    ingredients,
    setIngredients,
    setName,
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <UserContext.Provider value={user}>
                <Welcome />
                <SaladMaker />
              </UserContext.Provider>
            }
          />
          <Route
            path="/favourites"
            element={
              <UserContext.Provider value={user}>
                <Welcome />
                <Form />
              </UserContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
