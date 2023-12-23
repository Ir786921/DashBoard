const { createSlice } = require("@reduxjs/toolkit");

const SideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isvisible: true,
  },
  reducers: {
    showSidebar: (state) => {
      state.isvisible = !state.isvisible;
    },
  },
});

export const { showSidebar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
