import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { api } from "../services/api";

type UserRole = "student" | "teacher" | "admin";

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar_url?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: any) => Promise<void>; // data includes name, email, password, cpf...
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            api.get("/auth/me")
                .then(response => {
                    setUser(response.data.user);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                    setUser(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const response = await api.post("/auth/login", { email, password });
        const { token, user: userData } = response.data; // Backend /login response

        // Note: Backend might return user, or we fetch it. 
        // Spec says response: { user: {...}, token: "...", ... }

        localStorage.setItem("token", token);

        // Use the user from response or fetch 'me'
        if (userData) {
            setUser(userData);
        } else {
            // Fallback if backend doesn't return user on login
            const meResponse = await api.get("/auth/me");
            setUser(meResponse.data.user);
        }
    };

    const register = async (data: any) => {
        const response = await api.post("/auth/register", data);
        const { token, user: userData } = response.data;

        localStorage.setItem("token", token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
