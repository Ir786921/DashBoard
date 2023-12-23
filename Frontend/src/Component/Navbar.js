import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../Redux/SideBarSlice";
import DashBoardContext from "../Context/Context";
import image1 from "../Assest/image-removebg-preview.png";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { setUpdateSearchquery } = useContext(DashBoardContext);
  var firstLetter = searchText.charAt(0).toUpperCase();
  var restOfString = searchText.slice(1);
  var SearchEndpoint = firstLetter + restOfString;

  const NotificationAlert = useSelector((store) => store.notification.item);

  const Dispatch = useDispatch();

  return (
    <div className=" container-md-fluid tw-m-0 tw-p-0">
      <div className="tw-grid tw-grid-flow-col tw-shadow-lg tw-p-2 tw-bg-[#2F3349]">
        <div className="tw-col-span-1 tw-flex tw-items-center tw-gap-4">
          <i
            className="fa-solid fa-list md:tw-opacity-0 tw-text-white tw-text-3xl tw-cursor-pointer"
            onClick={() => {
              Dispatch(showSidebar());
            }}
          ></i>
          <h1 className=" tw-text-white tw-text-3xl">DashBoard</h1>
        </div>
        <div className="tw-col-span-10 tw-flex tw-justify-center">
          <input
            type="text"
            name="search"
            id="search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            className=" tw-w-1/2 tw-border tw-border-gray-500 tw-p-2 tw-rounded-l-full"
          />{" "}
          <button
            className="tw-border tw-border-gray-500 tw-p-2 tw-rounded-r-full tw-w-20 tw-bg-gray-300 "
            onClick={() => {
              if (searchText != " ") setUpdateSearchquery(SearchEndpoint);
            }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <br />
        </div>
        <div className="col-span-1 tw-flex tw-justify-evenly tw-items-center md:tw-gap-2 tw-gap-2">
          <div className=" tw-relative">
            {" "}
            <span className=" tw-absolute tw-text-white tw-bg-red-600 tw-w-6 tw-h-6 rounded-circle tw-z-10 tw-bottom-4 tw-flex tw-justify-center tw-items-center">
              1
            </span>
            <i className="fa-solid fa-bell tw-text-white tw-text-3xl tw-relative"></i>
          </div>
          <div
            className=" rounded-circle tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-border-2 tw-border-gray-500 tw-border-solid tw-p-2"
            target=" John Dee"
          >
            <img src={image1} alt="userimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
