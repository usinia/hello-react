import React from "react";

const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };
  return (
    <div className={"todo-input"}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
      <div className={"add-button"} onClick={onInsert}>
        추가
      </div>
    </div>
  );
};
export default TodoInput;
