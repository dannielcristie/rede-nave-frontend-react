import { Search, Plus, MoreVertical, Mail, Shield, User, GraduationCap } from "lucide-react";

export function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      role: "student",
      status: "active",
      joinDate: "01 Nov 2024",
      courses: 3
    },
    {
      id: 2,
      name: "Ana Santos",
      email: "professora@redenave.com",
      role: "teacher",
      status: "active",
      joinDate: "15 Out 2023",
      classes: 3
    },
    {
      id: 3,
      name: "Juliana Costa",
      email: "juliana.c@redenave.com",
      role: "teacher",
      status: "active",
      joinDate: "20 Nov 2023",
      classes: 2
    },
    {
      id: 4,
      name: "Administrador",
      email: "admin@redenave.com",
      role: "admin",
      status: "active",
      joinDate: "01 Out 2023",
      access: "full"
    },
    {
      id: 5,
      name: "Beatriz Lima",
      email: "beatriz.l@email.com",
      role: "student",
      status: "active",
      joinDate: "15 Nov 2024",
      courses: 2
    }
  ];

  const getRoleBadge = (role: string) => {
    const badges: Record<string, { text: string; class: string; icon: any }> = {
      student: { text: "Aluna", class: "bg-primary", icon: User },
      teacher: { text: "Professora", class: "bg-success", icon: GraduationCap },
      admin: { text: "Admin", class: "bg-danger", icon: Shield }
    };
    return badges[role] || badges.student;
  };

  const getStatusBadge = (status: string) => {
    return status === "active" 
      ? { text: "Ativo", class: "bg-success" }
      : { text: "Inativo", class: "bg-secondary" };
  };

  const stats = {
    total: users.length,
    students: users.filter(u => u.role === "student").length,
    teachers: users.filter(u => u.role === "teacher").length,
    admins: users.filter(u => u.role === "admin").length
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 mb-1">Gerenciar Usuários</h1>
            <p className="text-muted mb-0">Gerencie alunas, professoras e administradores</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={18} className="me-2" />
            Novo Usuário
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{stats.total}</h3>
              <p className="text-muted small mb-0">Total de Usuários</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-primary">{stats.students}</h3>
              <p className="text-muted small mb-0">Alunas</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-success">{stats.teachers}</h3>
              <p className="text-muted small mb-0">Professoras</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-danger">{stats.admins}</h3>
              <p className="text-muted small mb-0">Administradores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text">
              <Search size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nome ou email..."
            />
          </div>
        </div>
        <div className="col-lg-3 mt-3 mt-lg-0">
          <select className="form-select">
            <option value="">Todas as Funções</option>
            <option value="student">Alunas</option>
            <option value="teacher">Professoras</option>
            <option value="admin">Administradores</option>
          </select>
        </div>
        <div className="col-lg-3 mt-3 mt-lg-0">
          <select className="form-select">
            <option value="">Todos os Status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="border-0 ps-4">Usuário</th>
                  <th className="border-0">Função</th>
                  <th className="border-0">Status</th>
                  <th className="border-0">Data de Cadastro</th>
                  <th className="border-0">Info Adicional</th>
                  <th className="border-0 text-end pe-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const roleBadge = getRoleBadge(user.role);
                  const statusBadge = getStatusBadge(user.status);
                  const RoleIcon = roleBadge.icon;
                  
                  return (
                    <tr key={user.id}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="rounded-circle bg-primary-purple d-flex align-items-center justify-content-center text-white flex-shrink-0"
                            style={{ width: '40px', height: '40px' }}
                          >
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <div className="fw-medium">{user.name}</div>
                            <div className="d-flex align-items-center gap-1 text-muted small">
                              <Mail size={12} />
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${roleBadge.class} d-inline-flex align-items-center gap-1`}>
                          <RoleIcon size={12} />
                          {roleBadge.text}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${statusBadge.class}`}>
                          {statusBadge.text}
                        </span>
                      </td>
                      <td>
                        <span className="text-muted small">{user.joinDate}</span>
                      </td>
                      <td>
                        {user.role === "student" && (
                          <span className="text-muted small">{user.courses} cursos</span>
                        )}
                        {user.role === "teacher" && (
                          <span className="text-muted small">{user.classes} turmas</span>
                        )}
                        {user.role === "admin" && (
                          <span className="text-muted small">Acesso completo</span>
                        )}
                      </td>
                      <td className="text-end pe-4">
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-sm btn-outline-primary">
                            Editar
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <MoreVertical size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
