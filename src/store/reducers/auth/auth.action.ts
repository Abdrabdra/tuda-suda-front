import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../service/auth/auth.service";
import { ILogin } from "../../../types/ILogin";
import { IRegister } from "./auth.types";

export const login = createAsyncThunk(
  "auth/login",
  async function (creds: ILogin, { rejectWithValue }) {
    try {
      const response = await AuthService.login(creds);
      localStorage.setItem("access_token", response.data);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const register = createAsyncThunk<string, IRegister>(
  "auth/register",
  async function (creds, { rejectWithValue }) {
    try {
      const response = await AuthService.register(creds);
      // localStorage.setItem("access_token", response.data);
      return response.data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data as string);
    }
  }
);

// export const logout = createAsyncThunk<any>(
//   "auth/logout",
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await AuthService.logout();
//       localStorage.removeItem("access_token");
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
