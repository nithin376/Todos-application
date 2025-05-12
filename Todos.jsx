import React from 'react';
import { Todo } from './Todo';

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
     <u> <h3 className="text-center p-2">Todos List</h3></u>
      {todos.length===0?"No todos to dispaly":
      todos.map((todo) => (
      <><Todo key={todo.slno} todo={todo} onDelete={onDelete} /><hr></hr></>
      ))
    }
    </div>
  );
};
