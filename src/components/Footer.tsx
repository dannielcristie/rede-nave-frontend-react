import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Rede Nave</h3>
            <p className="text-gray-400">
              Natureza, Arte, Vida e Emancipação Feminina. Transformando vidas através da capacitação empreendedora.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Fala com a gente!</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#9acd32] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">55 98 98607-8292</p>
                  <p className="text-gray-400">98 98805-3921</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[#9acd32] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">nave.sitevendas@gmail.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#9acd32] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  R. Nazareth, 8 - Centro<br />
                  São Luís - MA, 65010-410
                </p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#6a2e99] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#6a2e99] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#6a2e99] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#6a2e99] h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rede Nave. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}