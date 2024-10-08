import { createSlice } from "@reduxjs/toolkit";

const verifyAgeSlice = createSlice({
  name: "verifyAge",
  initialState: true,
  reducers: {
    toggleModal(state, action) {
       return state = action.payload;
    },
   
  },
});

const { actions, reducer } = verifyAgeSlice;
export const { toggleModal } = actions;
export default reducer;