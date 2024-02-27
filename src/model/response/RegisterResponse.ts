import { Role } from '../Role'

export interface RegisterResponse {
    id: BigInt;
    username: string;
    email: string;
    password: String;
    roles: Role[];
    accessToken: string;
    refreshToken: string;
}