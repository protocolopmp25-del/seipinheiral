import { Briefcase, Clock, FileText, Lock, Globe, CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Modernização da Gestão Pública",
      description: "Transformação digital dos processos administrativos com padrões modernos de gestão"
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description: "Redução significativa no tempo de tramitação de processos e documentos"
    },
    {
      icon: FileText,
      title: "Economia e Sustentabilidade",
      description: "Eliminação do uso de papel e redução de custos operacionais"
    },
    {
      icon: Lock,
      title: "Segurança da Informação",
      description: "Controle total sobre acessos, histórico e segurança dos dados"
    },
    {
      icon: Globe,
      title: "Acesso Remoto",
      description: "Trabalhe de qualquer lugar com acesso à internet"
    },
    {
      icon: CheckCircle,
      title: "Transparência e Controle",
      description: "Maior transparência e controle sobre os processos administrativos"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="mb-4">
            Benefícios e <span className="text-[#1E88E5]">Vantagens</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E88E5] mx-auto mb-8"></div>
        </div>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          O SEI oferece inúmeras vantagens para a administração pública e para os cidadãos de Pinheiral
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1E88E5] p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-center text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-center text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
