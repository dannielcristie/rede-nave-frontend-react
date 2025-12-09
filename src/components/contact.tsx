import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contato" className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="h2 mb-3">Entre em Contato</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Tem alguma dúvida? Nossa equipe está pronta para ajudar você
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Contact Info */}
                        <div className="row g-4 mb-5">
                            <div className="col-12 col-md-4">
                                <div className="text-center">
                                    <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <h3 className="h6 mb-1">E-mail</h3>
                                        <p className="text-muted mb-0">contato@redenave.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="text-center">
                                    <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <h3 className="h6 mb-1">Telefone</h3>
                                        <p className="text-muted mb-0">(71) 98765-4321</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="text-center">
                                    <div className="icon-badge bg-primary bg-opacity-10 text-primary-purple mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h3 className="h6 mb-1">Endereço</h3>
                                        <p className="text-muted mb-0">
                                            Salvador, BA - Brasil
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-white text-center" style={{ background: 'linear-gradient(to bottom right, var(--primary-purple), var(--accent-purple))' }}>
                            <div className="card-body p-4">
                                <h3 className="h5 text-white mb-3">Horário de Atendimento</h3>
                                <div className="text-white-50 small">
                                    <p className="mb-1">Segunda a Sexta: 9h às 18h</p>
                                    <p className="mb-1">Sábado: 9h às 13h</p>
                                    <p className="mb-0">Domingo: Fechado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
