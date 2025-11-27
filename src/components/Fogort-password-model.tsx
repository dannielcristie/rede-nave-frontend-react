import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, ArrowLeft } from "lucide-react";

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
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === "email" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center">Recuperar Senha</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-center">
                <div className="bg-purple-100 text-[#6a2e99] h-16 w-16 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <p className="text-center text-gray-600">
                Digite seu e-mail e enviaremos um link para redefinir sua senha
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="recovery-email" className="text-gray-900">
                    E-mail
                  </label>
                  <Input
                    id="recovery-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#6a2e99] hover:bg-[#8e44ad]"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center">E-mail Enviado!</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4 text-center">
              <div className="flex justify-center">
                <div className="bg-green-100 text-green-600 h-16 w-16 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <p className="text-gray-600">
                Enviamos um link de recuperação para <strong>{email}</strong>
              </p>
              <p className="text-gray-500">
                Verifique sua caixa de entrada e spam
              </p>
              <Button
                onClick={handleClose}
                className="w-full bg-[#6a2e99] hover:bg-[#8e44ad]"
              >
                Voltar para Login
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
