import React, { useState } from "react";

const ToDoItem = ({ item: { data, isHidden }, index }) => {
  const [hidden, setHidden] = useState(isHidden);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div style={{
        width:"auto ",
        height:"100px",
        color:"white",
        backgroundColor:"pink"
    }}>
      <h2>{hidden ? "This is hidden" : data}</h2>
      <button onClick={toggleHidden}>Toggle</button>
    </div>
  );[]
};

export default ToDoItem;
