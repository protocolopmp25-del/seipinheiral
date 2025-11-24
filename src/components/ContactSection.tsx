import { Mail, Users, MapPin, GraduationCap, ExternalLink, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ContactSection() {
  const committee = [
    {
      name: "Aramís Paes Pena Barcellos",
      role: "Protocolo e Arquivo Geral"
    },
    {
      name: "Bianca Botelho de Souza Borges",
      role: "Procuradoria Geral do Município"
    },
    {
      name: "Débora Almeida de Souza Casemiro",
      role: "Controladoria Geral do Município"
    },
    {
      name: "Genise Carolina Alcides",
      role: "Fundo de Previdência Social do Município de Pinheiral"
    },
    {
      name: "Jordana Gomes Barreira",
      role: "Protocolo e Arquivo Geral"
    },
   {
      name: "Raphaela de Oliveira Pereira",
      role: "Superintendência de Administração"
    }
  ];

  const pontosfocais1 = [
    {
      name: "Aline Barbosa Wermelinger Cabral",
      role: "Governo"
    },
    {
      name: "Ana Paula Feijo Loures",
      role: "Gabinete do Prefeito"
    },
    {
      name: "Carla Mayara Oliveira Ferrini",
      role: "Serviços Públicos"
    },
    {
      name: "Caroline dos Santos Almeida",
      role: "Educação e Inovação"
    },
    {
      name: "Cristine Lopes de Camargo",
      role: "Saúde"
    },
    {
      name: "Denise Nogueira Diniz da Cunha",
      role: "Controladoria Geral do Município"
    }
  ];
  
  const pontosfocais2 = [
    {
      name: "Francinne Aparecida de Freitas Viana Pimentel",
      role: "Ambiente e Sustentabilidade"
    },
    {
      name: "Genise Carolina Alcides",
      role: "Fundo de Previdência de Pinheiral"
    },
    {
      name: "Geraldo do Espirito Santo Martins da Silva",
      role: "Esporte Lazer e Juventude"
    },
    {
      name: "Isabela Morais Freitas",
      role: "Obras, Urbanismo, Hab. e Reg. Fundiária"
    },
    {
      name: "Janaina Elaine de Souza Ramires",
      role: "Finanças"
    },
    {
      name: "Jessica Cristina Cardoso Fernandes",
      role: "Governo"
    },
    {
      name: "Ludmila Martins de Farias Silva",
      role: "Bem-estar Animal e Desenvolvimento Rural"
    }
  ];
  
  const pontosfocais3 = [

    {
      name: "Marcos de Souza Pinto",
      role: "Finanças"
    },
    {
      name: "Maxwel Jorge de Paula Silva",
      role: "Ordem Pública, Defesa Civil e Fiscalização"
    },
    {
      name: "Murillo Sabenca de Oliveira Neves",
      role: "Administração"
    },
    {
      name: "Renata Corredo",
      role: "Planejamento e Gestão Estratégica"
    },
    {
      name: "Rodolfo Amaro da Silveira",
      role: "Saúde"
    },
    {
      name: "Taiane Cristina Fonseca Campos Ribeiro",
      role: "Assistência Social e Direitos Humanos"
    },
    {
      name: "Tamires Meireles Careli de Oliveira",
      role: "Trabalho, Comércio e Desenvolvimento Econômico"
    },
    {
      name: "Vivian Oliveira de Assis Russoni",
      role: "Procuradoria Geral do Município"
    },
    {
      name: "Wanessa de Kassia Pinto da Silva",
      role: "Cultura e Turismo"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="text-white mb-4">
            Contato e <span className="text-[#10B981]">Suporte</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto mb-6"></div>
        </div>

        <p className="text-center text-white/90 mb-12 max-w-3xl mx-auto">
          Nossa equipe está pronta para ajudar
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-6xl mx-auto">
        
          

          {/* Ponto Focal1 Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-[#10B981] p-4 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white mb-4 text-center">
              Pontos Focais
            </h3>
            <div className="space-y-4">
              {pontosfocais1.map((member, index) => (
                <div key={index} className="border-t border-white/20 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-white mb-1">{member.name}</p>
                  <p className="text-[#10B981] text-sm mb-1">{member.role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Ponto Focal2 Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-[#10B981] p-4 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white mb-4 text-center">
              Pontos Focais
            </h3>
            <div className="space-y-4">
              {pontosfocais2.map((member, index) => (
                <div key={index} className="border-t border-white/20 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-white mb-1">{member.name}</p>
                  <p className="text-[#10B981] text-sm mb-1">{member.role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Ponto Focal3 Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-[#10B981] p-4 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white mb-4 text-center">
              Pontos Focais
            </h3>
            <div className="space-y-4">
              {pontosfocais3.map((member, index) => (
                <div key={index} className="border-t border-white/20 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-white mb-1">{member.name}</p>
                  <p className="text-[#10B981] text-sm mb-1">{member.role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Committee Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-[#10B981] p-4 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white mb-4 text-center">
              Comitê Gestor
            </h3>
            <div className="space-y-4">
              {committee.map((member, index) => (
                <div key={index} className="border-t border-white/20 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-white mb-1">{member.name}</p>
                  <p className="text-[#10B981] text-sm mb-1">{member.role}</p>
                </div>
              ))}
            </div>
          </Card>

           
        </div>

        {/* Footer Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center max-w-6xl mx-auto">
         
          <div className="space-y-2 text-white/90">
             <h3 className="text-white mb-6">
                Prefeitura Municipal de Pinheiral
             </h3>
                  <p>
                    <span className="text-white/70">Endereço:</span> Rua Justino Ribeiro, Nº 228, Centro;
                  </p>
                  <p>
                    <span className="text-white/70">Cidade:</span> Pinheiral - RJ
                  </p>
                  <p>
                    <span className="text-white/70">CEP:</span> 27197-080
                  </p>
          </div>
        </Card>
      </div>
    </section>
  );
}