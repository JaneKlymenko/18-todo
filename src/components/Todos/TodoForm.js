import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubminHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== "") addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubminHandler}>
        <input
          placeholder="Type new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
