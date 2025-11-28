import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "O que é preciso para usar o SEI na Prefeitura de Pinheiral?",
      answer: "Para utilizar o SEI na Prefeitura de Pinheiral, você precisa ser servidor público municipal. É necessário ter acesso à internet e um navegador atualizado. Os servidores receberão suas credenciais através dos pontos focais."
    },
    {
      question: "Como solicitar acesso ao SEI na Prefeitura?",
      answer: "Servidores públicos devem solicitar acesso ao ponto focal na sua secretaria. O ponto focal entrará em contato com o comitê gestor para dar prosseguimento."
    },
    {
      question: "Como realizar corretamente a classificação de nível de acesso?",
      answer: "Consulte a página https://wikisei.rj.gov.br/Classifica%C3%A7%C3%A3o_de_N%C3%ADvel_de_Acesso_no_SEI. Assim você terá respostas para perguntas como: 'O que acontece quando coloco um documento classificado como restrito em um processo classificado como público?' e 'O que acontece quando insiro um documento público em um processo classificado como restrito?'"
    },
    {
      question: "Os documentos assinados digitalmente no SEI têm validade jurídica?",
      answer: "Sim, os documentos assinados digitalmente no SEI possuem plena validade jurídica, conforme estabelecido pela Lei nº 14.063/2020 e pela Medida Provisória nº 2.200-2/2001. O sistema utiliza certificação digital e registro de autenticidade que garantem a integridade e autoria dos documentos."
    },
    {
      question: "Posso acessar o SEI de casa ou de outros locais?",
      answer: "Sim, o SEI pode ser acessado de qualquer lugar com conexão à internet, permitindo trabalho remoto e maior flexibilidade. Basta acessar o portal do SEI da Prefeitura com suas credenciais de login e senha."
    },
    {
      question: "O que fazer se eu esquecer (ou quiser trocar) minha senha do SEI?",
      answer: "Entre em contato com o Departamento de Tecnologia da Informação da Secretaria de Administração pelo RAMAL 240 ou ligue para o número da prefeitura (24 21020240)"
    },
    {
      question: "É possível recuperar documentos excluídos no SEI?",
      answer: "Sim, o SEI mantém registro de todas as ações realizadas no sistema. Documentos excluídos podem ser recuperados pelo administrador do sistema, desde que a solicitação seja feita através dos canais oficiais de suporte técnico."
    },
    {
      question: "Como funciona a assinatura em lote no SEI?",
      answer: "A assinatura em lote permite que você assine múltiplos documentos de uma só vez, otimizando o tempo de trabalho. Basta selecionar os documentos desejados, escolher a opção de assinatura em lote e confirmar com sua senha ou certificado digital."
    },
    {
      question: "Qual o horário de funcionamento do suporte técnico?",
      answer: "O suporte técnico do SEI funciona em horário comercial, de segunda a sexta-feira, das 8h às 17h."
    },
    {
      question: "Existem treinamentos disponíveis para aprender a usar o SEI?",
      answer: "Sim, há vídeos tutoriais, manuais e cursos online gratuitos no YouTube e na ENAP disponíveis para capacitação contínua."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="mb-4">
            Dúvidas <span className="text-[#2563EB]">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mb-6"></div>
        </div>

        <p className="text-center text-gray-600 mb-12">
          Encontre respostas para as principais dúvidas sobre o SEI
        </p>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava? Entre em contato pelo e-mail abaixo.
          </p>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white gap-2">
            <Mail className="w-4 h-4" />
            seipinheiral@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}
