import { Link } from "react-router-dom";
import { Users, BookOpen, Calendar, Award, UserCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export function AdminDashboard() {
    const enrollmentData = [
        { month: "Jul", students: 45 },
        { month: "Ago", students: 62 },
        { month: "Set", students: 78 },
        { month: "Out", students: 95 },
        { month: "Nov", students: 120 },
        { month: "Dez", students: 145 }
    ];

    const courseData = [
        { name: "Gestão Financeira", students: 145, completion: 68 },
        { name: "Marketing Digital", students: 132, completion: 55 },
        { name: "Liderança", students: 89, completion: 72 },
        { name: "Vendas", students: 156, completion: 61 }
    ];

    return (
        <div className="p-4">
            {/* Header */}
            <div className="mb-4">
                <h1 className="h3 mb-2 text-dark">Painel Administrativo</h1>
                <p className="text-muted">Visão geral da plataforma Rede Nave</p>
            </div>

            {/* Stats Cards */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 p-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="bg-primary-purple bg-opacity-10 text-primary-purple rounded p-3 d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-0 small">Total de Usuárias</p>
                                <p className="h4 mb-0 text-dark">1.247</p>
                                <p className="text-success small mb-0">+12% este mês</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 p-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="bg-primary bg-opacity-10 text-primary rounded p-3 d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-0 small">Cursos Ativos</p>
                                <p className="h4 mb-0 text-dark">12</p>
                                <p className="text-success small mb-0">+2 novos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 p-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="bg-success bg-opacity-10 text-success rounded p-3 d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-0 small">Certificados Emitidos</p>
                                <p className="h4 mb-0 text-dark">456</p>
                                <p className="text-success small mb-0">+34 esta semana</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 p-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="bg-warning bg-opacity-10 text-warning rounded p-3 d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <UserCheck size={24} />
                            </div>
                            <div>
                                <p className="text-muted mb-0 small">Taxa de Conclusão</p>
                                <p className="h4 mb-0 text-dark">64%</p>
                                <p className="text-success small mb-0">+5% vs mês anterior</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-6">
                    <div className="card h-100 p-4">
                        <h3 className="h5 text-dark mb-4">Crescimento de Matrículas</h3>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={enrollmentData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="students" stroke="#6a2e99" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card h-100 p-4">
                        <h3 className="h5 text-dark mb-4">Cursos Mais Populares</h3>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={courseData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="students" fill="#6a2e99" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-4">
                <h2 className="h4 text-dark mb-3">Ações Rápidas</h2>
                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <Link
                            to="/dashboard/users"
                            className="btn btn-light border w-100 p-4 d-flex flex-column align-items-center gap-2 card-hover text-decoration-none"
                        >
                            <Users size={32} className="text-primary-purple" />
                            <span className="text-dark">Gerenciar Usuários</span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4">
                        <Link
                            to="/dashboard/courses"
                            className="btn btn-light border w-100 p-4 d-flex flex-column align-items-center gap-2 card-hover text-decoration-none"
                        >
                            <BookOpen size={32} className="text-primary-purple" />
                            <span className="text-dark">Gerenciar Cursos</span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4">
                        <Link
                            to="/dashboard/events"
                            className="btn btn-light border w-100 p-4 d-flex flex-column align-items-center gap-2 card-hover text-decoration-none"
                        >
                            <Calendar size={32} className="text-primary-purple" />
                            <span className="text-dark">Gerenciar Eventos</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Performance by Course */}
            <div>
                <h2 className="h4 text-dark mb-3">Performance por Curso</h2>
                <div className="card">
                    <div className="list-group list-group-flush">
                        {courseData.map((course, index) => (
                            <div key={index} className="list-group-item p-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="h6 mb-0 text-dark">{course.name}</h5>
                                    <span className="text-muted small">{course.students} alunas</span>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="progress flex-grow-1" style={{ height: '8px' }}>
                                        <div
                                            className="progress-bar bg-accent-green"
                                            role="progressbar"
                                            style={{ width: `${course.completion}%` }}
                                            aria-valuenow={course.completion}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                    <span className="text-muted small w-auto text-end" style={{ minWidth: '40px' }}>{course.completion}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
