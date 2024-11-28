import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";
const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

export const SaladContext = createContext();

function reducer(state, item) {
  const newState = state;
  if (item.status != 0) return [...state, item];
  if (item.status != 1) {
     for (let i = 0; i < state.length; i++) {
      if (state[i].name === item.name) {
        newState.splice(i,1)
      }
    }
 return [...state];
  }
 }

export default function SaladMaker() {
  const classes = useStyles();
  const [salad, setSalad] = useReducer(reducer, []);
  return (
    <>
      <SaladContext.Provider value={{ salad, setSalad }}>
        <h1 className={classes.wrapper}>Build a Custom Salad</h1>
        <SaladBuilder />
        <SaladSummary />
      </SaladContext.Provider>
    </>
  );
}
