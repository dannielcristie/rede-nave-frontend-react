import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ArrowLeft, CheckCircle, Circle, Lock, PlayCircle } from "lucide-react";

interface CoursePlayerProps {
  courseId: number;
  onBack: () => void;
}

export function CoursePlayer({ courseId, onBack }: CoursePlayerProps) {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-gray-900">{course.title}</h1>
              <p className="text-gray-600">{course.instructor}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">{completedCount} de {course.lessons.length} aulas concluídas</p>
              <Progress value={(completedCount / course.lessons.length) * 100} className="h-2 w-48 mt-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Video Player */}
        <div className="flex-1 p-6">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black relative">
                <iframe
                  src={course.lessons[currentLesson].videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-gray-900 mb-2">
                    Aula {currentLesson + 1}: {course.lessons[currentLesson].title}
                  </h2>
                  <p className="text-gray-600">Duração: {course.lessons[currentLesson].duration}</p>
                </div>
                {!course.lessons[currentLesson].completed && (
                  <Button
                    onClick={handleCompleteLesson}
                    className="bg-[#9acd32] hover:bg-[#8ab82a] text-gray-900"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Marcar como Concluída
                  </Button>
                )}
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Nesta aula você aprenderá conceitos essenciais sobre {course.lessons[currentLesson].title.toLowerCase()}. 
                  Assista com atenção e faça anotações dos pontos principais.
                </p>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                disabled={currentLesson === 0}
                className="flex-1"
              >
                Aula Anterior
              </Button>
              <Button
                onClick={() => setCurrentLesson(Math.min(course.lessons.length - 1, currentLesson + 1))}
                disabled={currentLesson === course.lessons.length - 1}
                className="flex-1 bg-[#6a2e99] hover:bg-[#8e44ad]"
              >
                Próxima Aula
              </Button>
            </div>
          </div>
        </div>

        {/* Lessons Sidebar */}
        <div className="w-96 border-l bg-white p-6">
          <h3 className="text-gray-900 mb-4">Conteúdo do Curso</h3>
          <div className="space-y-2">
            {course.lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => !lesson.locked && setCurrentLesson(index)}
                disabled={lesson.locked}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  currentLesson === index
                    ? "bg-[#6a2e99] text-white"
                    : lesson.locked
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "hover:bg-purple-50 text-gray-700"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {lesson.locked ? (
                      <Lock className="h-4 w-4" />
                    ) : lesson.completed ? (
                      <CheckCircle className={`h-4 w-4 ${currentLesson === index ? "text-white" : "text-green-600"}`} />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`line-clamp-2 mb-1 ${currentLesson === index ? "text-white" : ""}`}>
                      {index + 1}. {lesson.title}
                    </p>
                    <p className={`text-xs ${currentLesson === index ? "text-purple-200" : "text-gray-500"}`}>
                      {lesson.duration}
                    </p>
                  </div>
                  {currentLesson === index && <PlayCircle className="h-5 w-5 flex-shrink-0" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
