import $api from "../http/http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../model/response/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/login', { username, password })
    }

    static async register(username: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/register', { username, email, password })
    }
}