import { Link } from "react-router-dom";
import { BookOpen, Calendar, Award, TrendingUp, Play } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function StudentDashboard() {
    const enrolledCourses = [
        {
            id: 1,
            title: "Gestão Financeira para Empreendedoras",
            progress: 60,
            totalLessons: 12,
            completedLessons: 7,
            image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            id: 2,
            title: "Marketing Digital para Artesãs",
            progress: 30,
            totalLessons: 16,
            completedLessons: 5,
            image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            id: 3,
            title: "Liderança Comunitária e Empoderamento",
            progress: 85,
            totalLessons: 14,
            completedLessons: 12,
            image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
    ];

    const upcomingEvents = [
        { title: "Oficina: Precificação de Produtos", date: "15 Dez 2025", time: "14h" },
        { title: "Live: Redes Sociais para Artesãs", date: "18 Dez 2025", time: "19h" }
    ];

    return (
        <div className="p-3 p-md-4">
            {/* Header */}
            <div className="mb-4">
                <h1 className="h3 mb-2">Bem-vinda de volta, Maria!</h1>
                <p className="text-muted">Continue sua jornada de aprendizado</p>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 g-md-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Cursos Ativos</p>
                                <h3 className="h4 mb-0">3</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-success bg-opacity-10 text-success">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Certificados</p>
                                <h3 className="h4 mb-0">2</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-info bg-opacity-10 text-info">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Eventos</p>
                                <h3 className="h4 mb-0">2</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-warning bg-opacity-10 text-warning">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Horas de Estudo</p>
                                <h3 className="h4 mb-0">24h</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Learning */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h4 mb-0">Continue Aprendendo</h2>
                    <Link
                        to="/dashboard/my-courses"
                        className="btn btn-link text-decoration-none text-primary-purple p-0"
                    >
                        Ver todos
                    </Link>
                </div>

                <div className="row g-3 g-md-4">
                    {enrolledCourses.map((course) => (
                        <div key={course.id} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 card-hover">
                                <div className="course-image-container">
                                    <ImageWithFallback
                                        src={course.image}
                                        alt={course.title}
                                        className="img-cover"
                                    />
                                    <div className="position-absolute bottom-0 start-0 end-0 p-3 gradient-overlay d-flex align-items-end">
                                        <Link
                                            to={`/course-player/${course.id}`}
                                            className="btn btn-light btn-sm text-decoration-none d-inline-flex align-items-center"
                                        >
                                            <Play size={16} className="me-2" />
                                            Continuar
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="h6 mb-3">{course.title}</h3>
                                    <div className="mb-2">
                                        <div className="d-flex justify-content-between text-muted small mb-2">
                                            <span>{course.completedLessons} de {course.totalLessons} aulas</span>
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
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Events */}
            <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h4 mb-0">Próximos Eventos</h2>
                    <Link
                        to="/dashboard/events"
                        className="btn btn-link text-decoration-none text-primary-purple p-0"
                    >
                        Ver todos
                    </Link>
                </div>

                <div className="row g-3">
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className="col-12 col-md-6">
                            <div className="card">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="event-date-badge flex-shrink-0">
                                        <div className="small" style={{ fontSize: '0.7rem' }}>Dez</div>
                                        <div>{event.date.split(" ")[0]}</div>
                                    </div>
                                    <div className="flex-fill">
                                        <h4 className="h6 mb-1">{event.title}</h4>
                                        <p className="text-muted small mb-0">{event.date} • {event.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
