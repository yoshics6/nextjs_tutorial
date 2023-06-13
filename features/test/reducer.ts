import { createReducer } from "@reduxjs/toolkit";
import { getBanner } from "@/features/test/actions";

const initialState: any = {
  data: [],
};

export const testReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBanner.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default testReducer;
