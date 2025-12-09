import { useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { CoursesCarousel } from "./components/courses-carousel";
import { EventsCarousel } from "./components/events-carousel";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { Sidebar } from "./components/sidebar";
import { StudentDashboard } from "./components/student/dashboard";
import { CoursePlayer } from "./components/student/course-player";
import { TeacherDashboard } from "./components/teacher/dashboard";
import { AdminDashboard } from "./components/admin/dashboard";

type UserRole = "student" | "teacher" | "admin" | null;

function LandingPage() {
  return (
    <div className="min-vh-100">
      <Navbar />
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

function ProtectedLayout({ role, onLogout }: { role: UserRole, onLogout: () => void }) {
  if (!role) return <Navigate to="/login" />;

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Sidebar role={role} onLogout={onLogout} />
      <main className="flex-fill main-with-sidebar">
        <Outlet />
      </main>
    </div>
  );
}

function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split("/").pop();
  return (
    <div className="p-4">
      <div className="bg-white rounded border border-2 border-dashed p-5 text-center" style={{ borderColor: '#dee2e6' }}>
        <p className="text-muted mb-0">
          Página "{pageName}" em desenvolvimento
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setUserRole(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login onLogin={handleLogin} onBack={() => navigate("/")} />} />

      <Route path="/course-player/:courseId" element={
        userRole === "student" ? <CoursePlayer onBack={() => navigate("/dashboard")} /> : <Navigate to="/login" />
      } />

      <Route path="/dashboard" element={<ProtectedLayout role={userRole} onLogout={handleLogout} />}>
        <Route index element={
          <>
            {userRole === "student" && <StudentDashboard />}
            {userRole === "teacher" && <TeacherDashboard />}
            {userRole === "admin" && <AdminDashboard />}
          </>
        } />
        <Route path="*" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  );
}
