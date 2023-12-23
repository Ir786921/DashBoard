import React, { useContext } from "react";
import { useSelector } from "react-redux";

import DashBoardContext from "../Context/Context";

const SideBar = () => {
  const { setUpdateSearchquery } = useContext(DashBoardContext);
  const clicked = useSelector((store) => store.sideBar.isvisible);
  return (
    <div
      className={` tw-p-2 tw-w-full tw-bg-[#263046] ${
        clicked ? "tw-flex" : "tw-hidden"
      }  tw-flex-col md:tw-flex`}
    >
      <div className="tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1 tw-gap-3">
        <i class="fa-solid fa-earth-americas tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Environment
        </p>
      </div>

      <div className="tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1 tw-gap-3">
        <i class="fa-solid fa-gear tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Support services
        </p>
      </div>

      <div className=" tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-shop tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Retail
        </p>
      </div>

      <div className=" tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-notes-medical tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Health
        </p>
      </div>

      <div className=" tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-computer tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Information Technology
        </p>
      </div>

      <div className=" tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-bolt tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Energy
        </p>
      </div>

      <div className="tw-flex tw-justify-evenly tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-brands fa-space-awesome tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Manufacturing
        </p>
      </div>

      <div className="tw-flex tw-justify-evenly tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-landmark tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Government
        </p>
      </div>

      <div className="tw-flex tw-justify-evenly tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-sack-dollar tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Financial services
        </p>
      </div>

      <div className="tw-flex tw-justify-evenly tw-items-center hover:tw-bg-[#1e444e] tw-rounded-md tw-p-2 tw-m-1">
        <i class="fa-solid fa-tractor tw-text-2xl tw-text-purple-600 tw-w-1/5"></i>
        <p
          className=" tw-w-4/5 tw-inline-block tw-text-start tw-text-slate-300"
          onClick={(event) => {
            setUpdateSearchquery(event.target.innerText);
          }}
        >
          Transport
        </p>
      </div>
    </div>
  );
};

export default SideBar;
