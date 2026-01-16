import { BookOpen, Clock, CheckCircle, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

interface MyCoursesProps {
  onNavigate: (page: string, data?: any) => void;
}

export function StudentMyCourses({ onNavigate }: MyCoursesProps) {
  const courses = [
    {
      id: 1,
      title: "Fundamentos do Empreendedorismo Feminino",
      progress: 75,
      status: "in-progress",
      thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
      lessons: 12,
      completedLessons: 9,
      duration: "4h 30min",
      instructor: "Ana Santos"
    },
    {
      id: 2,
      title: "Marketing Digital para Pequenos Negócios",
      progress: 45,
      status: "in-progress",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      lessons: 15,
      completedLessons: 7,
      duration: "6h 15min",
      instructor: "Carla Mendes"
    },
    {
      id: 3,
      title: "Artesanato e Criatividade",
      progress: 100,
      status: "completed",
      thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400",
      lessons: 10,
      completedLessons: 10,
      duration: "3h 45min",
      instructor: "Beatriz Lima"
    },
    {
      id: 4,
      title: "Gestão Financeira Pessoal",
      progress: 100,
      status: "completed",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
      lessons: 8,
      completedLessons: 8,
      duration: "2h 30min",
      instructor: "Juliana Costa"
    },
    {
      id: 5,
      title: "Desenvolvimento Pessoal e Liderança",
      progress: 20,
      status: "in-progress",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      lessons: 14,
      completedLessons: 3,
      duration: "5h 20min",
      instructor: "Ana Santos"
    }
  ];

  const inProgressCourses = courses.filter(c => c.status === "in-progress");
  const completedCourses = courses.filter(c => c.status === "completed");

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
                  <h4 className="mb-0">22h</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Em Andamento */}
      <div className="mb-4">
        <h2 className="h5 mb-3">Em Andamento</h2>
        <div className="row g-3">
          {inProgressCourses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="course-image-container">
                  <ImageWithFallback
                    src={course.thumbnail}
                    alt={course.title}
                    className="img-cover rounded-top"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning text-dark">Em andamento</span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="text-muted small mb-3">Por {course.instructor}</p>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small text-muted mb-1">
                      <span>{course.completedLessons} de {course.lessons} aulas</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${course.progress}%` }}
                        aria-valuenow={course.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">
                      <Clock size={14} className="me-1" />
                      {course.duration}
                    </span>
                    <button
                      onClick={() => onNavigate("course-player", { courseId: course.id })}
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
                      src={course.thumbnail}
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
                    <p className="text-muted small mb-3">Por {course.instructor}</p>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between small text-muted mb-1">
                        <span>{course.lessons} aulas</span>
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
                        {course.duration}
                      </span>
                      <button
                        onClick={() => onNavigate("course-player", { courseId: course.id })}
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
