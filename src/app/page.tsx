"use client";

import SingleTask from "../components/SingleTask";
import React from "react";
import Section from "../components/Section";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="h-screen w-screen p-10 flex justify-center items-center bg-white">
      {/* <div className=" flex-1 h-full bg-slate-200 rounded-3xl p-5">
        <div className=" w-full h-1/6  flex justify-between items-center">
          <h1 className="text-black text-5xl font-bold">ToDo</h1>
          <button className="btn btn-success rounded-full text-white">+</button>
        </div>
        <SingleTask />
      </div>
      <div className=" flex-1 h-full bg-slate-200 mx-7 rounded-3xl p-5">
        <div className=" w-full h-1/6 flex justify-start items-center">
          <h1 className="text-black text-5xl font-bold">In Progress</h1>
        </div>
      </div>
      <div className=" flex-1 h-full bg-slate-200 rounded-3xl p-5">
        <div className=" w-full h-1/6 flex justify-start items-center">
          <h1 className="text-black text-5xl font-bold">Closed</h1>
        </div>
      </div> */}
      <Section />
    </main>
  );
};

export default Home;
