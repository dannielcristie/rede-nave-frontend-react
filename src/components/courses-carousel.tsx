import { Star, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CoursesCarousel() {
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

    return (
        <section id="cursos" className="py-5 bg-white content-with-navbar">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="h2 mb-3">Trilhas de Capacitação</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Cursos gratuitos para empreendedoras desenvolverem seus negócios
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
                        {courses.map((course, index) => (
                            <SwiperSlide key={index}>
                                <div className="card h-100 card-hover">
                                    <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                                        <ImageWithFallback
                                            src={course.image}
                                            alt={course.title}
                                            className="img-cover"
                                        />
                                        <span className="badge bg-primary position-absolute top-0 start-0 m-3">
                                            {course.category}
                                        </span>
                                    </div>

                                    <div className="card-body">
                                        <h3 className="h6 mb-2">{course.title}</h3>
                                        <span className="badge bg-light text-dark border mb-3">{course.level}</span>

                                        <div className="d-flex align-items-center gap-3 text-muted small">
                                            <div className="d-flex align-items-center gap-1">
                                                <Star size={16} fill="#ffc107" color="#ffc107" />
                                                <span>{course.rating}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <Users size={16} />
                                                <span>{course.students}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <Clock size={16} />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                                        <span className="text-primary-purple">{course.price}</span>
                                        <button className="btn btn-primary btn-sm">
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
