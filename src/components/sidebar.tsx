import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, Calendar, Award, User, BarChart, Users, Settings, LogOut, Menu, X } from "lucide-react";

interface SidebarProps {
    role: "student" | "teacher" | "admin";
    onLogout: () => void;
}

export function Sidebar({ role, onLogout }: SidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const studentMenu = [
        { icon: Home, label: "Início", path: "/dashboard", end: true },
        { icon: BookOpen, label: "Meus Cursos", path: "/dashboard/my-courses" },
        { icon: Calendar, label: "Eventos", path: "/dashboard/events" },
        { icon: Award, label: "Certificados", path: "/dashboard/certificates" },
        { icon: User, label: "Perfil", path: "/dashboard/profile" },
    ];

    const teacherMenu = [
        { icon: Home, label: "Início", path: "/dashboard", end: true },
        { icon: BookOpen, label: "Minhas Turmas", path: "/dashboard/classes" },
        { icon: Users, label: "Alunas", path: "/dashboard/students" },
        { icon: BarChart, label: "Relatórios", path: "/dashboard/reports" },
        { icon: User, label: "Perfil", path: "/dashboard/profile" },
    ];

    const adminMenu = [
        { icon: Home, label: "Início", path: "/dashboard", end: true },
        { icon: BarChart, label: "Estatísticas", path: "/dashboard/stats" },
        { icon: Users, label: "Usuários", path: "/dashboard/users" },
        { icon: BookOpen, label: "Cursos", path: "/dashboard/courses" },
        { icon: Calendar, label: "Eventos", path: "/dashboard/events" },
        { icon: Settings, label: "Configurações", path: "/dashboard/settings" },
    ];

    const menu = role === "student" ? studentMenu : role === "teacher" ? teacherMenu : adminMenu;

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="btn btn-primary position-fixed d-md-none"
                style={{ top: '10px', left: '10px', zIndex: 1031 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle sidebar"
            >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-md-none"
                    style={{ opacity: 0.5, zIndex: 1029 }}
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isMobileOpen ? 'show' : ''} d-flex flex-column`}>
                {/* Logo */}
                <div className="p-4 border-bottom">
                    <h4 className="text-primary-purple fw-bold mb-0">Rede Nave</h4>
                </div>

                {/* Navigation */}
                <nav className="flex-fill p-3">
                    {menu.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                onClick={() => setIsMobileOpen(false)}
                                className={({ isActive }) => `sidebar-nav-link w-100 border-0 text-start text-decoration-none d-flex align-items-center ${isActive ? 'active' : ''}`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="p-3 border-top">
                    <button
                        onClick={onLogout}
                        className="sidebar-nav-link w-100 border-0 text-start text-danger d-flex align-items-center"
                        style={{ background: 'transparent' }}
                    >
                        <LogOut size={20} />
                        <span>Sair</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
