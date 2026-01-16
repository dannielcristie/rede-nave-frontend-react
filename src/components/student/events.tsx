import { Calendar, MapPin, Users, Clock, Video } from "lucide-react";

export function StudentEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop: Como Vender Online",
      date: "15 Dez 2024",
      time: "14:00 - 16:00",
      location: "Online (Zoom)",
      instructor: "Ana Santos",
      participants: 45,
      maxParticipants: 50,
      type: "workshop",
      status: "registered"
    },
    {
      id: 2,
      title: "Palestra: Liderança Feminina no Mercado",
      date: "20 Dez 2024",
      time: "19:00 - 21:00",
      location: "Presencial - Centro Cultural",
      instructor: "Carla Mendes",
      participants: 78,
      maxParticipants: 100,
      type: "lecture",
      status: "available"
    },
    {
      id: 3,
      title: "Encontro de Networking",
      date: "22 Dez 2024",
      time: "18:00 - 20:00",
      location: "Café Cultural Rede Nave",
      instructor: "Equipe Rede Nave",
      participants: 30,
      maxParticipants: 40,
      type: "networking",
      status: "available"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Workshop: Precificação de Produtos",
      date: "01 Dez 2024",
      time: "14:00 - 16:00",
      location: "Online (Zoom)",
      instructor: "Juliana Costa",
      type: "workshop",
      attended: true,
      recordingAvailable: true
    },
    {
      id: 5,
      title: "Roda de Conversa: Empreendedorismo Criativo",
      date: "25 Nov 2024",
      time: "19:00 - 20:30",
      location: "Online (Google Meet)",
      instructor: "Beatriz Lima",
      type: "talk",
      attended: true,
      recordingAvailable: true
    }
  ];

  const getEventTypeBadge = (type: string) => {
    const badges: Record<string, { text: string; class: string }> = {
      workshop: { text: "Workshop", class: "bg-primary" },
      lecture: { text: "Palestra", class: "bg-info" },
      networking: { text: "Networking", class: "bg-success" },
      talk: { text: "Conversa", class: "bg-warning text-dark" }
    };
    return badges[type] || badges.workshop;
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Eventos</h1>
          <p className="text-muted">Participe de workshops, palestras e encontros</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-5">
        <h2 className="h5 mb-3">Próximos Eventos</h2>
        <div className="row g-3">
          {upcomingEvents.map((event) => {
            const badge = getEventTypeBadge(event.type);
            const spotsLeft = event.maxParticipants - event.participants;
            
            return (
              <div key={event.id} className="col-lg-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className={`badge ${badge.class}`}>{badge.text}</span>
                      {event.status === "registered" && (
                        <span className="badge bg-success">Inscrito</span>
                      )}
                    </div>

                    <h5 className="card-title mb-3">{event.title}</h5>

                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Calendar size={16} />
                        <small>{event.date}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Clock size={16} />
                        <small>{event.time}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        {event.location.includes("Online") ? (
                          <Video size={16} />
                        ) : (
                          <MapPin size={16} />
                        )}
                        <small>{event.location}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Users size={16} />
                        <small>{event.participants} participantes ({spotsLeft} vagas restantes)</small>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <span className="text-muted small">Por {event.instructor}</span>
                      {event.status === "registered" ? (
                        <button className="btn btn-outline-danger btn-sm">
                          Cancelar Inscrição
                        </button>
                      ) : (
                        <button className="btn btn-primary btn-sm">
                          Inscrever-se
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="h5 mb-3">Eventos Anteriores</h2>
        <div className="row g-3">
          {pastEvents.map((event) => {
            const badge = getEventTypeBadge(event.type);
            
            return (
              <div key={event.id} className="col-lg-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className={`badge ${badge.class}`}>{badge.text}</span>
                      {event.attended && (
                        <span className="badge bg-secondary">Participou</span>
                      )}
                    </div>

                    <h5 className="card-title mb-3">{event.title}</h5>

                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Calendar size={16} />
                        <small>{event.date}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Clock size={16} />
                        <small>{event.time}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        {event.location.includes("Online") ? (
                          <Video size={16} />
                        ) : (
                          <MapPin size={16} />
                        )}
                        <small>{event.location}</small>
                      </div>
                    </div>

                    {event.recordingAvailable && (
                      <div className="alert alert-info mb-3 py-2" role="alert">
                        <small>
                          <Video size={14} className="me-1" />
                          Gravação disponível
                        </small>
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <span className="text-muted small">Por {event.instructor}</span>
                      {event.recordingAvailable && (
                        <button className="btn btn-outline-primary btn-sm">
                          Assistir Gravação
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
