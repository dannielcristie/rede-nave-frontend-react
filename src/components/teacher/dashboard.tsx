import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Users, BookOpen, TrendingUp, Award, Eye } from "lucide-react";

interface TeacherDashboardProps {
  onNavigate: (page: string) => void;
}

export function TeacherDashboard({ onNavigate }: TeacherDashboardProps) {
  const classes = [
    {
      id: 1,
      name: "Gestão Financeira - Turma A",
      students: 45,
      progress: 65,
      activeStudents: 38
    },
    {
      id: 2,
      name: "Marketing Digital - Turma B",
      students: 52,
      progress: 42,
      activeStudents: 48
    }
  ];

  const recentActivity = [
    { student: "Maria Silva", action: "Completou o curso", course: "Gestão Financeira", time: "2h atrás" },
    { student: "Ana Costa", action: "Enviou atividade", course: "Marketing Digital", time: "5h atrás" },
    { student: "Juliana Santos", action: "Iniciou módulo 3", course: "Gestão Financeira", time: "1 dia atrás" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Painel da Professora</h1>
        <p className="text-gray-600">Acompanhe o progresso das suas turmas</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-[#6a2e99] h-12 w-12 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Total de Alunas</p>
              <p className="text-gray-900">97</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Alunas Ativas</p>
              <p className="text-gray-900">86</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Turmas Ativas</p>
              <p className="text-gray-900">2</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Certificadas</p>
              <p className="text-gray-900">34</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Classes */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Minhas Turmas</h2>
          <Button
            variant="ghost"
            onClick={() => onNavigate("classes")}
            className="text-[#6a2e99] hover:text-[#8e44ad]"
          >
            Ver todas
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((cls) => (
            <Card key={cls.id} className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-2">{cls.name}</h3>
                  <div className="flex gap-4 text-gray-600">
                    <span>{cls.students} alunas</span>
                    <span>•</span>
                    <span>{cls.activeStudents} ativas</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Progresso Médio</span>
                    <span>{cls.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6a2e99] transition-all"
                      style={{ width: `${cls.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#6a2e99] hover:bg-[#8e44ad]"
                  onClick={() => onNavigate("classes")}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-gray-900 mb-4">Atividade Recente</h2>
        <Card>
          <div className="divide-y">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">
                      <strong>{activity.student}</strong> {activity.action}
                    </p>
                    <p className="text-gray-600">{activity.course}</p>
                  </div>
                  <p className="text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
