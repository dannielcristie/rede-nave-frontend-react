import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ForgotPasswordModal } from "./Fogort-password-model";
import { Footer } from "./Footer";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onLogin?: (role: "student" | "teacher" | "admin") => void;
}

export function Login({ onLogin }: LoginProps) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

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
    <>
      <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8">
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
          <Card className="p-4 sm:p-6 md:p-8 shadow-2xl">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
                <TabsTrigger value="login" className="text-sm sm:text-base">Entrar</TabsTrigger>
                <TabsTrigger value="register" className="text-sm sm:text-base">Cadastrar</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2">Bem-vinda de volta!</h2>
                  <p className="text-sm sm:text-base text-gray-600">Entre para acessar sua conta</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm sm:text-base text-gray-900">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm sm:text-base text-gray-900">
                      Senha
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full text-sm sm:text-base pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-sm sm:text-base text-[#6a2e99] hover:text-[#8e44ad] transition-colors"
                    >
                      Esqueci minha senha
                    </button>
                  </div>

                  <Button type="submit" className="w-full bg-[#6a2e99] hover:bg-[#8e44ad] text-sm sm:text-base py-2 sm:py-3">
                    Entrar
                  </Button>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2">Criar nova conta</h2>
                  <p className="text-sm sm:text-base text-gray-600">Junte-se à Rede Nave</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="register-name" className="text-sm sm:text-base text-gray-900">
                      Nome Completo
                    </label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Seu nome"
                      className="w-full text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="register-email" className="text-sm sm:text-base text-gray-900">
                      E-mail
                    </label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="register-password" className="text-sm sm:text-base text-gray-900">
                      Senha
                    </label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full text-sm sm:text-base pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showRegisterPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-[#9acd32] hover:bg-[#8ab82a] text-gray-900 text-sm sm:text-base py-2 sm:py-3">
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
      
      <Footer />
    </>
  );
}