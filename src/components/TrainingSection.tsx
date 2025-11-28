import { Play, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function TrainingSection() {
  const introVideos = {
    title: "Vídeos tutoriais no YouTube",
    subtitle: "Confira de forma objetiva alguns dos recursos mais utilizados",
    courses: [
      {
        title: "Curso SEI 4.0 - Vídeo Aulas",
        provider: "assembleiasc",
        description: "Playlist com vídeos passo a passo sobre o uso do SEI, ideal para iniciantes e usuários avançados.",
        duration: "Vários vídeos",
        buttonText: "Playlist",
        link: "https://drive.google.com/drive/folders/1MIc8G-99FB1s3RNIBu2CNr2u7M08BOxO",
        hasPlaylist: true
      },
      {
        title: "Curso Completo SEI – Sistema Eletrônico de Informações (Treinamento e Gestão Pública)",
        provider: "Treinamento e Gestão Pública",
        description: "Vídeo completo explicando o que é o SEI e como utilizá-lo desde o início",
        duration: "Vários vídeos",
        link: "https://www.youtube.com/watch?v=lgAx16KOf2A&list=PLwthu1ew7Z5ABbaIt1zBUEwjHq71Ou8bA",
        buttonText: "Playlist"
      },
      {
        title: "Como pesquisar um processo?",
        provider: "Arquivo Central - SIARQ UFRJ",
        description: "Vídeo explicando como pesquisar a um processo",
        duration: "4 min",
        link: "https://drive.google.com/drive/folders/1bbPq7t_d7VKnNx6AQbjL4LlWRohp_FJr",
        buttonText: "Assistir"
      },
      {
        title: "Como consultar o andamento de um processo?",
        provider: "assembleiasc",
        description: "Vídeo explicando como consultar o andamento dos processos",
        duration: "2 min",
        link: "https://drive.google.com/drive/folders/16PywI4UWk-Lqi8oS6AijxAT_YugYIouX",
        buttonText: "Assistir"
      },
      {
        title: "Como iniciar um processo?",
        provider: "Arquivo Central - SIARQ UFRJ",
        description: "Vídeo explicando como consultar o andamento dos processos",
        duration: "2 min",
        link: "https://drive.google.com/drive/folders/1FzBCqwGmDxdAsE_LFzkAguQI7XIH1gp4",
        buttonText: "Assistir"
      },
      {
        title: "Como incluir documento interno, modelo padrão nativo dentro do SEI?",
        provider: "assembleiasc",
        description: "Veja como criar um documento em texto ou modelo padrão do SEI",
        duration: "8 min",
        link: "https://drive.google.com/drive/folders/1IytPINPe1wXERQtIjPwoT_N4jihxzEqN",
        buttonText: "Assistir"
      },
      {
        title: "Como incluir um documento (externo) digitalizado ou PDF no processo?",
        provider: "assembleiasc",
        description: "Vídeo explicando como incluir um documento externo",
        duration: "7 min",
        link: "https://drive.google.com/drive/folders/1PN0Xz6I2EM26TfoPxyVCN-vn6jTgNzvy",
        buttonText: "Assistir"
      },
      {
        title: "Como editar um documento?",
        provider: "assembleiasc",
        description: "Veja como editar um documento",
        duration: "2 min",
        link: "https://drive.google.com/drive/folders/16ynmy1z_5WDgoPobw02i8JOtq4a3khL-",
        buttonText: "Assistir"
      },
      {
        title: "Como excluir um documento?",
        provider: "assembleiasc",
        description: "Veja como excluir um documento",
        duration: "3 min",
        link: "https://drive.google.com/drive/folders/1Bi97OMVpAQwVU2ETCUpyz0_qdtFdjY-g",
        buttonText: "Assistir"
      },
      {
        title: "Como distribuir processos dentro do meu setor?",
        provider: "assembleiasc",
        description: "Veja como distribuir internamente o processo dentro do seu setor",
        duration: "2 min",
        link: "https://drive.google.com/drive/folders/1gxA-uiPYaP2cW2DGzkr1Vu1NUTp58W9B",
        buttonText: "Assistir"
      },
      {
        title: "Como enviar um processo para outro setor?",
        provider: "assembleiasc",
        description: "Veja como encaminhar o processo para outro departamento ou secretaria",
        duration: "4 min",
        link: "https://drive.google.com/drive/folders/14cUB_iP6kU0LfIHBloiQZVuxYgi7qykn",
        buttonText: "Assistir"
      },
      {
        title: "Como receber um processo?",
        provider: "assembleiasc",
        description: "Aprenda como receber processos",
        duration: "2 min",
        link: "https://drive.google.com/drive/folders/1KlvszVxYw2jdGu9BFnjPi8tc87Ds5jgk",
        buttonText: "Assistir"
      },
      {
        title: "Como concluir um processo?",
        provider: "assembleiasc",
        description: "Aprenda como conlcuir um processo",
        duration: "3 min",
        link: "https://drive.google.com/drive/folders/1NtH8SdUhVnmPtcrgOJ96OJIW4gvxGhgF",
        buttonText: "Assistir"
      },
      {
        title: "Como excluir um processo?",
        provider: "assembleiasc",
        description: "Aprenda como excluir um processo",
        duration: "1 min",
        link: "https://drive.google.com/drive/folders/1jO56z2xRFvx0_GIz8SMKxYZWmVyNDXCj",
        buttonText: "Assistir"
      },
      {
        title: "Como dar ciência em um documento, memorando, e processo?",
        provider: "DIVERSOS DO YOU TUBE",
        description: "Aprenda dar ciência em um processo, documento, memorando ou ofício",
        duration: "1 min",
        link: "https://drive.google.com/drive/folders/1z8zAHRjuRW_iwZ0MzYgccBvxcPr4YiDw",
        buttonText: "Assistir"
      },
      {
        title: "Como disponibilizar documentos para assinatura?",
        provider: "Canal Oficial da UFMA",
        description: "Veja como disponibilizar documentos para assinatura",
        duration: "7 min",
        link: "https://drive.google.com/drive/folders/1Ywcqrw2MEfWJ3eutT5-gpDO9mjdvRcHN",
        buttonText: "Assistir"
      },
      {
        title: "Como assinar documentos?",
        provider: "Canal Oficial da UFMA",
        description: "Veja como assinar um documento",
        duration: "3 min",
        link: "https://drive.google.com/drive/folders/101xHQeqUV7rbufuR83lJuN6xhRJDB75L",
        buttonText: "Assistir"
      },
      {
        title: "Como anexar um processo a outro?",
        provider: "assembleiasc",
        description: "Veja como anexar ou ajuntar um processo a outro",
        duration: "3 min",
        link: "https://drive.google.com/drive/folders/1M5zabFvxnItP8H58wJ9UWZvsRCXMBlGI",
        buttonText: "Assistir"
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="mb-4">
            Capacitação e <span className="text-[#2563EB]">Treinamentos</span>
          </h2>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mb-6"></div>
        </div>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Capacitação completa e gratuita para servidores e cidadãos de Pinheiral. Conheça o SEI e seus benefícios através de treinamentos oficiais verificados.
        </p>

        {/* Intro Videos Section */}
        <div className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] rounded-t-2xl p-8 mb-0">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Play className="w-6 h-6 text-white fill-white" />
            <h3 className="text-white" style={{ fontWeight: 700 }}>
              {introVideos.title}
            </h3>
          </div>
          <p className="text-center text-white/90">
            {introVideos.subtitle}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="bg-white rounded-b-2xl shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {introVideos.courses.map((course, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h4 className="text-gray-900 mb-2">
                  {course.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-3">
                  {course.provider}
                </p>
                
                <p className="text-gray-700 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <Button 
                    className="bg-[#DC2626] hover:bg-[#B91C1C] text-white gap-2"
                    size="sm"
                    onClick={() => {
                      if (course.link) {
                        window.open(course.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <Play className="w-4 h-4 fill-white" />
                    {course.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}