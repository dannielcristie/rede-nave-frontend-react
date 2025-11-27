import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Users, BookOpen, Calendar, TrendingUp, Award, UserCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const enrollmentData = [
    { month: "Jul", students: 45 },
    { month: "Ago", students: 62 },
    { month: "Set", students: 78 },
    { month: "Out", students: 95 },
    { month: "Nov", students: 120 },
    { month: "Dez", students: 145 }
  ];

  const courseData = [
    { name: "Gestão Financeira", students: 145, completion: 68 },
    { name: "Marketing Digital", students: 132, completion: 55 },
    { name: "Liderança", students: 89, completion: 72 },
    { name: "Vendas", students: 156, completion: 61 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Painel Administrativo</h1>
        <p className="text-gray-600">Visão geral da plataforma Rede Nave</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-[#6a2e99] h-12 w-12 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Total de Usuárias</p>
              <p className="text-gray-900">1.247</p>
              <p className="text-green-600 text-xs">+12% este mês</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Cursos Ativos</p>
              <p className="text-gray-900">12</p>
              <p className="text-green-600 text-xs">+2 novos</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Certificados Emitidos</p>
              <p className="text-gray-900">456</p>
              <p className="text-green-600 text-xs">+34 esta semana</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-600 h-12 w-12 rounded-lg flex items-center justify-center">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Taxa de Conclusão</p>
              <p className="text-gray-900">64%</p>
              <p className="text-green-600 text-xs">+5% vs mês anterior</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Crescimento de Matrículas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="students" stroke="#6a2e99" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Cursos Mais Populares</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#6a2e99" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Button
            onClick={() => onNavigate("users")}
            className="h-auto p-6 flex flex-col items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#6a2e99] text-gray-900 hover:bg-purple-50"
          >
            <Users className="h-8 w-8 text-[#6a2e99]" />
            <span>Gerenciar Usuários</span>
          </Button>

          <Button
            onClick={() => onNavigate("courses")}
            className="h-auto p-6 flex flex-col items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#6a2e99] text-gray-900 hover:bg-purple-50"
          >
            <BookOpen className="h-8 w-8 text-[#6a2e99]" />
            <span>Gerenciar Cursos</span>
          </Button>

          <Button
            onClick={() => onNavigate("events")}
            className="h-auto p-6 flex flex-col items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#6a2e99] text-gray-900 hover:bg-purple-50"
          >
            <Calendar className="h-8 w-8 text-[#6a2e99]" />
            <span>Gerenciar Eventos</span>
          </Button>
        </div>
      </div>

      {/* Performance by Course */}
      <div>
        <h2 className="text-gray-900 mb-4">Performance por Curso</h2>
        <Card>
          <div className="divide-y">
            {courseData.map((course, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-900">{course.name}</h4>
                  <span className="text-gray-600">{course.students} alunas</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#9acd32] transition-all"
                        style={{ width: `${course.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-gray-600 w-12 text-right">{course.completion}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
