import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function EventsCarousel() {
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

    return (
        <section id="eventos" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="h2 mb-3">Agenda de Eventos</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Feiras, oficinas presenciais e lives para fortalecer sua rede
                    </p>
                </div>

                <div className="px-4 px-md-5">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-5"
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index} style={{ height: 'auto' }}>
                                <div className="card h-100 card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                                        <ImageWithFallback
                                            src={event.image}
                                            alt={event.title}
                                            className="img-cover"
                                        />
                                        <span className="badge position-absolute top-0 start-0 m-3" style={{ backgroundColor: '#6a2e99', color: 'white' }}>
                                            {event.category}
                                        </span>
                                    </div>

                                    <div className="card-body" style={{ flex: 1 }}>
                                        <h3 className="h6 mb-3">{event.title}</h3>

                                        <div className="small text-muted">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <Calendar size={16} />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <Clock size={16} />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <MapPin size={16} />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <Users size={16} />
                                                <span>{event.participants} participantes</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                                        <span className="text-accent-purple">{event.price}</span>
                                        <button className="btn btn-sm" style={{ backgroundColor: '#6a2e99', color: 'white' }}>
                                            Inscrever-se
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
