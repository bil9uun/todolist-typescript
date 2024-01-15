"use client";
import React from "react";
import { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type PropsType = {
  board: {
    id: string;
    title: string;
    hasBtn: boolean;
    tasks: {
      id: string;
      name: string;
      priority: string;
      author: string;
      isStatus: string;
    }[];
  };
  handleOpen: () => void;
};

const Board: FC<PropsType> = ({ board, handleOpen }) => {
  return (
    <Droppable droppableId={"droppable-" + board.id}>
      {(provided) => (
        <div
          className=" flex-1 h-full bg-slate-200 rounded-3xl p-5"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className=" w-full h-1/6  flex justify-between items-center">
            <h1 className="text-black text-5xl font-bold">{board.title}</h1>
            {board.hasBtn && (
              <button className="btn btn-success rounded-full text-white">
                +
              </button>
            )}
          </div>
          {board?.tasks.map((task, i) => (
            <Draggable key={i} index={i} draggableId={task.id.toString()}>
              {(provided, snapshot) => (
                <div
                  className="w-full h-[200px] bg-slate-700 rounded-3xl flex flex-col p-5 text-white"
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <div className="flex-1 flex justify-between items-center">
                    <h1 className="font-bold text-3xl ">Anariig zodoh</h1>
                    <div className="badge badge-success badge-outline badge-lg text-white">
                      Easy
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-300 font-bold">
                      Participant: <span className="text-white">Azhar</span>
                    </h3>
                    <h3 className="text-slate-300 font-bold">
                      Date Added: <span className="text-white">12/04/2023</span>
                    </h3>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default Board;
