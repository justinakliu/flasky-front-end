import React from "react";
import Cat from "./Cat";

const CatList = (props) => {
  return (
    <ul>
      {props.catData.map((cat, i) => (
        <Cat
          name={cat.name}
          personality={cat.personality}
          caretaker={cat.caretaker}
          color={cat.color}
          key={i}
        />
      ))}
    </ul>
  );
};

export default CatList;
