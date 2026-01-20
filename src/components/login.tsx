import { useState } from "react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { ForgotPasswordModal } from "./forgot-password-modal";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    // Login States
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Register States
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerCpf, setRegisterCpf] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await login(loginEmail, loginPassword);
            navigate('/dashboard');
        } catch (err: unknown) {
            console.error(err);
            if (err && typeof err === 'object' && 'response' in err) {
                const axiosError = err as { response: { data: { error: string } } };
                setError(axiosError.response?.data?.error || 'Falha no login. Verifique suas credenciais.');
            } else {
                setError('Falha no login. Verifique suas credenciais.');
            }
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (registerPassword !== registerConfirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        try {
            await register({
                name: registerName,
                email: registerEmail,
                password: registerPassword,
                cpf: registerCpf,
                role: "student" // Default role for self-registration
            });
            navigate('/dashboard');
        } catch (err: unknown) {
            console.error(err);
            if (err && typeof err === 'object' && 'response' in err) {
                const axiosError = err as { response: { data: { error: string } } };
                setError(axiosError.response?.data?.error || 'Falha no cadastro. Tente novamente.');
            } else {
                setError('Falha no cadastro. Tente novamente.');
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Background Image */}
                <div className="position-fixed top-0 start-0 end-0 bottom-0" style={{ zIndex: 0 }}>
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1646295404846-658322e343e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzMzk0MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Background"
                        className="w-100 h-100 img-cover"
                    />
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 gradient-overlay-purple"></div>
                </div>

                <div className="position-relative d-flex flex-column p-3 p-md-4" style={{ zIndex: 10, flex: '1', paddingTop: '2rem' }}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="btn btn-light d-flex align-items-center gap-2 shadow-sm"
                        style={{ zIndex: 20, width: 'fit-content', marginBottom: '2rem' }}
                    >
                        <ArrowLeft size={20} className="text-primary-purple" />
                        <span className="d-none d-sm-inline text-primary-purple fw-medium">Voltar para Início</span>
                    </button>

                    {/* Content */}
                    <div className="w-100 mx-auto" style={{ maxWidth: '450px' }}>
                        <div className="card shadow-lg">
                            <div className="card-body p-4 p-md-5">
                                {/* Tabs */}
                                <ul className="nav nav-tabs mb-4" role="tablist">
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button
                                            className={`nav-link w-100 ${activeTab === 'login' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('login')}
                                            type="button"
                                        >
                                            Entrar
                                        </button>
                                    </li>
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button
                                            className={`nav-link w-100 ${activeTab === 'register' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('register')}
                                            type="button"
                                        >
                                            Cadastrar
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {/* Login Tab */}
                                    <div className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}>
                                        <div className="text-center mb-4">
                                            <h2 className="h4 mb-2">Bem-vinda de volta!</h2>
                                            <p className="text-muted">Entre para acessar sua conta</p>
                                        </div>

                                        {error && (
                                            <div className="alert alert-danger" role="alert">
                                                {error}
                                            </div>
                                        )}

                                        <form onSubmit={handleLogin}>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">E-mail</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="seu@email.com"
                                                    value={loginEmail}
                                                    onChange={(e) => setLoginEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Senha</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        id="password"
                                                        type={showLoginPassword ? "text" : "password"}
                                                        className="form-control"
                                                        placeholder="••••••••"
                                                        value={loginPassword}
                                                        onChange={(e) => setLoginPassword(e.target.value)}
                                                        style={{ paddingRight: '40px' }}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        style={{
                                                            position: 'absolute',
                                                            right: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#6c757d',
                                                            cursor: 'pointer',
                                                            padding: '0',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                                    >
                                                        {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="text-end mb-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setShowForgotPassword(true)}
                                                    className="btn btn-link p-0 text-decoration-none text-primary-purple"
                                                >
                                                    Esqueci minha senha
                                                </button>
                                            </div>

                                            <button type="submit" className="btn btn-primary w-100 mb-3">
                                                Entrar
                                            </button>
                                        </form>
                                    </div>

                                    {/* Register Tab */}
                                    <div className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}>
                                        <div className="text-center mb-4">
                                            <h2 className="h4 mb-2">Criar nova conta</h2>
                                            <p className="text-muted">Junte-se à Rede Nave</p>
                                        </div>

                                        <form onSubmit={handleRegister}>
                                            <div className="mb-3">
                                                <label htmlFor="register-name" className="form-label">Nome Completo</label>
                                                <input
                                                    id="register-name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Seu nome"
                                                    value={registerName}
                                                    onChange={(e) => setRegisterName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="register-email" className="form-label">E-mail</label>
                                                <input
                                                    id="register-email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="seu@email.com"
                                                    value={registerEmail}
                                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="register-cpf" className="form-label">CPF</label>
                                                <input
                                                    id="register-cpf"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="000.000.000-00"
                                                    value={registerCpf}
                                                    onChange={(e) => setRegisterCpf(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="register-password" className="form-label">Senha</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        id="register-password"
                                                        type={showRegisterPassword ? "text" : "password"}
                                                        className="form-control"
                                                        placeholder="••••••••"
                                                        style={{ paddingRight: '40px' }}
                                                        value={registerPassword}
                                                        onChange={(e) => setRegisterPassword(e.target.value)}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        style={{
                                                            position: 'absolute',
                                                            right: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#6c757d',
                                                            cursor: 'pointer',
                                                            padding: '0',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                                    >
                                                        {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="register-confirm-password" className="form-label">Confirmar Senha</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        id="register-confirm-password"
                                                        type={showRegisterPassword ? "text" : "password"}
                                                        className="form-control"
                                                        placeholder="••••••••"
                                                        style={{ paddingRight: '40px' }}
                                                        value={registerConfirmPassword}
                                                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        style={{
                                                            position: 'absolute',
                                                            right: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#6c757d',
                                                            cursor: 'pointer',
                                                            padding: '0',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                                    >
                                                        {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn w-100 mb-3" style={{ backgroundColor: '#8E44AD', color: 'white', border: 'none' }}>
                                                Cadastrar
                                            </button>

                                            <div className="text-center mt-4 py-2">
                                                <p className="text-muted small mb-0">
                                                    Já tem uma conta?{" "}
                                                    <button
                                                        type="button"
                                                        className="btn btn-link p-0 text-decoration-none text-primary-purple fw-bold"
                                                        onClick={() => setActiveTab('login')}
                                                    >
                                                        Entrar
                                                    </button>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ForgotPasswordModal
                open={showForgotPassword}
                onClose={() => setShowForgotPassword(false)}
            />

            <Footer />
        </div>
    );
}
