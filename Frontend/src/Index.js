import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SideBar from "./Component/SideBar";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Body from "./Component/Body";
import DashBoardContext from "./Context/Context";
import Layout from "./Component/Layout";
import Footer from "./Component/Footer";

const Index = () => {
  const { searchquery } = useContext(DashBoardContext);
  const [updateSearchquery, setUpdateSearchquery] = useState(searchquery);

  return (
    <div>
      <DashBoardContext.Provider
        value={{ updateSearchquery, setUpdateSearchquery }}
      >
        <Provider store={store}>
          <Navbar />
          <Layout />
          <Footer />
        </Provider>
      </DashBoardContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
