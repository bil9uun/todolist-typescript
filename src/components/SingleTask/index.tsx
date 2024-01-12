import React from "react";

type Props = {};

const SingleTask = (props: Props) => {
  return (
    <div className="w-full h-[200px] bg-slate-700 rounded-3xl flex flex-col p-5 text-white">
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
  );
};

export default SingleTask;
