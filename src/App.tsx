import { Routes, Route, Navigate, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { CoursesCarousel } from "./components/courses-carousel";
import { EventsCarousel } from "./components/events-carousel";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { Sidebar } from "./components/sidebar";
import { StudentDashboard } from "./components/student/dashboard";
import { StudentMyCourses } from "./components/student/my-courses";
import { StudentEvents } from "./components/student/events";
import { StudentCertificates } from "./components/student/certificates";
import { StudentProfilePage } from "./components/profile-page";
import { CoursePlayer } from "./components/student/course-player";
import { TeacherDashboard } from "./components/teacher/dashboard";
import { TeacherClasses } from "./components/teacher/classes";
import { TeacherStudents } from "./components/teacher/studentes";
import { TeacherReports } from "./components/teacher/reports";
import { AdminDashboard } from "./components/admin/dashboard";
import { AdminStats } from "./components/admin/stats";
import { AdminUsers } from "./components/admin/users";
import { AdminCourses } from "./components/admin/courses";
import { AdminSettings } from "./components/admin/settings";
import { AdminEventsAdmin } from "./components/admin/events-admin";

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
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect if logged in but on login page? Or handled in Login component?
  // For now, simple routing.

  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Carregando...</div>;
  }

  const userRole = user?.role || null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

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
        <Route path="my-courses" element={
          userRole === "student" ? (
            <StudentMyCourses
              onNavigate={(page, data) => {
                if (page === "course-player" && data && typeof data === 'object' && 'courseId' in data) {
                  navigate(`/course-player/${(data as { courseId: string | number }).courseId}`);
                }
              }}
            />
          ) : (
            <PlaceholderPage />
          )
        } />
        <Route path="events" element={
          userRole === "student" ? <StudentEvents /> : userRole === "admin" ? <AdminEventsAdmin /> : <PlaceholderPage />
        } />
        <Route path="certificates" element={
          userRole === "student" ? <StudentCertificates /> : <PlaceholderPage />
        } />
        <Route path="profile" element={
          userRole ? <StudentProfilePage userRole={userRole} /> : <PlaceholderPage />
        } />
        <Route path="classes" element={
          userRole === "teacher" ? <TeacherClasses /> : <PlaceholderPage />
        } />
        <Route path="students" element={
          userRole === "teacher" ? <TeacherStudents /> : <PlaceholderPage />
        } />
        <Route path="reports" element={
          userRole === "teacher" ? <TeacherReports /> : <PlaceholderPage />
        } />
        <Route path="stats" element={
          userRole === "admin" ? <AdminStats /> : <PlaceholderPage />
        } />
        <Route path="users" element={
          userRole === "admin" ? <AdminUsers /> : <PlaceholderPage />
        } />
        <Route path="courses" element={
          userRole === "admin" ? <AdminCourses /> : <PlaceholderPage />
        } />
        <Route path="settings" element={
          userRole === "admin" ? <AdminSettings /> : <PlaceholderPage />
        } />
        <Route path="*" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  );
}
