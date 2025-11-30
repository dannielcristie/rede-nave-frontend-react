import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const courses = [
    {
      title: "Gestão Financeira para Empreendedoras",
      category: "Gestão",
      level: "Iniciante",
      rating: 4.9,
      students: "320",
      duration: "12h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Marketing Digital para Artesãs",
      category: "Marketing",
      level: "Intermediário",
      rating: 4.8,
      students: "285",
      duration: "16h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Técnicas de Vendas e Negociação",
      category: "Vendas",
      level: "Iniciante",
      rating: 4.7,
      students: "402",
      duration: "10h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Liderança Comunitária e Empoderamento",
      category: "Liderança",
      level: "Intermediário",
      rating: 5.0,
      students: "198",
      duration: "14h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Formalização de Negócios",
      category: "Jurídico",
      level: "Iniciante",
      rating: 4.8,
      students: "356",
      duration: "8h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Produção Sustentável e Artesanato",
      category: "Produção",
      level: "Intermediário",
      rating: 4.9,
      students: "267",
      duration: "18h",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAyNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, courses.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-gray-900">Trilhas de Capacitação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cursos gratuitos para empreendedoras desenvolverem seus negócios
          </p>
        </div>

        <div className="relative px-4 sm:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#6a2e99]" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#6a2e99]" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-0 lg:gap-6"
              style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / cardsPerView + 2)}%)` }}
            >
              {courses.map((course, index) => (
                <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2 lg:px-0">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full max-w-2xl lg:max-w-none mx-auto">
                    <CardHeader className="p-0">
                      <div className="relative h-64 lg:h-48 overflow-hidden">
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
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#6a2e99]" : "bg-gray-300"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}