import { Plus, Calendar, Users, Clock, MapPin, Edit, Trash2, Eye } from "lucide-react";

export function AdminEventsAdmin() {
  const events = [
    {
      id: 1,
      title: "Workshop: Como Vender Online",
      description: "Aprenda estratégias para vender seus produtos online",
      date: "15 Dez 2024",
      time: "14:00 - 16:00",
      location: "Online (Zoom)",
      type: "workshop",
      instructor: "Ana Santos",
      registrations: 45,
      capacity: 50,
      status: "scheduled"
    },
    {
      id: 2,
      title: "Palestra: Liderança Feminina no Mercado",
      description: "Discussão sobre liderança e empreendedorismo feminino",
      date: "20 Dez 2024",
      time: "19:00 - 21:00",
      location: "Presencial - Centro Cultural",
      type: "lecture",
      instructor: "Carla Mendes",
      registrations: 78,
      capacity: 100,
      status: "scheduled"
    },
    {
      id: 3,
      title: "Encontro de Networking",
      description: "Oportunidade de networking entre empreendedoras",
      date: "22 Dez 2024",
      time: "18:00 - 20:00",
      location: "Café Cultural Rede Nave",
      type: "networking",
      instructor: "Equipe Rede Nave",
      registrations: 30,
      capacity: 40,
      status: "scheduled"
    },
    {
      id: 4,
      title: "Workshop: Precificação de Produtos",
      description: "Como precificar corretamente seus produtos",
      date: "01 Dez 2024",
      time: "14:00 - 16:00",
      location: "Online (Zoom)",
      type: "workshop",
      instructor: "Juliana Costa",
      registrations: 56,
      capacity: 50,
      status: "completed"
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { text: string; class: string }> = {
      scheduled: { text: "Agendado", class: "bg-info" },
      ongoing: { text: "Em Andamento", class: "bg-warning text-dark" },
      completed: { text: "Concluído", class: "bg-success" },
      cancelled: { text: "Cancelado", class: "bg-danger" }
    };
    return badges[status] || badges.scheduled;
  };

  const getTypeBadge = (type: string) => {
    const badges: Record<string, { text: string; class: string }> = {
      workshop: { text: "Workshop", class: "bg-primary" },
      lecture: { text: "Palestra", class: "bg-info" },
      networking: { text: "Networking", class: "bg-success" },
      webinar: { text: "Webinar", class: "bg-purple" }
    };
    return badges[type] || badges.workshop;
  };

  const stats = {
    total: events.length,
    scheduled: events.filter(e => e.status === "scheduled").length,
    completed: events.filter(e => e.status === "completed").length,
    totalRegistrations: events.reduce((sum, e) => sum + e.registrations, 0)
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 mb-1">Gerenciar Eventos</h1>
            <p className="text-muted mb-0">Crie e gerencie eventos da plataforma</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={18} className="me-2" />
            Novo Evento
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{stats.total}</h3>
              <p className="text-muted small mb-0">Total de Eventos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-info">{stats.scheduled}</h3>
              <p className="text-muted small mb-0">Agendados</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-success">{stats.completed}</h3>
              <p className="text-muted small mb-0">Concluídos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-primary">{stats.totalRegistrations}</h3>
              <p className="text-muted small mb-0">Total de Inscrições</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-lg-4">
          <select className="form-select">
            <option value="">Todos os Tipos</option>
            <option value="workshop">Workshop</option>
            <option value="lecture">Palestra</option>
            <option value="networking">Networking</option>
            <option value="webinar">Webinar</option>
          </select>
        </div>
        <div className="col-lg-4 mt-3 mt-lg-0">
          <select className="form-select">
            <option value="">Todos os Status</option>
            <option value="scheduled">Agendados</option>
            <option value="ongoing">Em Andamento</option>
            <option value="completed">Concluídos</option>
            <option value="cancelled">Cancelados</option>
          </select>
        </div>
      </div>

      {/* Events List */}
      <div className="row g-4">
        {events.map((event) => {
          const statusBadge = getStatusBadge(event.status);
          const typeBadge = getTypeBadge(event.type);
          const spotsLeft = event.capacity - event.registrations;
          
          return (
            <div key={event.id} className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2">{event.title}</h5>
                      <div className="d-flex gap-2 flex-wrap">
                        <span className={`badge ${typeBadge.class}`}>{typeBadge.text}</span>
                        <span className={`badge ${statusBadge.class}`}>{statusBadge.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted small mb-3">{event.description}</p>

                  {/* Event Details */}
                  <div className="d-flex flex-column gap-2 mb-3 small text-muted">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Users size={14} />
                      <span>{event.registrations} inscritos {spotsLeft > 0 ? `(${spotsLeft} vagas)` : '(LOTADO)'}</span>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between small text-muted mb-1">
                      <span>Capacidade</span>
                      <span>{event.registrations}/{event.capacity}</span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div
                        className={`progress-bar ${event.registrations >= event.capacity ? 'bg-danger' : 'bg-success'}`}
                        style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Instructor */}
                  <p className="text-muted small mb-3">
                    Por: <strong>{event.instructor}</strong>
                  </p>

                  {/* Actions */}
                  <div className="d-flex gap-2 pt-3 border-top">
                    <button className="btn btn-sm btn-primary flex-fill">
                      <Edit size={14} className="me-1" />
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      <Eye size={14} />
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <Trash2 size={14} />
                    </button>
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
