import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "actionState",
  initialState: {
    segments: [],
    flight: null
  },
  reducers: {
    setSegments: (state, action) => {
      state.segments = action.payload;
    },
    setFlight: (state, action) => {
      state.flight = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSegments, setFlight } = Reducer.actions;

export default Reducer.reducer;
