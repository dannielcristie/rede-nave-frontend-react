import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Mail } from "lucide-react";

interface ForgotPasswordModalProps {
    open: boolean;
    onClose: () => void;
}

export function ForgotPasswordModal({ open, onClose }: ForgotPasswordModalProps) {
    const [step, setStep] = useState<"email" | "sent">("email");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui seria a chamada para API de recuperação
        setStep("sent");
    };

    const handleClose = () => {
        setStep("email");
        setEmail("");
        onClose();
    };

    return (
        <Modal show={open} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center">
                    {step === "email" ? "Recuperar Senha" : "E-mail Enviado!"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {step === "email" ? (
                    <div className="py-2">
                        <div className="d-flex justify-content-center mb-4">
                            <div className="bg-primary-purple bg-opacity-10 text-primary-purple rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px' }}>
                                <Mail size={32} />
                            </div>
                        </div>
                        <p className="text-center text-muted mb-4">
                            Digite seu e-mail e enviaremos um link para redefinir sua senha
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="recovery-email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <div className="d-flex gap-2">
                                <Button variant="outline-secondary" onClick={handleClose} className="flex-fill">
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="primary" className="flex-fill">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </div>
                ) : (
                    <div className="py-2 text-center">
                        <div className="d-flex justify-content-center mb-4">
                            <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px' }}>
                                <Mail size={32} />
                            </div>
                        </div>
                        <p className="text-muted mb-2">
                            Enviamos um link de recuperação para <strong>{email}</strong>
                        </p>
                        <p className="text-muted small mb-4">
                            Verifique sua caixa de entrada e spam
                        </p>
                        <Button onClick={handleClose} variant="primary" className="w-100">
                            Voltar para Login
                        </Button>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}
