import React, { useState } from "react";

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
  return <div>hi</div>;
};

export default Section;
