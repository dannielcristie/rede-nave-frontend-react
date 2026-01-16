import { Award, Download, Share2, Calendar } from "lucide-react";

export function StudentCertificates() {
  const certificates = [
    {
      id: 1,
      courseName: "Artesanato e Criatividade",
      completedDate: "28 Nov 2024",
      instructor: "Beatriz Lima",
      duration: "3h 45min",
      code: "RN-2024-ART-001",
      verified: true
    },
    {
      id: 2,
      courseName: "Gestão Financeira Pessoal",
      completedDate: "15 Nov 2024",
      instructor: "Juliana Costa",
      duration: "2h 30min",
      code: "RN-2024-FIN-002",
      verified: true
    },
    {
      id: 3,
      courseName: "Técnicas de Vendas e Negociação",
      completedDate: "30 Out 2024",
      instructor: "Ana Santos",
      duration: "4h 15min",
      code: "RN-2024-VEN-003",
      verified: true
    }
  ];

  const handleDownload = (certificateId: number) => {
    alert(`Baixando certificado #${certificateId}...`);
  };

  const handleShare = (certificateId: number) => {
    alert(`Compartilhando certificado #${certificateId}...`);
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Meus Certificados</h1>
          <p className="text-muted">Certificados dos cursos que você concluiu</p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="row mb-4">
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 bg-primary-purple text-white">
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 className="display-4 mb-0">{certificates.length}</h2>
                  <p className="mb-0">Certificados Conquistados</p>
                </div>
                <Award size={48} className="opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates List */}
      {certificates.length > 0 ? (
        <div className="row g-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body p-4">
                  {/* Certificate Icon and Verified Badge */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="bg-primary-purple bg-opacity-10 rounded p-3">
                      <Award className="text-primary-purple" size={32} />
                    </div>
                    {cert.verified && (
                      <span className="badge bg-success">
                        Verificado
                      </span>
                    )}
                  </div>

                  {/* Certificate Info */}
                  <h4 className="card-title mb-3">{cert.courseName}</h4>
                  
                  <div className="d-flex flex-column gap-2 mb-4">
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <Calendar size={16} />
                      <small>Concluído em {cert.completedDate}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <small>Instrutor: {cert.instructor}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <small>Carga horária: {cert.duration}</small>
                    </div>
                  </div>

                  {/* Certificate Code */}
                  <div className="bg-light rounded p-3 mb-3">
                    <small className="text-muted d-block mb-1">Código de Verificação</small>
                    <code className="text-primary-purple">{cert.code}</code>
                  </div>

                  {/* Actions */}
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => handleDownload(cert.id)}
                      className="btn btn-primary flex-fill"
                    >
                      <Download size={16} className="me-2" />
                      Baixar PDF
                    </button>
                    <button
                      onClick={() => handleShare(cert.id)}
                      className="btn btn-outline-primary"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card shadow-sm">
          <div className="card-body p-5 text-center">
            <Award size={64} className="text-muted mb-3" />
            <h5>Nenhum certificado ainda</h5>
            <p className="text-muted">
              Complete seus cursos para receber certificados de conclusão.
            </p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-info" role="alert">
            <h6 className="alert-heading">
              <Award size={18} className="me-2" />
              Sobre os Certificados
            </h6>
            <p className="mb-0 small">
              Todos os certificados são verificáveis através do código único. 
              Você pode compartilhá-los em redes sociais profissionais como LinkedIn 
              ou adicionar ao seu portfólio. Os certificados ficam disponíveis por 
              tempo indeterminado na plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
