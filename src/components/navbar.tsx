import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    const scrollToSection = (id: string) => {
        // If we are not on the landing page, navigate there first
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top-navbar navbar-custom border-bottom pb-3">
            <div className="container-fluid px-3 px-lg-5">
                {/* Logo */}
                <Link className="navbar-brand fw-bold text-primary-purple d-flex align-items-center gap-2" to="/">
                    <img 
                        src="/public/logo.png" 
                        alt="Rede Nave Logo" 
                        style={{ height: '40px', width: 'auto' }}
                    />
                    Rede Nave
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center gap-md-3">
                        {isLoginPage && (
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link btn btn-link text-decoration-none"
                                    style={{ color: '#6c757d' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#6a2e99'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                                >
                                    Início
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("cursos")}
                                className="nav-link btn btn-link text-decoration-none"
                                style={{ color: '#6c757d' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#6a2e99'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                            >
                                Cursos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("eventos")}
                                className="nav-link btn btn-link text-decoration-none"
                                style={{ color: '#6c757d' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#6a2e99'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                            >
                                Eventos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("sobre")}
                                className="nav-link btn btn-link text-decoration-none"
                                style={{ color: '#6c757d' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#6a2e99'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                            >
                                Sobre
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection("contato")}
                                className="nav-link btn btn-link text-decoration-none"
                                style={{ color: '#6c757d' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#6a2e99'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                            >
                                Contato
                            </button>
                        </li>
                        {!isLoginPage && (
                            <li className="nav-item">
                                <Link
                                    to="/login"
                                    className="btn btn-primary mt-2 mt-md-0"
                                >
                                    Entrar
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
