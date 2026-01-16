import { BarChart3, TrendingUp, Users, BookOpen, Download, Calendar } from "lucide-react";

export function TeacherReports() {
  const monthlyData = [
    { month: "Jul", students: 45, completed: 12 },
    { month: "Ago", students: 52, completed: 18 },
    { month: "Set", students: 58, completed: 22 },
    { month: "Out", students: 65, completed: 28 },
    { month: "Nov", students: 72, completed: 35 },
    { month: "Dez", students: 85, completed: 42 }
  ];

  const topPerformers = [
    { name: "Ana Costa", progress: 92, grade: 9.5 },
    { name: "Maria Silva", progress: 85, grade: 9.0 },
    { name: "Beatriz Lima", progress: 78, grade: 8.5 }
  ];

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 mb-1">Relatórios</h1>
            <p className="text-muted mb-0">Análise de desempenho e estatísticas</p>
          </div>
          <button className="btn btn-primary">
            <Download size={18} className="me-2" />
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="row mb-4">
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text">
              <Calendar size={18} />
            </span>
            <select className="form-select">
              <option>Últimos 6 meses</option>
              <option>Último mês</option>
              <option>Último trimestre</option>
              <option>Último ano</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                  <Users className="text-primary-purple" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Total de Alunas</div>
                  <h4 className="mb-0">85</h4>
                  <small className="text-success">
                    <TrendingUp size={12} className="me-1" />
                    +18% vs mês anterior
                  </small>
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
                  <BookOpen className="text-success" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Cursos Concluídos</div>
                  <h4 className="mb-0">42</h4>
                  <small className="text-success">
                    <TrendingUp size={12} className="me-1" />
                    +20% vs mês anterior
                  </small>
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
                  <BarChart3 className="text-info" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Taxa de Conclusão</div>
                  <h4 className="mb-0">74%</h4>
                  <small className="text-success">
                    <TrendingUp size={12} className="me-1" />
                    +5% vs mês anterior
                  </small>
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
                  <TrendingUp className="text-warning" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Média Geral</div>
                  <h4 className="mb-0">8.7</h4>
                  <small className="text-success">
                    <TrendingUp size={12} className="me-1" />
                    +0.3 vs mês anterior
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Growth Chart */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Crescimento de Alunas e Conclusões</h5>
            </div>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary-purple" style={{ width: '12px', height: '12px', borderRadius: '2px' }}></div>
                  <small className="text-muted">Alunas Ativas</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success" style={{ width: '12px', height: '12px', borderRadius: '2px' }}></div>
                  <small className="text-muted">Cursos Concluídos</small>
                </div>
              </div>

              {/* Simple Bar Chart */}
              <div className="d-flex align-items-end gap-2" style={{ height: '250px' }}>
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex-fill d-flex flex-column align-items-center gap-2">
                    <div className="w-100 d-flex flex-column justify-content-end gap-1" style={{ height: '200px' }}>
                      <div
                        className="bg-primary-purple rounded-top"
                        style={{ height: `${(data.students / 100) * 100}%`, minHeight: '5px' }}
                        title={`${data.students} alunas`}
                      ></div>
                      <div
                        className="bg-success rounded-top"
                        style={{ height: `${(data.completed / 100) * 100}%`, minHeight: '5px' }}
                        title={`${data.completed} conclusões`}
                      ></div>
                    </div>
                    <small className="text-muted">{data.month}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Melhores Alunas</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {topPerformers.map((student, index) => (
                  <div key={index} className="list-group-item">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle bg-primary-purple d-flex align-items-center justify-content-center text-white flex-shrink-0"
                        style={{ width: '40px', height: '40px' }}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-medium mb-1">{student.name}</div>
                        <div className="d-flex gap-2">
                          <span className="badge bg-success">{student.grade}</span>
                          <small className="text-muted">{student.progress}% concluído</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white text-center">
              <button className="btn btn-sm btn-link text-primary-purple text-decoration-none">
                Ver todas as alunas
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card shadow-sm mt-3">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Estatísticas Rápidas</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Taxa de Participação</span>
                  <span className="fw-medium">86%</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Tempo Médio de Conclusão</span>
                  <span className="fw-medium">45 dias</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Satisfação Geral</span>
                  <span className="fw-medium">4.8/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
