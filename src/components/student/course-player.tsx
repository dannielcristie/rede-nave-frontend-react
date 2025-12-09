import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, Circle, Lock, PlayCircle } from "lucide-react";

interface CoursePlayerProps {
    courseId?: number;
    onBack: () => void;
}

export function CoursePlayer({ courseId: propCourseId, onBack }: CoursePlayerProps) {
    const { courseId: paramCourseId } = useParams();
    const courseId = propCourseId || Number(paramCourseId) || 1;
    const [currentLesson, setCurrentLesson] = useState(0);

    const course = {
        id: courseId,
        title: "Gestão Financeira para Empreendedoras",
        instructor: "Profa. Ana Paula Silva",
        progress: 60,
        lessons: [
            { id: 1, title: "Introdução à Gestão Financeira", duration: "12:30", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 2, title: "Controle de Fluxo de Caixa", duration: "18:45", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 3, title: "Planejamento Financeiro Pessoal", duration: "15:20", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 4, title: "Separação de Finanças Pessoais e Empresariais", duration: "20:10", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 5, title: "Custos Fixos e Variáveis", duration: "16:30", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 6, title: "Formação de Preço", duration: "22:15", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 7, title: "Margem de Lucro", duration: "14:50", completed: true, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 8, title: "Controle de Estoque", duration: "19:30", completed: false, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 9, title: "Gestão de Contas a Pagar e Receber", duration: "17:40", completed: false, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 10, title: "Indicadores Financeiros", duration: "21:00", completed: false, locked: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 11, title: "Planejamento Tributário Básico", duration: "25:20", completed: false, locked: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: 12, title: "Projeto Final - Plano Financeiro", duration: "30:00", completed: false, locked: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    };

    const handleCompleteLesson = () => {
        // Marcar aula como concluída
        if (currentLesson < course.lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        }
    };

    const completedCount = course.lessons.filter(l => l.completed).length;

    return (
        <div className="min-vh-100 bg-light">
            {/* Header */}
            <div className="bg-white border-bottom sticky-top" style={{ zIndex: 1020 }}>
                <div className="container-fluid px-4 py-3">
                    <div className="d-flex align-items-center gap-3">
                        <button
                            onClick={onBack}
                            className="btn btn-link text-secondary p-0"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex-grow-1">
                            <h1 className="h5 mb-0 text-dark">{course.title}</h1>
                            <p className="small text-muted mb-0">{course.instructor}</p>
                        </div>
                        <div className="text-end d-none d-md-block">
                            <p className="small text-muted mb-1">{completedCount} de {course.lessons.length} aulas concluídas</p>
                            <div className="progress" style={{ height: '8px', width: '200px' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${(completedCount / course.lessons.length) * 100}%` }}
                                    aria-valuenow={(completedCount / course.lessons.length) * 100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-4 py-4">
                <div className="row g-4">
                    {/* Video Player */}
                    <div className="col-12 col-lg-8">
                        <div className="d-flex flex-column gap-4">
                            <div className="card overflow-hidden border-0 shadow-sm">
                                <div className="ratio ratio-16x9 bg-black">
                                    <iframe
                                        src={course.lessons[currentLesson].videoUrl}
                                        title={course.lessons[currentLesson].title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <div className="card border-0 shadow-sm p-4">
                                <div className="d-flex flex-column flex-md-row align-items-md-start justify-content-between gap-3 mb-4">
                                    <div>
                                        <h2 className="h4 text-dark mb-2">
                                            Aula {currentLesson + 1}: {course.lessons[currentLesson].title}
                                        </h2>
                                        <p className="text-muted mb-0">Duração: {course.lessons[currentLesson].duration}</p>
                                    </div>
                                    {!course.lessons[currentLesson].completed && (
                                        <button
                                            onClick={handleCompleteLesson}
                                            className="btn btn-success text-dark d-flex align-items-center gap-2"
                                        >
                                            <CheckCircle size={20} />
                                            Marcar como Concluída
                                        </button>
                                    )}
                                </div>

                                <div className="text-secondary">
                                    <p>
                                        Nesta aula você aprenderá conceitos essenciais sobre {course.lessons[currentLesson].title.toLowerCase()}.
                                        Assista com atenção e faça anotações dos pontos principais.
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="d-flex gap-3">
                                <button
                                    onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                                    disabled={currentLesson === 0}
                                    className="btn btn-outline-secondary flex-fill"
                                >
                                    Aula Anterior
                                </button>
                                <button
                                    onClick={() => setCurrentLesson(Math.min(course.lessons.length - 1, currentLesson + 1))}
                                    disabled={currentLesson === course.lessons.length - 1}
                                    className="btn btn-primary flex-fill"
                                >
                                    Próxima Aula
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Lessons Sidebar */}
                    <div className="col-12 col-lg-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-header bg-white border-bottom p-4">
                                <h3 className="h5 mb-0 text-dark">Conteúdo do Curso</h3>
                            </div>
                            <div className="card-body p-0 lesson-list">
                                <div className="list-group list-group-flush">
                                    {course.lessons.map((lesson, index) => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => !lesson.locked && setCurrentLesson(index)}
                                            disabled={lesson.locked}
                                            className={`list-group-item list-group-item-action p-3 border-0 ${currentLesson === index ? "active bg-primary-purple text-white" : ""
                                                } ${lesson.locked ? "bg-light text-muted" : ""}`}
                                        >
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="mt-1">
                                                    {lesson.locked ? (
                                                        <Lock size={16} />
                                                    ) : lesson.completed ? (
                                                        <CheckCircle size={16} className={currentLesson === index ? "text-white" : "text-success"} />
                                                    ) : (
                                                        <Circle size={16} />
                                                    )}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-1 fw-medium line-clamp-2">
                                                        {index + 1}. {lesson.title}
                                                    </p>
                                                    <p className={`small mb-0 ${currentLesson === index ? "text-white-50" : "text-muted"}`}>
                                                        {lesson.duration}
                                                    </p>
                                                </div>
                                                {currentLesson === index && <PlayCircle size={20} className="flex-shrink-0" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
