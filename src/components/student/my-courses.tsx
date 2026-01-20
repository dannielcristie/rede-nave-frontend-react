import { BookOpen, Clock, CheckCircle, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { coursesService, type EnrolledCourse } from "../../services/coursesService";
import { useEffect, useState } from "react";

interface MyCoursesProps {
  onNavigate: (page: string, data?: unknown) => void;
}

export function StudentMyCourses({ onNavigate }: MyCoursesProps) {
  const [courses, setCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    coursesService.listMyCourses()
      .then((data) => setCourses(data))
      .catch(err => console.error("Failed to load courses", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Carregando seus cursos...</div>;
  }

  const inProgressCourses = courses.filter(c => c.enrollment.status === "active" || c.enrollment.status === "in_progress"); // Backend default is "active"
  const completedCourses = courses.filter(c => c.enrollment.status === "completed");

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Meus Cursos</h1>
          <p className="text-muted">Continue sua jornada de aprendizado</p>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                  <BookOpen className="text-primary-purple" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Total de Cursos</div>
                  <h4 className="mb-0">{courses.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-warning bg-opacity-10 rounded p-3">
                  <Clock className="text-warning" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Em Andamento</div>
                  <h4 className="mb-0">{inProgressCourses.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success bg-opacity-10 rounded p-3">
                  <CheckCircle className="text-success" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Concluídos</div>
                  <h4 className="mb-0">{completedCourses.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-info bg-opacity-10 rounded p-3">
                  <PlayCircle className="text-info" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Horas Assistidas</div>
                  <h4 className="mb-0">0h</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Em Andamento */}
      <div className="mb-4">
        <h2 className="h5 mb-3">Em Andamento</h2>
        {inProgressCourses.length === 0 ? (
          <div className="text-muted">Nenhum curso em andamento.</div>
        ) : (
          <div className="row g-3">
            {inProgressCourses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm card-hover">
                  <div className="course-image-container">
                    <ImageWithFallback
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="img-cover rounded-top"
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-warning text-dark">Em andamento</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="text-muted small mb-3">Por {course.instructor.name}</p>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between small text-muted mb-1">
                        <span>{course.enrollment.completed_lessons} de {course.enrollment.total_lessons} aulas</span>
                        <span>{Number(course.enrollment.progress)}%</span>
                      </div>
                      <div className="progress" style={{ height: '6px' }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${course.enrollment.progress}%` }}
                          aria-valuenow={Number(course.enrollment.progress)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <Clock size={14} className="me-1" />
                        {course.duration_minutes} min
                      </span>
                      <button
                        onClick={() => onNavigate("course-player", { courseId: course.slug })} // Pass slug as courseId for consistency with App router
                        className="btn btn-primary btn-sm"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Concluídos */}
      {completedCourses.length > 0 && (
        <div>
          <h2 className="h5 mb-3">Concluídos</h2>
          <div className="row g-3">
            {completedCourses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm card-hover">
                  <div className="course-image-container">
                    <ImageWithFallback
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="img-cover rounded-top"
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success">
                        <CheckCircle size={14} className="me-1" />
                        Concluído
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="text-muted small mb-3">Por {course.instructor.name}</p>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between small text-muted mb-1">
                        <span>{course.enrollment.total_lessons} aulas</span>
                        <span>100%</span>
                      </div>
                      <div className="progress" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <Clock size={14} className="me-1" />
                        {course.duration_minutes} min
                      </span>
                      <button
                        onClick={() => onNavigate("course-player", { courseId: course.slug })}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Revisar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
