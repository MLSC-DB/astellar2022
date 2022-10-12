import React from "react";
import { useLocation } from "react-router-dom";

const Level = () => {
    const {state} = useLocation();
  const { qno } = state;
  console.log(state);
  return <div>Level : {qno}</div>;
};

export default Level;
