import { Home, BookOpen, Calendar, Award, User, BarChart, Users, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import logo from "/logo.png";

interface SidebarProps {
  role: "student" | "teacher" | "admin";
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Sidebar({ role, currentPage, onNavigate, onLogout }: SidebarProps) {
  const studentMenu = [
    { icon: Home, label: "Início", page: "dashboard" },
    { icon: BookOpen, label: "Meus Cursos", page: "my-courses" },
    { icon: Calendar, label: "Eventos", page: "events" },
    { icon: Award, label: "Certificados", page: "certificates" },
    { icon: User, label: "Perfil", page: "profile" },
  ];

  const teacherMenu = [
    { icon: Home, label: "Início", page: "dashboard" },
    { icon: BookOpen, label: "Minhas Turmas", page: "classes" },
    { icon: Users, label: "Alunas", page: "students" },
    { icon: BarChart, label: "Relatórios", page: "reports" },
    { icon: User, label: "Perfil", page: "profile" },
  ];

  const adminMenu = [
    { icon: Home, label: "Início", page: "dashboard" },
    { icon: BarChart, label: "Estatísticas", page: "stats" },
    { icon: Users, label: "Usuários", page: "users" },
    { icon: BookOpen, label: "Cursos", page: "courses" },
    { icon: Calendar, label: "Eventos", page: "events" },
    { icon: Settings, label: "Configurações", page: "settings" },
  ];

  const menu = role === "student" ? studentMenu : role === "teacher" ? teacherMenu : adminMenu;

  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <img src={logo} alt="Rede Nave" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#6a2e99] text-white"
                  : "text-gray-700 hover:bg-purple-50 hover:text-[#6a2e99]"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sair
        </Button>
      </div>
    </aside>
  );
}
