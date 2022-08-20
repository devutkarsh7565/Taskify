import React from "react";
import { Todo } from "../Interfaces/Todo";

interface Props {
  task: Todo;
  deleteTodo(taskNametoDelete: string): void;
}
const TodoList = ({ task, deleteTodo }: Props) => {
  return (
    <div>
      <h1>{task.newTask}</h1>
      <h1>{task.deadline}</h1>
      <button onClick={() => deleteTodo(task.newTask)}>delete</button>
    </div>
  );
};

export default TodoList;
