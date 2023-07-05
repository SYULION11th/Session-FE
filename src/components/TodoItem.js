import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return <div className="item">{props.item}</div>;
};

export default TodoItem;
