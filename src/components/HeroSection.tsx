import { User, Lock, BookOpen, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/02b65402252a5e0738a4b5e9512434fc6ddf5e0b.png";

export function HeroSection() {
  return (
    <section className="bg-[#3949AB] text-white py-16 px-6 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Logo Section */}
          <div className="flex-shrink-0" style={{ marginRight: '90px' }}>
            <div className="w-48 h-48 md:w-56 md:h-56">
              <img 
                src={logoImage} 
                alt="Prefeitura Pinheiral" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4" style={{ fontSize: '56px', fontWeight: 900, lineHeight: '62px' }}>
              Sistema Eletrônico de Informações - <span className="text-[#77B01B]">SEI</span>
            </h1>
            
            
            <div className="mb-6">
              <div className="inline-block border-b-4 border-[#77B01B] pb-1">
                <p className="text-[#77B01B] uppercase tracking-wide" style={{ fontSize: '32px', fontWeight: 600, lineHeight: '51px' }}>
                  Prefeitura Municipal de Pinheiral
                </p>
              </div>
            </div>
            
            <p className="mb-8 text-white/90 max-w-2xl mx-auto md:mx-0" style={{ fontSize: '20px', fontWeight: 400, lineHeight: '34px' }}>
              Modernizando a gestão pública com eficiência, transparência e sustentabilidade. Conheça o sistema que veio para transformar os processos administrativos da nossa cidade!
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              
              <Button className="bg-[#43A047] hover:bg-[#388E3C] text-white gap-2"
               onClick={() => {
                      window.open("https://medioparaiba.sei.rj.gov.br/sei", '_blank', 'noopener,noreferrer');
               }}
              >
                <Lock className="w-4 h-4" />
                Acessar SEI
              </Button>
              
              <Button className="bg-white hover:bg-gray-100 text-[#3949AB] gap-2"
              onClick={() => {
                      window.open("https://medioparaiba.sei.rj.gov.br/sei/consultaprocessual", '_blank', 'noopener,noreferrer');
               }}
              >
                <BookOpen className="w-4 h-4" />
                Pesquisa Pública
              </Button>
              
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}