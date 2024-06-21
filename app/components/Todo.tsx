"use client";
import React, { useState } from "react";
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
    <div className="flex flex-row gap-5">
      <div>{id}</div>
      <div>{title}</div>
      <div>{status.toString()}</div>
      <button onClick={() => finishTodo(id)}>Selesai</button>
      <button onClick={() => deleteTodo(id)}>Hapus</button>
    </div>
  );
}
