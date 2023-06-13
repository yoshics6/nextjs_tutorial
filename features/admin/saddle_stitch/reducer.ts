import { createReducer } from "@reduxjs/toolkit";
import {
  getSaddle,
  getSaddleById,
  getCoverPaper,
} from "@/features/admin/saddle_stitch/actions";
import { SaddleState } from "@/models/saddle.model";

const initialState: SaddleState = {
  data: {
    s_type: "",
    s_finished_size: "",
    s_cover: "",
    s_text: "",
    s_cover_paper: "",
    s_text_paper: "",
    s_printing: "",
    s_cover_coating: "",
    s_text_coating: "",
    s_1000: 0,
    s_2000: 0,
    s_3000: 0,
    s_4000: 0,
    s_5000: 0,
  },
};

export const saddleReducer = createReducer(initialState, (builder) => {
  builder.addCase(getSaddle.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getSaddleById.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getCoverPaper.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default saddleReducer;
