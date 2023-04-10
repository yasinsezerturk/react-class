import React from "react";
import Goal from "./Goal";
import Garage from "./Garage";

const Consitionals = () => {
    const cars=["ford","bmw","audi"]
  return (
    <div>
      {/* <Goal isGoal={true} /> */}
        <Garage cars={cars}/>
    </div>
  );
};

export default Consitionals;
