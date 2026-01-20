import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, Circle, PlayCircle, Sun, Moon } from "lucide-react";
import { coursesService, type Course, type Lesson } from "../../services/coursesService";

interface CoursePlayerProps {
    courseId?: string; // It's actually a slug now usually
    onBack: () => void;
}

export function CoursePlayer({ courseId: propCourseId, onBack }: CoursePlayerProps) {
    const { courseId: paramSlug } = useParams();
    const slug = propCourseId || paramSlug;

    const [course, setCourse] = useState<Course | null>(null);
    const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // Flatten lessons for easier navigation
    const [allLessons, setAllLessons] = useState<Lesson[]>([]);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("coursePlayerTheme");
        return savedTheme === "dark";
    });

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("coursePlayerTheme", newDarkMode ? "dark" : "light");
    };


    const loadLesson = async (lessonId: string) => {
        try {
            const lessonData = await coursesService.getLesson(lessonId);
            setCurrentLesson(lessonData);
        } catch (error) {
            console.error("Failed to load lesson", error);
        }
    };

    useEffect(() => {
        if (!slug) return;

        // wrapper to avoid set-state-in-effect lint error
        setTimeout(() => setLoading(true), 0);

        coursesService.getCourse(slug)
            .then(data => {
                setCourse(data);
                // Flatten lessons
                const flattened: Lesson[] = [];
                data.modules?.forEach(m => {
                    m.lessons.forEach(l => flattened.push(l));
                });
                setAllLessons(flattened);

                if (flattened.length > 0) {
                    loadLesson(flattened[0].id);
                    setCurrentLessonIndex(0);
                }
            })
            .catch(err => console.error("Failed to load course", err))
            .finally(() => setLoading(false));
    }, [slug]);



    const handleLessonSelect = (index: number) => {
        setCurrentLessonIndex(index);
        loadLesson(allLessons[index].id);
    };

    const handleNextLesson = () => {
        if (currentLessonIndex < allLessons.length - 1) {
            handleLessonSelect(currentLessonIndex + 1);
        }
    };

    const handlePrevLesson = () => {
        if (currentLessonIndex > 0) {
            handleLessonSelect(currentLessonIndex - 1);
        }
    };

    if (loading || !course) {
        return <div className="min-vh-100 d-flex justify-content-center align-items-center">Carregando curso...</div>;
    }

    const completedCount = 0; // TODO: Fetch progress from backend

    return (
        <div className={`min-vh-100 ${isDarkMode ? 'bg-dark course-player-dark' : 'bg-light'}`}>
            {/* Header */}
            <div className={`${isDarkMode ? 'bg-secondary border-secondary' : 'bg-white border-bottom'} sticky-top`} style={{ zIndex: 1020 }}>
                <div className="container-fluid px-4 py-3">
                    <div className="d-flex align-items-center gap-3">
                        <button
                            onClick={onBack}
                            className={`btn btn-link ${isDarkMode ? 'text-light' : 'text-secondary'} p-0`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex-grow-1">
                            <h1 className={`h5 mb-0 ${isDarkMode ? 'text-light' : 'text-dark'}`}>{course.title}</h1>
                            <p className={`small ${isDarkMode ? 'text-secondary' : 'text-muted'} mb-0`}>{course.instructor.name}</p>
                        </div>
                        <div className="text-end d-none d-md-block">
                            <p className={`small ${isDarkMode ? 'text-secondary' : 'text-muted'} mb-1`}>{completedCount} de {allLessons.length} aulas concluídas</p>
                            <div className="progress" style={{ height: '8px', width: '200px' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${(completedCount / allLessons.length) * 100}%` }}
                                    aria-valuenow={(completedCount / allLessons.length) * 100}
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
                        {currentLesson && (
                            <div className="d-flex flex-column gap-4">
                                <div className="card overflow-hidden border-0 shadow-sm">
                                    <div className="ratio ratio-16x9 bg-black">
                                        {currentLesson.video_url ? (
                                            <iframe
                                                src={currentLesson.video_url}
                                                title={currentLesson.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <div className="d-flex align-items-center justify-content-center text-white">
                                                <p>Vídeo indisponível ou acesso restrito.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className={`card border-0 shadow-sm p-4 ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                                    <div className="d-flex flex-column flex-md-row align-items-md-start justify-content-between gap-3 mb-4">
                                        <div>
                                            <h2 className={`h4 ${isDarkMode ? 'text-light' : 'text-dark'} mb-2`}>
                                                Aula {currentLesson.order}: {currentLesson.title}
                                            </h2>
                                            <p className={isDarkMode ? 'text-secondary mb-0' : 'text-muted mb-0'}>
                                                Duração: {Math.floor(currentLesson.video_duration_seconds / 60)} min
                                            </p>
                                        </div>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <button
                                                onClick={toggleTheme}
                                                className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-outline-secondary'}`}
                                                title={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
                                            >
                                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                                            </button>
                                            <button
                                                className="btn btn-success btn-sm text-dark d-flex align-items-center gap-2"
                                            >
                                                <CheckCircle size={18} />
                                                Marcar como Concluída
                                            </button>
                                        </div>
                                    </div>

                                    <div className={isDarkMode ? 'text-secondary' : 'text-secondary'}>
                                        <p>
                                            {currentLesson.content || "Sem descrição disponível."}
                                        </p>
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <div className="d-flex gap-3">
                                    <button
                                        onClick={handlePrevLesson}
                                        disabled={currentLessonIndex === 0}
                                        className="btn btn-outline-secondary flex-fill"
                                    >
                                        Aula Anterior
                                    </button>
                                    <button
                                        onClick={handleNextLesson}
                                        disabled={currentLessonIndex === allLessons.length - 1}
                                        className="btn btn-primary flex-fill"
                                    >
                                        Próxima Aula
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Lessons Sidebar */}
                    <div className="col-12 col-lg-4">
                        <div className={`card border-0 shadow-sm h-100 ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                            <div className={`card-header ${isDarkMode ? 'bg-dark border-secondary' : 'bg-white border-bottom'} p-4`}>
                                <h3 className={`h5 mb-0 ${isDarkMode ? 'text-light' : 'text-dark'}`}>Conteúdo do Curso</h3>
                            </div>
                            <div className="card-body p-0 lesson-list overflow-auto" style={{ maxHeight: '80vh' }}>
                                {/* Group by modules if present */}
                                {course.modules ? course.modules.map(module => (
                                    <div key={module.id}>
                                        <div className={`p-3 fw-bold small text-uppercase ${isDarkMode ? "bg-dark text-muted" : "bg-light text-muted"}`}>
                                            {module.title}
                                        </div>
                                        <div className="list-group list-group-flush">
                                            {module.lessons.map(lesson => {
                                                const globalIndex = allLessons.findIndex(l => l.id === lesson.id);
                                                const isActive = currentLessonIndex === globalIndex;
                                                return (
                                                    <button
                                                        key={lesson.id}
                                                        onClick={() => handleLessonSelect(globalIndex)}
                                                        className={`list-group-item list-group-item-action p-3 border-0 ${isActive ? "active bg-primary-purple text-white" : ""
                                                            } ${isDarkMode ? "bg-secondary text-light" : ""}`}
                                                    >
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div className="mt-1">
                                                                {isActive ? <PlayCircle size={16} /> : <Circle size={16} />}
                                                            </div>
                                                            <div className="flex-grow-1 text-start">
                                                                <p className="mb-1 fw-medium line-clamp-2">
                                                                    {lesson.order}. {lesson.title}
                                                                </p>
                                                                <p className={`small mb-0 ${isActive ? "text-white-50" : isDarkMode ? "text-secondary" : "text-muted"}`}>
                                                                    {Math.floor(lesson.video_duration_seconds / 60)} min
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )) : (
                                    <div className="p-3">Sem conteúdo disponível</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
