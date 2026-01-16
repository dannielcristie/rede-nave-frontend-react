import { Users, BookOpen, Calendar, Plus, MoreVertical } from "lucide-react";

export function TeacherClasses() {
  const classes = [
    {
      id: 1,
      name: "Turma A - Fundamentos do Empreendedorismo",
      course: "Fundamentos do Empreendedorismo Feminino",
      students: 32,
      startDate: "01 Nov 2024",
      endDate: "15 Dez 2024",
      status: "active",
      progress: 75
    },
    {
      id: 2,
      name: "Turma B - Liderança Feminina",
      course: "Desenvolvimento Pessoal e Liderança",
      students: 28,
      startDate: "15 Nov 2024",
      endDate: "30 Dez 2024",
      status: "active",
      progress: 50
    },
    {
      id: 3,
      name: "Turma C - Empreendedorismo Avançado",
      course: "Fundamentos do Empreendedorismo Feminino",
      students: 25,
      startDate: "10 Out 2024",
      endDate: "25 Nov 2024",
      status: "completed",
      progress: 100
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { text: string; class: string }> = {
      active: { text: "Ativa", class: "bg-success" },
      completed: { text: "Concluída", class: "bg-secondary" },
      upcoming: { text: "Em breve", class: "bg-info" }
    };
    return badges[status] || badges.active;
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 mb-1">Minhas Turmas</h1>
            <p className="text-muted mb-0">Gerencie suas turmas e acompanhe o progresso</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={18} className="me-2" />
            Nova Turma
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                  <Users className="text-primary-purple" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Turmas Ativas</div>
                  <h4 className="mb-0">{classes.filter(c => c.status === "active").length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success bg-opacity-10 rounded p-3">
                  <BookOpen className="text-success" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Total de Alunos</div>
                  <h4 className="mb-0">{classes.reduce((sum, c) => sum + c.students, 0)}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-info bg-opacity-10 rounded p-3">
                  <Calendar className="text-info" size={24} />
                </div>
                <div>
                  <div className="text-muted small">Turmas Concluídas</div>
                  <h4 className="mb-0">{classes.filter(c => c.status === "completed").length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classes List */}
      <div className="row g-3">
        {classes.map((classItem) => {
          const badge = getStatusBadge(classItem.status);
          
          return (
            <div key={classItem.id} className="col-12">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="d-flex align-items-start gap-3 mb-3 mb-lg-0">
                        <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                          <Users className="text-primary-purple" size={24} />
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <h5 className="mb-0">{classItem.name}</h5>
                            <span className={`badge ${badge.class}`}>{badge.text}</span>
                          </div>
                          <p className="text-muted mb-2">{classItem.course}</p>
                          <div className="d-flex flex-wrap gap-3 small text-muted">
                            <span>
                              <Users size={14} className="me-1" />
                              {classItem.students} alunos
                            </span>
                            <span>
                              <Calendar size={14} className="me-1" />
                              {classItem.startDate} - {classItem.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="mb-3">
                        <div className="d-flex justify-content-between small text-muted mb-1">
                          <span>Progresso do Curso</span>
                          <span>{classItem.progress}%</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div
                            className="progress-bar"
                            style={{ width: `${classItem.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <button className="btn btn-primary btn-sm flex-grow-1">
                          Ver Detalhes
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
