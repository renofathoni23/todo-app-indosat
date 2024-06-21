"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
interface AddTodoFormProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmitTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function AddTodoForm({
  input,
  setInput,
  handleSubmitTodo,
}: AddTodoFormProps) {
  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your new todo"
      ></input>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Todo
      </button>
    </form>
  );
}
