export type UserRole = "student" | "teacher" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar_url?: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    cpf: string;
    role?: UserRole;
    phone?: string;
    bio?: string;
    address?: string;
}
