"use client";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

interface Todo {
  id: number;
  title: string;
  status: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [countDoneTask, setCountDoneTask] = useState<number>(0);
  const [input, setInput] = useState("");
  const [sequenceId, setSequenceId] = useState<number>(1);

  const createNewTodo = (title: string) => {
    const newTodo = { id: sequenceId, title: title, status: false };
    setSequenceId(sequenceId + 1);
    setTodos([newTodo, ...todos]);
  };

  const deleteToDo = (id: number) => {
    const indexToDoDeleted = todos.findIndex((todo) => todo.id == id);
    if (indexToDoDeleted !== -1) {
      const todoDeleted = todos[indexToDoDeleted];
      if (todoDeleted.status) {
        setCountDoneTask(countDoneTask - 1);
      }
    }
    const newTodoList = todos.filter((todo) => todo?.id !== id);
    setTodos(newTodoList);
  };

  const finishTodo = (id: number) => {
    const indexToDo = todos.findIndex((todo) => todo?.id == id);
    if (indexToDo !== -1) {
      const newTodoList = [...todos];
      const [todo] = newTodoList.splice(indexToDo, 1);
      if (!todo.status) {
        todo.status = true;
        newTodoList.push(todo);
        setTodos(newTodoList);
        setCountDoneTask(countDoneTask + 1);
      }
    }
  };

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    createNewTodo(input);
    setInput("");
  };

  return (
    <div className="container mx-auto">
      <h1 className="">To Do List</h1>
      <div>{countDoneTask}</div>
      <AddTodoForm
        input={input}
        setInput={setInput}
        handleSubmitTodo={handleSubmitTodo}
      ></AddTodoForm>
      <TodoList
        todos={todos}
        finishTodo={finishTodo}
        deleteTodo={deleteToDo}
      ></TodoList>
    </div>
  );
}
