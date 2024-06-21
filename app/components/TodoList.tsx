"use client";
import React, { useState } from "react";
import Todo from "./Todo";
interface TodoListProps {
  todos: { id: number; title: string; status: boolean }[];
  finishTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  finishTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <>
      {todos &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
            ></Todo>
          );
        })}
    </>
  );
}
