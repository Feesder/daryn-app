import { Role } from './Role';

export interface User {
    id: BigInt;
    username: string;
    email: string;
    roles: Role[];
    accessToken: string;
    refreshToken: string;
}