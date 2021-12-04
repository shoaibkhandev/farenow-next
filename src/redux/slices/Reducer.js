import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "actionState",
  initialState: {
    departured: null,
    returned: null,
    flight: null
  },
  reducers: {
    setDepartured: (state, action) => {
      state.departured = action.payload;
    },
    setReturned: (state, action) => {
      state.returned = action.payload;
    },
    setFlight: (state, action) => {
      state.flight = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDepartured, setReturned, setFlight } = Reducer.actions;

export default Reducer.reducer;
