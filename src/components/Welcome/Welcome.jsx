import { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User/User";

export default function Welcome() {
  const user = useContext(UserContext);

  return <p>Welcome,{user.name}</p>;
}
