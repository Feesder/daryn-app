import { Role } from '../Role'

export interface AuthResponse {
    id: BigInt;
    username: string;
    email: string;
    roles: Role[];
    accessToken: string;
    refreshToken: string;
}