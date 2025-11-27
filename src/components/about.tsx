import { BookOpen, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Trilhas Personalizadas",
      description: "Percursos formativos adaptados para cada turma com gestão financeira, marketing digital e mais"
    },
    {
      icon: Users,
      title: "Acompanhamento Individual",
      description: "Monitore seu progresso e receba suporte técnico durante toda a jornada de aprendizado"
    },
    {
      icon: Award,
      title: "Certificação Automática",
      description: "Certificados reconhecidos ao concluir cada trilha ou curso da formação"
    },
    {
      icon: Clock,
      title: "Acesso Estendido",
      description: "Todo conteúdo disponível por 90 dias após conclusão para revisão e aplicação prática"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758685848174-e061c6486651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGNsYXNzcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjMwNDM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block bg-[#6a2e99] text-white rounded-2xl px-8 py-4 shadow-xl mb-4">
                <p className="text-white">Emancipação Feminina</p>
                <p className="text-purple-100">através da educação</p>
              </div>
              <h2 className="text-gray-900">
                Natureza, Arte, Vida e Emancipação
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A Rede Nave capacita mulheres empreendedoras através de uma plataforma integrada 
                de aprendizado. Oferecemos formação completa para formalizar, profissionalizar e 
                expandir negócios de artesãs, produtoras locais e empreendedoras iniciantes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="bg-purple-100 text-[#6a2e99] h-12 w-12 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}