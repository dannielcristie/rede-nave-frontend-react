import { Link } from "react-router-dom";
import { Users, BookOpen, TrendingUp, Award, Eye } from "lucide-react";

export function TeacherDashboard() {
    const classes = [
        {
            id: 1,
            name: "Gestão Financeira - Turma A",
            students: 45,
            progress: 65,
            activeStudents: 38
        },
        {
            id: 2,
            name: "Marketing Digital - Turma B",
            students: 52,
            progress: 42,
            activeStudents: 48
        }
    ];

    const recentActivity = [
        { student: "Maria Silva", action: "Completou o curso", course: "Gestão Financeira", time: "2h atrás" },
        { student: "Ana Costa", action: "Enviou atividade", course: "Marketing Digital", time: "5h atrás" },
        { student: "Juliana Santos", action: "Iniciou módulo 3", course: "Gestão Financeira", time: "1 dia atrás" }
    ];

    return (
        <div className="p-3 p-md-4">
            {/* Header */}
            <div className="mb-4">
                <h1 className="h3 mb-2">Painel da Professora</h1>
                <p className="text-muted">Acompanhe o progresso das suas turmas</p>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 g-md-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Total de Alunas</p>
                                <h3 className="h4 mb-0">97</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-success bg-opacity-10 text-success">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Alunas Ativas</p>
                                <h3 className="h4 mb-0">86</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-info bg-opacity-10 text-info">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Turmas Ativas</p>
                                <h3 className="h4 mb-0">2</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card stat-card h-100">
                        <div className="card-body d-flex align-items-center gap-3">
                            <div className="icon-badge bg-warning bg-opacity-10 text-warning">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-1 small">Certificadas</p>
                                <h3 className="h4 mb-0">34</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Classes */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h4 mb-0">Minhas Turmas</h2>
                    <Link
                        to="/dashboard/classes"
                        className="btn btn-link text-decoration-none text-primary-purple p-0"
                    >
                        Ver todas
                    </Link>
                </div>

                <div className="row g-3 g-md-4">
                    {classes.map((cls) => (
                        <div key={cls.id} className="col-12 col-md-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <h3 className="h6 mb-2">{cls.name}</h3>
                                        <div className="d-flex gap-2 text-muted small">
                                            <span>{cls.students} alunas</span>
                                            <span>•</span>
                                            <span>{cls.activeStudents} ativas</span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between text-muted small mb-2">
                                            <span>Progresso Médio</span>
                                            <span>{cls.progress}%</span>
                                        </div>
                                        <div className="progress" style={{ height: '6px' }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${cls.progress}%` }}
                                                aria-valuenow={cls.progress}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>

                                    <Link
                                        to="/dashboard/classes"
                                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                                    >
                                        <Eye size={16} className="me-2" />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div>
                <h2 className="h4 mb-3">Atividade Recente</h2>
                <div className="card">
                    <div className="list-group list-group-flush">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <p className="mb-1">
                                            <strong>{activity.student}</strong> {activity.action}
                                        </p>
                                        <p className="text-muted mb-0 small">{activity.course}</p>
                                    </div>
                                    <span className="text-muted small">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
