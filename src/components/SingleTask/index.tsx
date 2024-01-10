import React from "react";

type Props = {};

const SingleTask = (props: Props) => {
  return (
    <div className="w-full h-[200px] bg-slate-400 rounded-3xl flex flex-col p-5">
      <div className="flex-1 flex justify-between items-center">
        <h1 className="font-bold text-black text-3xl ">Anariig zodoh</h1>
        <div className="badge badge-warning text-white">Medium</div>
      </div>
      <div className="flex-1">
        <h3 className="text-slate-600 font-bold">
          Participant: <span className="text-black">Azhar</span>
        </h3>
        <h3 className="text-slate-600 font-bold">
          Date Added: <span className="text-black">12/04/2023</span>
        </h3>
      </div>
    </div>
  );
};

export default SingleTask;
