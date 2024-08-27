import { FaClipboardList, FaCheck } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <li
      className={`${styles.todoItem} ${
        todo.isCompleted ? styles.completedTodo : " "
      }`}
    >
      <FaClipboardList className={styles.todoIcon} />
      <p className={styles.todoItem_text}>{todo.text}</p>

      <RiDeleteBin7Fill
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </li>
  );
}

export default Todo;
