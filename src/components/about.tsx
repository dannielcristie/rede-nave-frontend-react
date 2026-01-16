import { BookOpen, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function About() {
    const features = [
        {
            icon: BookOpen,
            title: "Trilhas Personalizadas",
            description: "Percursos formativos adaptados para cada turma com gestão financeira, marketing digital e mais"
        },
        {
            icon: Users,
            title: "Acompanhamento Individual",
            description: "Monitore seu progresso e receba suporte técnico durante toda a jornada de aprendizado"
        },
        {
            icon: Award,
            title: "Certificação Automática",
            description: "Certificados reconhecidos ao concluir cada trilha ou curso da formação"
        },
        {
            icon: Clock,
            title: "Acesso Estendido",
            description: "Todo conteúdo disponível por 90 dias após conclusão para revisão e aplicação prática"
        }
    ];

    return (
        <section id="sobre" className="py-5 bg-white position-relative overflow-hidden">
            {/* Background Image */}
            <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ opacity: 0.3 }}>
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758685848174-e061c6486651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGNsYXNzcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjMwNDM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Background"
                    className="w-100 h-100 img-cover"
                />
            </div>

            <div className="container position-relative" style={{ zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Content */}
                        <div className="text-center">
                            <div className="mb-4">
                                <div className="d-inline-block bg-primary-purple text-white rounded-4 px-4 py-3 shadow-lg mb-4">
                                    <p className="mb-1">Emancipação Feminina</p>
                                    <p className="mb-0 text-white-50">através da educação</p>
                                </div>
                                <h2 className="h2 mb-3">
                                    Natureza, Arte, Vida e Emancipação
                                </h2>
                                <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                                    A Rede Nave capacita mulheres empreendedoras através de uma plataforma integrada
                                    de aprendizado. Oferecemos formação completa para formalizar, profissionalizar e
                                    expandir negócios de artesãs, produtoras locais e empreendedoras iniciantes.
                                </p>
                            </div>

                            <div className="row g-4 mt-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="col-12 col-md-6">
                                        <div className="card h-100 shadow backdrop-blur" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                                            <div className="card-body text-center p-4">
                                                <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple mx-auto mb-3">
                                                    <feature.icon size={24} />
                                                </div>
                                                <h3 className="h5 mb-2">{feature.title}</h3>
                                                <p className="text-muted mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
