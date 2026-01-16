import { Search, Filter, Mail, Phone, MoreVertical, TrendingUp, TrendingDown } from "lucide-react";

export function TeacherStudents() {
  const students = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 98765-4321",
      class: "Turma A - Fundamentos",
      enrolledDate: "01 Nov 2024",
      progress: 85,
      status: "active",
      trend: "up"
    },
    {
      id: 2,
      name: "Ana Costa",
      email: "ana.costa@email.com",
      phone: "(11) 97654-3210",
      class: "Turma A - Fundamentos",
      enrolledDate: "01 Nov 2024",
      progress: 92,
      status: "active",
      trend: "up"
    },
    {
      id: 3,
      name: "Juliana Santos",
      email: "juliana.s@email.com",
      phone: "(11) 96543-2109",
      class: "Turma B - Liderança",
      enrolledDate: "15 Nov 2024",
      progress: 45,
      status: "active",
      trend: "down"
    },
    {
      id: 4,
      name: "Beatriz Lima",
      email: "beatriz.lima@email.com",
      phone: "(11) 95432-1098",
      class: "Turma A - Fundamentos",
      enrolledDate: "01 Nov 2024",
      progress: 78,
      status: "active",
      trend: "up"
    },
    {
      id: 5,
      name: "Carla Mendes",
      email: "carla.m@email.com",
      phone: "(11) 94321-0987",
      class: "Turma B - Liderança",
      enrolledDate: "15 Nov 2024",
      progress: 60,
      status: "active",
      trend: "up"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 50) return "bg-warning";
    return "bg-danger";
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Minhas Alunas</h1>
          <p className="text-muted">Acompanhe o progresso e desempenho das alunas</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="input-group">
            <span className="input-group-text">
              <Search size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar aluna por nome, email..."
            />
          </div>
        </div>
        <div className="col-lg-4 mt-3 mt-lg-0">
          <select className="form-select">
            <option value="">Todas as turmas</option>
            <option value="turma-a">Turma A - Fundamentos</option>
            <option value="turma-b">Turma B - Liderança</option>
            <option value="turma-c">Turma C - Avançado</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{students.length}</h3>
              <p className="text-muted small mb-0">Total de Alunas</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{students.filter(s => s.progress >= 80).length}</h3>
              <p className="text-muted small mb-0">Desempenho Alto</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{students.filter(s => s.progress >= 50 && s.progress < 80).length}</h3>
              <p className="text-muted small mb-0">Desempenho Médio</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{students.filter(s => s.progress < 50).length}</h3>
              <p className="text-muted small mb-0">Precisa de Atenção</p>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="border-0 ps-4">Aluna</th>
                  <th className="border-0">Turma</th>
                  <th className="border-0">Progresso</th>
                  <th className="border-0">Tendência</th>
                  <th className="border-0">Contato</th>
                  <th className="border-0 text-end pe-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle bg-primary-purple d-flex align-items-center justify-content-center text-white flex-shrink-0"
                          style={{ width: '40px', height: '40px' }}
                        >
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <div className="fw-medium">{student.name}</div>
                          <small className="text-muted">{student.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light text-dark">{student.class}</span>
                    </td>
                    <td>
                      <div style={{ minWidth: '120px' }}>
                        <div className="d-flex align-items-center gap-2">
                          <div className="progress flex-grow-1" style={{ height: '6px' }}>
                            <div
                              className={`progress-bar ${getProgressColor(student.progress)}`}
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <small className="text-muted" style={{ minWidth: '35px' }}>
                            {student.progress}%
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      {student.trend === "up" ? (
                        <TrendingUp size={18} className="text-success" />
                      ) : (
                        <TrendingDown size={18} className="text-danger" />
                      )}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          title={student.email}
                        >
                          <Mail size={14} />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          title={student.phone}
                        >
                          <Phone size={14} />
                        </button>
                      </div>
                    </td>
                    <td className="text-end pe-4">
                      <button className="btn btn-sm btn-outline-secondary">
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
