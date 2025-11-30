import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

interface NavbarProps {
  onLoginClick?: () => void;
  onNavigate?: (page: string) => void;
}

export function Navbar({ onLoginClick, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate("landing");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate?.("landing")} className="focus:outline-none">
              <img src={logo} alt="Rede Nave" className="h-12 w-12" style={{ animation: 'spin 3s linear infinite reverse' }} />
            </button>
          </div>

          {/* Mobile Title */}
          <div className="md:hidden flex-1 text-center">
            <span className="text-lg font-semibold text-[#6a2e99]">Rede Nave</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("cursos")}
              className="text-gray-700 hover:text-[#6a2e99] transition-colors"
            >
              Cursos
            </button>
            <button
              onClick={() => handleNavigation("eventos")}
              className="text-gray-700 hover:text-[#6a2e99] transition-colors"
            >
              Eventos
            </button>
            <button
              onClick={() => handleNavigation("sobre")}
              className="text-gray-700 hover:text-[#6a2e99] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("contato")}
              className="text-gray-700 hover:text-[#6a2e99] transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={onLoginClick}
              variant="default"
              className="bg-[#6a2e99] hover:bg-[#8e44ad]"
            >
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation("cursos")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#6a2e99] rounded-md transition-colors"
            >
              Cursos
            </button>
            <button
              onClick={() => handleNavigation("eventos")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#6a2e99] rounded-md transition-colors"
            >
              Eventos
            </button>
            <button
              onClick={() => handleNavigation("sobre")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#6a2e99] rounded-md transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("contato")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#6a2e99] rounded-md transition-colors"
            >
              Contato
            </button>
            <div className="px-3 pt-2">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick?.();
                }}
                className="w-full bg-[#6a2e99] hover:bg-[#8e44ad]"
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}