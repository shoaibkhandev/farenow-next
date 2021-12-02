import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "actionState",
  initialState: {
    departured: null,
    returned: null
  },
  reducers: {
    setDepartured: (state, action) => {
      state.departured = action.payload;
    },
    setReturned: (state, action) => {
      state.returned = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDepartured, setReturned } = Reducer.actions;

export default Reducer.reducer;
