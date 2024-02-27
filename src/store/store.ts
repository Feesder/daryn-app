import { makeAutoObservable } from "mobx";
import { User } from "../model/User";
import AuthService from "../service/AuthService";
import { AuthResponse } from "../model/response/AuthResponse"
import axios from 'axios';
import { API_URL } from "../http/http";

export default class Store {
    user = {} as User;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: User) {
        this.user = user;
    }
    
    getUser(): User {
        return this.user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(username: string, password: string): Promise<boolean> {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data)
            console.log(response)
            return true
        } catch(e) {
            console.log(e)
            return false
        }
    }

    async register(username: string, email: string, password: string): Promise<boolean>  {
        try {
            const response = await AuthService.register(username, email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data)
            return true
        } catch(e) {
            console.log(e)
            return false
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as User)
        } catch(e) {
            console.log(e)    
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            console.log("rabotaet")
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data)
            this.setAuth(true);
        } catch (e) {
            console.log(e)
        }
        this.setLoading(false);
    }
}