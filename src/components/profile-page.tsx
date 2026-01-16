import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Camera, Save } from "lucide-react";

interface StudentProfilePageProps {
  userRole: "student" | "teacher" | "admin";
}

export function StudentProfilePage({ userRole }: StudentProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  // Dados mock baseados no role
  const profileData = {
    student: {
      name: "Maria Silva",
      email: "aluna@redenave.com",
      phone: "(11) 98765-4321",
      address: "São Paulo, SP",
      joinDate: "Janeiro 2024",
      bio: "Empreendedora em formação, apaixonada por artesanato e desenvolvimento pessoal."
    },
    teacher: {
      name: "Ana Santos",
      email: "professora@redenave.com",
      phone: "(11) 91234-5678",
      address: "São Paulo, SP",
      joinDate: "Novembro 2023",
      bio: "Professora especializada em empreendedorismo feminino com 10 anos de experiência."
    },
    admin: {
      name: "Administrador",
      email: "admin@redenave.com",
      phone: "(11) 99999-9999",
      address: "São Paulo, SP",
      joinDate: "Outubro 2023",
      bio: "Responsável pela gestão da plataforma Rede Nave."
    }
  };

  const currentProfile = profileData[userRole];
  const [formData, setFormData] = useState(currentProfile);

  const handleSave = () => {
    setIsEditing(false);
    // Aqui salvaria os dados
    alert("Perfil atualizado com sucesso!");
  };

  const getRoleBadge = () => {
    const badges = {
      student: { text: "Aluna", class: "bg-primary" },
      teacher: { text: "Professora", class: "bg-success" },
      admin: { text: "Administrador", class: "bg-danger" }
    };
    return badges[userRole];
  };

  const badge = getRoleBadge();

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Meu Perfil</h1>
          <p className="text-muted">Gerencie suas informações pessoais</p>
        </div>
      </div>

      <div className="row g-4">
        {/* Coluna da Esquerda - Avatar e Info Rápida */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body text-center p-4">
              {/* Avatar */}
              <div className="position-relative d-inline-block mb-3">
                <div 
                  className="rounded-circle bg-primary-purple d-flex align-items-center justify-content-center text-white"
                  style={{ width: '120px', height: '120px', fontSize: '48px' }}
                >
                  {formData.name.charAt(0)}
                </div>
                <button className="btn btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0">
                  <Camera size={16} />
                </button>
              </div>

              <h3 className="h5 mb-1">{formData.name}</h3>
              <span className={`badge ${badge.class} mb-3`}>{badge.text}</span>

              <div className="d-flex flex-column gap-2 text-start">
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Mail size={16} />
                  <small>{formData.email}</small>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <Calendar size={16} />
                  <small>Membro desde {formData.joinDate}</small>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          {userRole === "student" && (
            <div className="card shadow-sm mt-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Estatísticas</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">Cursos Concluídos</span>
                    <span className="badge bg-success">3</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">Em Andamento</span>
                    <span className="badge bg-primary">2</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">Certificados</span>
                    <span className="badge bg-warning text-dark">3</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Coluna da Direita - Formulário */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0">Informações Pessoais</h5>
              {!isEditing ? (
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Perfil
                </button>
              ) : (
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(currentProfile);
                    }}
                  >
                    Cancelar
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={handleSave}
                  >
                    <Save size={16} className="me-1" />
                    Salvar
                  </button>
                </div>
              )}
            </div>
            <div className="card-body p-4">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Nome Completo</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Telefone</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Localização</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <MapPin size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Biografia</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </form>

              <hr className="my-4" />

              {/* Seção de Segurança */}
              <h5 className="mb-3">Segurança</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nova Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    disabled={!isEditing}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirmar Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="alert alert-info mt-3 mb-0" role="alert">
                  <small>
                    <strong>Dica:</strong> Deixe os campos de senha em branco se não quiser alterá-la.
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
