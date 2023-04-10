import React from "react";
import { useContext } from "react";
import { UserContext } from "./UseContext";

const ComponentNew3 = () => {
    const user=useContext(UserContext)
  return <div>
    <h1>{`Hello ${user} again`}</h1>
    </div>;
};

export default ComponentNew3;
