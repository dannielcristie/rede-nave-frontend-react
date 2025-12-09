import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-5">
                <div className="row g-4 mb-4">
                    {/* Company */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h3 className="h5 text-white mb-3">Rede Nave</h3>
                        <p className="text-white-50">
                            Natureza, Arte, Vida e Emancipação Feminina. Transformando vidas através da capacitação empreendedora.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4 className="h6 text-white mb-3">Fala com a gente!</h4>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <div className="d-flex align-items-start gap-2">
                                    <Phone size={20} className="text-accent-green flex-shrink-0 mt-1" />
                                    <div className="text-white-50">
                                        <p className="mb-0">55 98 98607-8292</p>
                                        <p className="mb-0">98 98805-3921</p>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="d-flex align-items-start gap-2">
                                    <Mail size={20} className="text-accent-green flex-shrink-0 mt-1" />
                                    <p className="text-white-50 mb-0">nave.sitevendas@gmail.com</p>
                                </div>
                            </li>
                            <li className="mb-0">
                                <div className="d-flex align-items-start gap-2">
                                    <MapPin size={20} className="text-accent-green flex-shrink-0 mt-1" />
                                    <p className="text-white-50 mb-0">
                                        R. Nazareth, 8 - Centro<br />
                                        São Luís - MA, 65010-410
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="col-12 col-lg-4">
                        <h4 className="h6 text-white mb-3">Siga-nos</h4>
                        <div className="d-flex gap-3">
                            <a
                                href="#"
                                className="btn btn-dark rounded-circle d-flex align-items-center justify-center p-2"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="btn btn-dark rounded-circle d-flex align-items-center justify-center p-2"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="btn btn-dark rounded-circle d-flex align-items-center justify-center p-2"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="btn btn-dark rounded-circle d-flex align-items-center justify-center p-2"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-top border-secondary pt-4 text-center">
                    <p className="text-white-50 mb-0">&copy; {new Date().getFullYear()} Rede Nave. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
