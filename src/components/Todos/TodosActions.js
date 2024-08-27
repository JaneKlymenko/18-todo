import { MdOutlineAutorenew } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Button from "../UI/Button";
function TodoActions({ resetTodos, deleteCompleteTodo, comletedTodosExist }) {
  return (
    <>
      <Button title="Reset list" onClick={resetTodos}>
        <MdOutlineAutorenew />
      </Button>
      <Button
        title="Clear comleted todos"
        onClick={deleteCompleteTodo}
        disabled={!comletedTodosExist}
      >
        <RiDeleteBin2Fill />
      </Button>
    </>
  );
}

export default TodoActions;
