import { BookOpen, Plus, Users, Clock, Edit, Trash2, Eye } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export function AdminCourses() {
  const courses = [
    {
      id: 1,
      title: "Fundamentos do Empreendedorismo Feminino",
      description: "Aprenda os princípios básicos para iniciar seu próprio negócio",
      thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
      instructor: "Ana Santos",
      students: 85,
      lessons: 12,
      duration: "4h 30min",
      status: "published",
      category: "Empreendedorismo"
    },
    {
      id: 2,
      title: "Marketing Digital para Pequenos Negócios",
      description: "Estratégias práticas de marketing digital",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      instructor: "Carla Mendes",
      students: 72,
      lessons: 15,
      duration: "6h 15min",
      status: "published",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Artesanato e Criatividade",
      description: "Desenvolva produtos artesanais únicos",
      thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400",
      instructor: "Beatriz Lima",
      students: 64,
      lessons: 10,
      duration: "3h 45min",
      status: "published",
      category: "Artesanato"
    },
    {
      id: 4,
      title: "Gestão Financeira para Empreendedoras",
      description: "Controle financeiro e gestão de negócios",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
      instructor: "Juliana Costa",
      students: 58,
      lessons: 8,
      duration: "2h 30min",
      status: "published",
      category: "Finanças"
    },
    {
      id: 5,
      title: "Técnicas Avançadas de Vendas",
      description: "Melhore suas habilidades de vendas e negociação",
      thumbnail: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400",
      instructor: "Ana Santos",
      students: 0,
      lessons: 14,
      duration: "5h 20min",
      status: "draft",
      category: "Vendas"
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { text: string; class: string }> = {
      published: { text: "Publicado", class: "bg-success" },
      draft: { text: "Rascunho", class: "bg-warning text-dark" },
      archived: { text: "Arquivado", class: "bg-secondary" }
    };
    return badges[status] || badges.draft;
  };

  const stats = {
    total: courses.length,
    published: courses.filter(c => c.status === "published").length,
    draft: courses.filter(c => c.status === "draft").length,
    totalStudents: courses.reduce((sum, c) => sum + c.students, 0)
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 mb-1">Gerenciar Cursos</h1>
            <p className="text-muted mb-0">Crie e gerencie os cursos da plataforma</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={18} className="me-2" />
            Novo Curso
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1">{stats.total}</h3>
              <p className="text-muted small mb-0">Total de Cursos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-success">{stats.published}</h3>
              <p className="text-muted small mb-0">Publicados</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-warning">{stats.draft}</h3>
              <p className="text-muted small mb-0">Rascunhos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="mb-1 text-primary">{stats.totalStudents}</h3>
              <p className="text-muted small mb-0">Alunas Matriculadas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-lg-4">
          <select className="form-select">
            <option value="">Todas as Categorias</option>
            <option value="empreendedorismo">Empreendedorismo</option>
            <option value="marketing">Marketing</option>
            <option value="artesanato">Artesanato</option>
            <option value="financas">Finanças</option>
            <option value="vendas">Vendas</option>
          </select>
        </div>
        <div className="col-lg-4 mt-3 mt-lg-0">
          <select className="form-select">
            <option value="">Todos os Status</option>
            <option value="published">Publicados</option>
            <option value="draft">Rascunhos</option>
            <option value="archived">Arquivados</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="row g-4">
        {courses.map((course) => {
          const badge = getStatusBadge(course.status);
          
          return (
            <div key={course.id} className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="position-relative" style={{ height: '100%', minHeight: '200px' }}>
                      <ImageWithFallback
                        src={course.thumbnail}
                        alt={course.title}
                        className="img-cover rounded-start"
                      />
                      <div className="position-absolute top-0 start-0 m-2">
                        <span className={`badge ${badge.class}`}>{badge.text}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100">
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title mb-0">{course.title}</h5>
                        </div>
                        <span className="badge bg-light text-dark mb-2">{course.category}</span>
                        <p className="text-muted small mb-3">{course.description}</p>
                        
                        <div className="d-flex flex-wrap gap-3 small text-muted mb-3">
                          <span>
                            <Users size={14} className="me-1" />
                            {course.students} alunas
                          </span>
                          <span>
                            <BookOpen size={14} className="me-1" />
                            {course.lessons} aulas
                          </span>
                          <span>
                            <Clock size={14} className="me-1" />
                            {course.duration}
                          </span>
                        </div>
                        
                        <p className="text-muted small mb-0">
                          Por: {course.instructor}
                        </p>
                      </div>
                      
                      <div className="d-flex gap-2 mt-3 pt-3 border-top">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
