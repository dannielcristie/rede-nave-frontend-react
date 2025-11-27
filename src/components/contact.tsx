import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-gray-900">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida? Nossa equipe está pronta para ajudar você
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-purple-100 text-[#6a2e99] h-16 w-16 rounded-lg flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <p className="text-gray-900 mb-1">E-mail</p>
                <p className="text-gray-600">contato@eduplataforma.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-purple-100 text-[#6a2e99] h-16 w-16 rounded-lg flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <p className="text-gray-900 mb-1">Telefone</p>
                <p className="text-gray-600">(11) 98765-4321</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-purple-100 text-[#6a2e99] h-16 w-16 rounded-lg flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <div>
                <p className="text-gray-900 mb-1">Endereço</p>
                <p className="text-gray-600">
                  Av. Paulista, 1000<br />
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-[#6a2e99] to-[#8e44ad] text-white text-center">
            <h3 className="text-white mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-purple-100">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}