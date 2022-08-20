import React, { ChangeEvent, useState } from "react";
import Profile from "./Components/Profile";
import TodoList from "./Components/TodoList";
import { Todo } from "./Interfaces/Todo";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newItem = {
      newTask: task,
      deadline,
    };
    setTodoList([...todoList, newItem]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  const deleteTodo = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.newTask != taskNameToDelete;
      })
    );
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-400">
        <div className="flex flex-col justify-center items-center h-1/2">
          <input
            type="text"
            placeholder="add Task"
            onChange={handleChange}
            name="task"
            value={task}
            className="px-3 py-2 border-2 border-green-400 outline-none rounded-xl my-2 "
          />
          <input
            type="text"
            placeholder="deadline"
            onChange={handleChange}
            name="deadline"
            value={deadline}
            className="px-3 py-2 border-2 border-green-400 outline-none rounded-xl my-2 "
          />

          <button
            className="px-3 py-2 border-2 border-green-400 outline-none rounded-xl my-2 "
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <div>
          {todoList.map((todo: Todo, key: number) => (
            <TodoList task={todo} key={key} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </>
    // <div className="bg-red-500">
    //   <Profile
    //     name="utkarsh"
    //     count={count}
    //     countFunction={setCount}
    //     status="coder"
    //   />
    //   {/* <Profile name="ankur" /> */}
    //   {count}
    // </div>
  );
};

export default App;
