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
    <form onSubmit={handleSubmitTodo} className="mb-6">
      <div className="flex flex-row gap-8 justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Play football..."
          className="h-8 w-64 border-2 pl-2"
        ></input>
        <button
          type="submit"
          className="bg-yellow-500 text-white p-1 pl-2 pr-2"
        >
          Add
        </button>
      </div>
    </form>
  );
}
