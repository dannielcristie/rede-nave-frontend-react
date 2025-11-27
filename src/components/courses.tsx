import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, Clock, Users, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Courses() {
  const courses = [
    {
      title: "Desenvolvimento Web Full Stack",
      category: "Programação",
      level: "Intermediário",
      rating: 4.8,
      students: "12.5k",
      duration: "40h",
      price: "R$ 197,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Design UX/UI Completo",
      category: "Design",
      level: "Iniciante",
      rating: 4.9,
      students: "8.3k",
      duration: "30h",
      price: "R$ 167,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Marketing Digital Avançado",
      category: "Marketing",
      level: "Avançado",
      rating: 4.7,
      students: "15.2k",
      duration: "35h",
      price: "R$ 187,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Análise de Dados com Python",
      category: "Data Science",
      level: "Intermediário",
      rating: 4.8,
      students: "10.1k",
      duration: "45h",
      price: "R$ 207,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Gestão de Projetos Ágeis",
      category: "Negócios",
      level: "Iniciante",
      rating: 4.6,
      students: "6.8k",
      duration: "25h",
      price: "R$ 147,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Fotografia Profissional",
      category: "Arte",
      level: "Iniciante",
      rating: 4.9,
      students: "9.5k",
      duration: "28h",
      price: "R$ 157,00",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const events = [
    {
      title: "Workshop: Inteligência Artificial na Prática",
      category: "Workshop",
      date: "15 Dez 2025",
      time: "14h - 18h",
      location: "Online",
      participants: "250",
      price: "R$ 97,00",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Conferência de Tecnologia 2025",
      category: "Conferência",
      date: "20 Dez 2025",
      time: "09h - 17h",
      location: "São Paulo, SP",
      participants: "500",
      price: "R$ 297,00",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Webinar: Tendências de Design 2026",
      category: "Webinar",
      date: "18 Dez 2025",
      time: "19h - 21h",
      location: "Online",
      participants: "180",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Bootcamp: DevOps Intensivo",
      category: "Bootcamp",
      date: "10 Jan 2026",
      time: "3 dias - 09h às 18h",
      location: "Rio de Janeiro, RJ",
      participants: "120",
      price: "R$ 597,00",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Meetup: Carreira em Tech",
      category: "Meetup",
      date: "22 Dez 2025",
      time: "18h - 20h",
      location: "Online",
      participants: "90",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Summit: Liderança e Inovação",
      category: "Summit",
      date: "25 Jan 2026",
      time: "09h - 16h",
      location: "Belo Horizonte, MG",
      participants: "300",
      price: "R$ 397,00",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="cursos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-gray-900">Cursos e Eventos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de cursos e participe de eventos exclusivos
          </p>
        </div>

        <Tabs defaultValue="cursos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="cursos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#6a2e99]">
                        {course.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-gray-900 mb-2">{course.title}</h3>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <span className="text-[#6a2e99]">{course.price}</span>
                    <Button className="bg-[#6a2e99] hover:bg-[#8e44ad]">
                      Inscrever-se
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="eventos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#8e44ad]">
                        {event.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-gray-900 mb-2">{event.title}</h3>
                    </div>

                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.participants} participantes</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <span className="text-[#8e44ad]">{event.price}</span>
                    <Button className="bg-[#8e44ad] hover:bg-[#6a2e99]">
                      Inscrever-se
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}