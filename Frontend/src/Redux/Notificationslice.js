import { createSlice } from "@reduxjs/toolkit";

const NotificationSlice = createSlice({
  name: "notification",
  initialState: {
    item: ["1"],
  },
  reducers: {
    pushnotication: (state, action) => {
      state.item.push(action.payload);
    },
  },
});
export const { pushnotication } = NotificationSlice.actions;
export default NotificationSlice.reducer;
