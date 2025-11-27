import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { BookOpen, Calendar, Award, TrendingUp, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface StudentDashboardProps {
  onNavigate: (page: string, data?: any) => void;
}

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const enrolledCourses = [
    {
      id: 1,
      title: "Gestão Financeira para Empreendedoras",
      progress: 60,
      totalLessons: 12,
      completedLessons: 7,
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Marketing Digital para Artesãs",
      progress: 30,
      totalLessons: 16,
      completedLessons: 5,
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Liderança Comunitária e Empoderamento",
      progress: 85,
      totalLessons: 14,
      completedLessons: 12,
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const upcomingEvents = [
    { title: "Oficina: Precificação de Produtos", date: "15 Dez 2025", time: "14h" },
    { title: "Live: Redes Sociais para Artesãs", date: "18 Dez 2025", time: "19h" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Bem-vinda de volta, Maria!</h1>
        <p className="text-gray-600">Continue sua jornada de aprendizado</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-[#6a2e99] h-12 w-12 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Cursos Ativos</p>
              <p className="text-gray-900">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Certificados</p>
              <p className="text-gray-900">2</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Eventos</p>
              <p className="text-gray-900">2</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Horas de Estudo</p>
              <p className="text-gray-900">24h</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Continue Learning */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Continue Aprendendo</h2>
          <Button
            variant="ghost"
            onClick={() => onNavigate("my-courses")}
            className="text-[#6a2e99] hover:text-[#8e44ad]"
          >
            Ver todos
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Button
                    size="sm"
                    onClick={() => onNavigate("course-player", { courseId: course.id })}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Continuar
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-gray-900">{course.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>{course.completedLessons} de {course.totalLessons} aulas</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Próximos Eventos</h2>
          <Button
            variant="ghost"
            onClick={() => onNavigate("events")}
            className="text-[#6a2e99] hover:text-[#8e44ad]"
          >
            Ver todos
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="p-4 flex items-center gap-4">
              <div className="bg-purple-100 text-[#6a2e99] h-14 w-14 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs">Dez</span>
                <span>{event.date.split(" ")[0]}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900">{event.title}</h4>
                <p className="text-gray-600">{event.date} • {event.time}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
