import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ToastType } from "../../utils/toast";

export interface ToastState {
  message: string;
  type: ToastType;
}

const initialState: ToastState = {
  message: "",
  type: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (
      state,
      action: PayloadAction<{ message: string; type: ToastType }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    clearToast: (state) => {
      state.message = "";
      state.type = null;
    },
  },
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
