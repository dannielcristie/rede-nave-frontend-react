import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inicializar tema ao montar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    // Se há tema salvo, usa ele; senão usa light theme
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-theme");
    }
  }, []);

  // Aplicar tema quando mudar
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    
    console.log("Tema alterado para:", theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
}
