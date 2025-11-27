import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      title: "Oficina: Precificação de Produtos Artesanais",
      category: "Oficina",
      date: "15 Dez 2025",
      time: "14h - 17h",
      location: "Online",
      participants: "150",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Feira de Empreendedoras da Rede Nave",
      category: "Feira",
      date: "20 Dez 2025",
      time: "09h - 17h",
      location: "Salvador, BA",
      participants: "300",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Live: Redes Sociais para Artesãs",
      category: "Live",
      date: "18 Dez 2025",
      time: "19h - 21h",
      location: "Online",
      participants: "200",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Workshop: Storytelling para Negócios",
      category: "Workshop",
      date: "10 Jan 2026",
      time: "2 dias - 09h às 16h",
      location: "Recife, PE",
      participants: "80",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Encontro: Mulheres em Rede",
      category: "Encontro",
      date: "22 Dez 2025",
      time: "15h - 18h",
      location: "Online",
      participants: "120",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYzMDE1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Oficina Presencial: Fotografia de Produtos",
      category: "Oficina",
      date: "25 Jan 2026",
      time: "09h - 13h",
      location: "Fortaleza, CE",
      participants: "60",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYzMDMyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, events.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="eventos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-gray-900">Agenda de Eventos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feiras, oficinas presenciais e lives para fortalecer sua rede
          </p>
        </div>

        <div className="relative px-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-[#8e44ad]" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6 text-[#8e44ad]" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView + 2)}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-1/3 flex-shrink-0">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
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
                  index === currentIndex ? "bg-[#8e44ad]" : "bg-gray-300"
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