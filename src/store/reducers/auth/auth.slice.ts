import { createSlice } from "@reduxjs/toolkit";
import { ActionsEnum } from "../../enum";
import { login, register } from "./auth.action";

interface IInitState {
  isAuth: boolean;
  isRegistered: boolean;
  error: unknown;
  status: ActionsEnum;
}

const initialState: IInitState = {
  isAuth: false,
  isRegistered: false,
  error: null,
  status: ActionsEnum.IDLE,
};

const authReducer = createSlice({
  name: "auth",
  reducers: {
    setStatus: (state, { payload }) => {
      //debugger
      state.status = payload;
    },
    setUnRegister: (state) => {
      state.isRegistered = false;
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      state.isAuth = false;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = ActionsEnum.LOADING;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = ActionsEnum.SUCCESS;
        state.isAuth = true;
        console.log();
      })
      .addCase(login.rejected, (state, response: any) => {
        state.status = ActionsEnum.ERROR;
        state.error = response.payload.message;
      })

      .addCase(register.pending, (state) => {
        state.status = ActionsEnum.LOADING;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = ActionsEnum.SUCCESS;
        state.isRegistered = true;
        console.log();
      })
      .addCase(register.rejected, (state, response: any) => {
        state.status = ActionsEnum.ERROR;
        state.error = response.payload.message;
      });
  },
});

export const { setStatus, setUnRegister, logout } = authReducer.actions;

export default authReducer.reducer;
