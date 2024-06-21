"use client";
import React, { useState } from "react";
import DeleteIcon from "../assets/delete.png";
import CheckIcon from "../assets/checklist.png";
interface TodoProps {
  id: number;
  title: string;
  status: boolean;
  finishTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function Todo({
  id,
  title,
  status,
  finishTodo,
  deleteTodo,
}: TodoProps) {
  return (
    <div
      className={`flex flex-row gap-5 justify-center items-center w-96 p-2 mb-2 ${
        status ? "bg-green-00" : "bg-white"
      }`}
    >
      <div className="flex w-3/4 overflow-scroll">
        <p>{title}</p>
      </div>
      <div className="flex w-1/4 flex-row gap-2 justify-end items-end">
        <button className="bg-green-600" onClick={() => finishTodo(id)}>
          <img
            src={CheckIcon.src}
            alt="check-icon"
            className="w-10 h-full"
          ></img>
        </button>
        <button className="bg-red-600" onClick={() => deleteTodo(id)}>
          <img
            src={DeleteIcon.src}
            alt="delete-icon"
            className="w-10 h-full"
          ></img>
        </button>
      </div>
    </div>
  );
}
