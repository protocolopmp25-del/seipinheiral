import { Landmark } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="mb-4">
            O que é o <span className="text-[#1E88E5]">SEI</span>?
          </h2>
          <div className="w-24 h-1 bg-[#1E88E5] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-justify">
              O <strong>SEI – Sistema Eletrônico de Informações</strong> é a oficial plataforma do município de Pinheiral para produção e gestão de documentos e processos administrativo eletrônicos.
            </p>
            
            <p className="text-gray-700 text-justify">
              Desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF-4) no âmbito do Projeto Processo Eletrônico Nacional (PEN) e cedido gratuitamente para instituições públicas, o SEI faz parte de uma iniciativa para digitalizar e padronizar os processos administrativos em todo o país, promovendo maior integração entre os órgãos públicos e reduzindo a burocracia.
            </p>

           
          </div>

          {/* Right Column - Feature Card */}
          <div className="flex items-start justify-center md:justify-start">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] p-8 rounded-2xl shadow-lg max-w-md w-full">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-6 rounded-full shadow-md">
                  <Landmark className="w-16 h-16 text-[#1E88E5]" />
                </div>
              </div>
              
              <h3 className="text-center text-gray-900 mb-3">
                Modernização da Gestão Municipal
              </h3>
              
              <p className="text-center text-gray-700 mb-6">
                Processos eletrônicos digitais para uma cidade mais sustentável e eficiente
              </p>
              
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
