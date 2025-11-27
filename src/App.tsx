import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/about";
import { CoursesCarousel } from "./components/courses-carousel";
import { EventsCarousel } from "./components/events-carousel";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { StudentDashboard } from "./components/student/dashboard";
import { CoursePlayer } from "./components/student/course-player";
import { TeacherDashboard } from "./components/teacher/dashboard";
import { AdminDashboard } from "./components/admin/dashboard";

type UserRole = "student" | "teacher" | "admin" | null;
type Page = "landing" | "login" | "dashboard" | "my-courses" | "events" | "certificates" | "profile" | "classes" | "students" | "reports" | "stats" | "users" | "courses" | "settings" | "course-player";

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [coursePlayerData, setCoursePlayerData] = useState<any>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage("landing");
  };

  const handleNavigate = (page: string, data?: any) => {
    if (page === "course-player") {
      setCoursePlayerData(data);
    }
    setCurrentPage(page as Page);
  };

  // Landing Page
  if (currentPage === "landing") {
    return (
      <div className="min-h-screen">
        <Navbar onLoginClick={() => setCurrentPage("login")} onNavigate={handleNavigate} />
        <main>
          <CoursesCarousel />
          <EventsCarousel />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }

  // Login Page
  if (currentPage === "login") {
    return (
      <div className="min-h-screen">
        <Navbar onLoginClick={() => setCurrentPage("login")} onNavigate={handleNavigate} />
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  // Course Player (full screen, no sidebar)
  if (currentPage === "course-player" && userRole === "student") {
    return (
      <div className="min-h-screen">
        <Navbar onLoginClick={() => setCurrentPage("login")} onNavigate={handleNavigate} />
        <CoursePlayer
          courseId={coursePlayerData?.courseId || 1}
          onBack={() => setCurrentPage("dashboard")}
        />
      </div>
    );
  }

  // Authenticated Pages with Sidebar
  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setCurrentPage("login")} onNavigate={handleNavigate} />
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar
          role={userRole!}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
        <main className="flex-1">
          {/* Student Pages */}
          {userRole === "student" && currentPage === "dashboard" && (
            <StudentDashboard onNavigate={handleNavigate} />
          )}
          
          {/* Teacher Pages */}
          {userRole === "teacher" && currentPage === "dashboard" && (
            <TeacherDashboard onNavigate={handleNavigate} />
          )}
          
          {/* Admin Pages */}
          {userRole === "admin" && currentPage === "dashboard" && (
            <AdminDashboard onNavigate={handleNavigate} />
          )}

          {/* Placeholder for other pages */}
          {!["dashboard", "course-player"].includes(currentPage) && (
            <div className="p-6">
              <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-500">
                  Página "{currentPage}" em desenvolvimento
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}