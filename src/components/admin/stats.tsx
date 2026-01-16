import { Users, BookOpen, GraduationCap, TrendingUp, DollarSign, Calendar } from "lucide-react";

export function AdminStats() {
  const platformStats = {
    totalUsers: 245,
    totalCourses: 12,
    totalTeachers: 8,
    activeStudents: 198,
    completionRate: 76,
    revenue: 45280
  };

  const recentActivity = [
    { type: "user", message: "15 novas alunas se cadastraram", time: "2 horas atrás" },
    { type: "course", message: "Curso 'Marketing Digital' foi concluído por 8 alunas", time: "5 horas atrás" },
    { type: "teacher", message: "Nova professora adicionada: Carolina Silva", time: "1 dia atrás" },
    { type: "revenue", message: "Receita mensal atingiu meta de R$ 40.000", time: "2 dias atrás" }
  ];

  const monthlyGrowth = [
    { month: "Jul", users: 145 },
    { month: "Ago", users: 168 },
    { month: "Set", users: 189 },
    { month: "Out", users: 212 },
    { month: "Nov", users: 230 },
    { month: "Dez", users: 245 }
  ];

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Estatísticas da Plataforma</h1>
          <p className="text-muted">Visão geral do desempenho da Rede Nave</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                  <Users className="text-primary-purple" size={28} />
                </div>
                <span className="badge bg-success">+12%</span>
              </div>
              <h3 className="mb-1">{platformStats.totalUsers}</h3>
              <p className="text-muted small mb-0">Usuários Totais</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-success bg-opacity-10 rounded p-3">
                  <BookOpen className="text-success" size={28} />
                </div>
                <span className="badge bg-info">Ativo</span>
              </div>
              <h3 className="mb-1">{platformStats.totalCourses}</h3>
              <p className="text-muted small mb-0">Cursos Disponíveis</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-info bg-opacity-10 rounded p-3">
                  <GraduationCap className="text-info" size={28} />
                </div>
                <span className="badge bg-warning text-dark">+2</span>
              </div>
              <h3 className="mb-1">{platformStats.totalTeachers}</h3>
              <p className="text-muted small mb-0">Professoras</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-warning bg-opacity-10 rounded p-3">
                  <TrendingUp className="text-warning" size={28} />
                </div>
                <span className="badge bg-success">+8%</span>
              </div>
              <h3 className="mb-1">{platformStats.activeStudents}</h3>
              <p className="text-muted small mb-0">Alunas Ativas</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-success bg-opacity-10 rounded p-3">
                  <Calendar className="text-success" size={28} />
                </div>
                <span className="badge bg-success">+5%</span>
              </div>
              <h3 className="mb-1">{platformStats.completionRate}%</h3>
              <p className="text-muted small mb-0">Taxa de Conclusão</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm stat-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="bg-accent-green bg-opacity-10 rounded p-3">
                  <DollarSign className="text-accent-green" size={28} />
                </div>
                <span className="badge bg-success">+15%</span>
              </div>
              <h3 className="mb-1">R$ {platformStats.revenue.toLocaleString()}</h3>
              <p className="text-muted small mb-0">Receita Mensal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Growth Chart */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Crescimento de Usuários</h5>
            </div>
            <div className="card-body p-4">
              <div className="d-flex align-items-end gap-3" style={{ height: '300px' }}>
                {monthlyGrowth.map((data, index) => {
                  const maxUsers = Math.max(...monthlyGrowth.map(d => d.users));
                  const heightPercentage = (data.users / maxUsers) * 100;
                  
                  return (
                    <div key={index} className="flex-fill d-flex flex-column align-items-center gap-2">
                      <div className="w-100 d-flex flex-column justify-content-end" style={{ height: '250px' }}>
                        <div
                          className="bg-primary-purple rounded-top position-relative"
                          style={{ height: `${heightPercentage}%`, minHeight: '20px' }}
                        >
                          <span
                            className="position-absolute top-0 start-50 translate-middle-x mt-n4 small fw-medium"
                            style={{ marginTop: '-20px' }}
                          >
                            {data.users}
                          </span>
                        </div>
                      </div>
                      <small className="text-muted">{data.month}</small>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Atividades Recentes</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="list-group-item">
                    <div className="d-flex gap-3">
                      <div
                        className="rounded-circle bg-primary-purple bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '40px', height: '40px' }}
                      >
                        {activity.type === "user" && <Users size={18} className="text-primary-purple" />}
                        {activity.type === "course" && <BookOpen size={18} className="text-primary-purple" />}
                        {activity.type === "teacher" && <GraduationCap size={18} className="text-primary-purple" />}
                        {activity.type === "revenue" && <DollarSign size={18} className="text-primary-purple" />}
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 small">{activity.message}</p>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
