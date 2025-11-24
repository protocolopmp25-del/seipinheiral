import { BookOpen, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function OfficialCoursesSection() {
  const courses = [
    {
      title: "SEI! USAR - Curso Oficial ENAP",
      provider: "ENAP",
      duration: "20 horas",
      level: "Básico",
      levelColor: "bg-blue-100 text-blue-700",
      link: "https://www.escolavirtual.gov.br/curso/74",
      description: "Curso gratuito oficial da Escola Nacional de Administração Pública (ENAP)"
    },
    {
      title: "SEI! USAR - Módulo Avançado",
      provider: "ENAP",
      duration: "40 horas",
      level: "Avançado",
      levelColor: "bg-orange-100 text-orange-700",
      link: "https://www.escolavirtual.gov.br/curso/1052",
      description: "Funcionalidades avançadas do SEI para usuários experientes (ENAP)"
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#059669] to-[#10B981] rounded-t-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-white" />
            <h2 className="text-white" style={{ fontWeight: 700 }}>
              Cursos Oficiais para Usuários Internos
            </h2>
          </div>
          <p className="text-center text-white/90">
            Cursos gratuitos com certificado válido para capacitação de servidores
          </p>
        </div>

        {/* Courses Grid */}
        <div className="bg-gray-50 rounded-b-2xl shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-[#059669] hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#D1FAE5] p-4 rounded-lg">
                      <BookOpen className="w-8 h-8 text-[#059669]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-gray-900 mb-2">
                    {course.title}
                  </h3>

                  {/* Provider */}
                  <p className="text-center text-sm text-gray-600 mb-4">
                    {course.provider}
                  </p>

                  {/* Duration and Level */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <Badge className={course.levelColor}>
                      {course.level}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-center text-gray-700 mb-6">
                    {course.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-[#059669] hover:bg-[#047857] text-white gap-2"
                    onClick={() => {
                      if (course.link) {
                        window.open(course.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Fazer Curso Gratuito
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