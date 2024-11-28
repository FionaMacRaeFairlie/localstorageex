import React, {useContext } from 'react';
import { createUseStyles } from "react-jss";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 150,
    listStyleType:"none",
    "& li": {
      width: 200,
    },
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    padding: 25,
  },
});
export default function SaladSummary() {
  const classes = useStyles();
  const { salad ,setSalad} = useContext(SaladContext);

  const removeItem = (e, item) => {
    console.log("item",item)
    setSalad({name:item.name,id:item.id,status:0});
  };


   return (
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {salad.map(( item ) => (
          <li key={item.id} onClick={(e) => removeItem(e, item)}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
