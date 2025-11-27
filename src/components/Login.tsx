import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ForgotPasswordModal } from "./Fogort-password-model";

interface LoginProps {
  onLogin?: (role: "student" | "teacher" | "admin") => void;
}

export function Login({ onLogin }: LoginProps) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - em produção verificaria credenciais
    onLogin?.("student");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registro
    onLogin?.("student");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646295404846-658322e343e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzMzk0MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6a2e99]/90 to-[#8e44ad]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="p-8 shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <div className="text-center mb-6">
                <h2 className="text-gray-900 mb-2">Bem-vinda de volta!</h2>
                <p className="text-gray-600">Entre para acessar sua conta</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-900">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-gray-900">
                    Senha
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                    required
                  />
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-[#6a2e99] hover:text-[#8e44ad] transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                <Button type="submit" className="w-full bg-[#6a2e99] hover:bg-[#8e44ad]">
                  Entrar
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <div className="text-center mb-6">
                <h2 className="text-gray-900 mb-2">Criar nova conta</h2>
                <p className="text-gray-600">Junte-se à Rede Nave</p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="register-name" className="text-gray-900">
                    Nome Completo
                  </label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-email" className="text-gray-900">
                    E-mail
                  </label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-password" className="text-gray-900">
                    Senha
                  </label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#9acd32] hover:bg-[#8ab82a] text-gray-900">
                  Cadastrar
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <ForgotPasswordModal
        open={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />
    </div>
  );
}