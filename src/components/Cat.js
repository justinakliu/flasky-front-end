import React from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  return (
    <li>
      <h3>Cat name: {props.name} </h3>
      <h3>Personality: {props.personality}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Caretaker: {props.caretaker}</h3>
      <button>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
};

export default Cat;
