"use client";

import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Board from "../Board";
import Form from "../Form";

type Props = {};

const Section = (props: Props) => {
  const [boards, setBoards] = useState([
    {
      id: "0",
      title: "ToDo",
      hasBtn: true,
      tasks: [
        {
          id: "1",
          name: "First Task",
          priority: "high",
          author: "Bilguun",
          isStatus: "Todo",
        },
      ],
    },
    {
      id: "0",
      title: "Doing",
      hasBtn: false,
      tasks: [
        {
          id: "1",
          name: "First Task",
          priority: "high",
          author: "Bilguun",
          isStatus: "Todo",
        },
      ],
    },
    {
      id: "0",
      title: "Done",
      hasBtn: false,
      tasks: [
        {
          id: "1",
          name: "First Task",
          priority: "high",
          author: "Bilguun",
          isStatus: "Todo",
        },
      ],
    },
  ]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(() => true);
  };
  const handleClose = () => {
    setOpen(() => false);
  };
  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(boards))]; //shallow
      const oldDroppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );
      const newDroppableId = newData.findIndex(
        (el) => el.id === destination.droppableId.split("-")[1]
      );
      const [task] = newData[oldDroppableId].tasks.splice(source.index, 1);
      newData[newDroppableId].tasks.splice(destination.index, 0, task);
    } else {
      const newData = [...JSON.parse(JSON.stringify(boards))];
      const droppableId = newData.findIndex(
        (el) => el.id === source.droppableId.split("-")[1]
      );
      console.log("DROP-IDX", droppableId);

      const [task] = newData[droppableId].tasks.splice(source.index, 1);
      console.log("ITEM", task);
      newData[droppableId].tasks.splice(destination.index, 0, task);
      setBoards([...newData]);
    }
  };
  return (
    <section className="w-full flex gap-10 h-full ">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {boards.map((board, i) => (
          <Board board={board} key={i} handleOpen={handleOpen} />
        ))}
      </DragDropContext>
      <Form open={open} handleClose={handleClose} />
    </section>
  );
};

export default Section;
