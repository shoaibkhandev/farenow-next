import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "actionState",
  initialState: {
    openSidebar: false,
  },
  reducers: {
    openSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSidebar } = Reducer.actions;

export default Reducer.reducer;
