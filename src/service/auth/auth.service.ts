import { IRegister } from "./../../store/reducers/auth/auth.types";
import { AxiosResponse } from "axios";
import axios from "axios";
import { ILogin } from "../../types/IAuth";
import { $api, DEV_API } from "../../api";

export class AuthService {
  static async login(creds: ILogin): Promise<AxiosResponse<string>> {
    return $api.post<string>(`auth/login`, creds);
  }

  static async register(creds: IRegister): Promise<AxiosResponse<string>> {
    return $api.post<string>(`auth/register`, creds);
  }

  // static async logout(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get(`${DEV_API}auth/logout`);
  // }

  // static async refresh(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get<ILoginResponse>(`${DEV_API}auth/refresh`);
  // }

  // static async logout(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get(`${DEV_API}auth/logout`, { withCredentials: true });
  // }
}
