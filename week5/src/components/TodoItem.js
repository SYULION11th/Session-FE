import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const clickRemoveHandler = () => {
    props.removeListHandler(props.index);
  };
  return (
    <div className="item">
      <div>{props.item}</div>
      <div className="item-button">
        <input type="checkbox" />
        <button onClick={clickRemoveHandler} className="item-x">
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
