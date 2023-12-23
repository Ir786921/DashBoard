import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import Notificationslice from "./Notificationslice";

const store = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    notification: Notificationslice,
  },
});
export default store;
