import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Zap, Target, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/farol-icon_2d18dc53.png" alt="Farol Icon" className="w-8 h-8" />
            <span className="font-bold text-lg text-[#1e3a8a]">Primus</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-gray-600 hover:text-[#1e3a8a] transition">O Problema</a>
            <a href="#solucao" className="text-gray-600 hover:text-[#1e3a8a] transition">A Solução</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-[#1e3a8a] transition">Como Funciona</a>
            <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">Saiba Mais</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage: "url('/manus-storage/hero-background_e0636844.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">
                🚀 Hack Comercial 2026.2
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                Seus concorrentes já estão à frente?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra onde sua empresa está perdendo dinheiro. O Oráculo da Primus analisa seus dados e mostra exatamente como subir no ranking de eficiência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-6 text-lg flex items-center gap-2 rounded-lg animate-pulse-subtle transition-all hover:scale-105">
                  Descubra Sua Posição <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 px-8 py-6 text-lg rounded-lg">
                  Saiba Como Funciona
                </Button>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img src="/manus-storage/ranking-visualization_7eadc277.png" alt="Ranking Visualization" className="w-full rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* O Problema Section */}
      <section id="problema" className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">O Problema</h2>
            <p className="text-xl text-gray-600">Micro e pequenas empresas na Bahia enfrentam desafios crônicos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Desorganização", desc: "Processos arcaicos e falta de visão clara dos gargalos operacionais." },
              { icon: Target, title: "Competição Invisível", desc: "Não sabem como estão posicionadas em relação aos concorrentes." },
              { icon: Zap, title: "Falta de Urgência", desc: "Sem dados concretos, é difícil justificar investimento em consultoria." },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="w-12 h-12 text-[#f97316] mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A Solução Section */}
      <section id="solucao" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6">A Solução: O Oráculo</h2>
              <p className="text-lg text-gray-600 mb-6">
                Um sistema inteligente de IA que analisa dados públicos da sua empresa e gera um <strong>Boletim de Performance</strong> comparativo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "✓ Análise automática em menos de 2 minutos",
                  "✓ Ranking comparativo com concorrentes locais",
                  "✓ Identificação clara dos 3 principais gargalos",
                  "✓ Plano de ação personalizado para subir no ranking",
                ].map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-center gap-3">
                    <span className="text-[#f97316] font-bold">{item.split("✓")[0]}</span>
                    {item.split("✓")[1]}
                  </li>
                ))}
              </ul>
              <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8 py-6 text-lg rounded-lg">
                Ver Boletim de Exemplo
              </Button>
            </div>
            <div className="flex justify-center">
              <img src="/manus-storage/boletim-mockup_1be9fa33.png" alt="Boletim Mockup" className="w-full max-w-sm rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-blue-100">4 passos simples para transformar sua empresa</p>
          </div>
          <img src="/manus-storage/process-flow_9921b747.png" alt="Process Flow" className="w-full mb-12 rounded-xl" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Mapeamento", desc: "IA analisa dados públicos da sua empresa" },
              { num: "2", title: "Geração", desc: "Sistema cria seu índice de eficiência" },
              { num: "3", title: "Abordagem", desc: "Você recebe seu boletim personalizado" },
              { num: "4", title: "Diagnóstico", desc: "Reunião com consultor para implementar" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 text-center">
                <div className="text-4xl font-bold text-[#f97316] mb-3">{item.num}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">O Impacto</h2>
            <p className="text-xl text-gray-600">Transforme a prospecção em uma máquina de vendas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: ">40%", label: "Taxa de Engajamento", desc: "Empresas que completam o diagnóstico" },
              { metric: ">15%", label: "Conversão para Reunião", desc: "De diagnósticos para reuniões agendadas" },
              { metric: "<R$5", label: "Custo por Lead", desc: "Viabilidade financeira garantida" },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-0 bg-gradient-to-br from-blue-50 to-orange-50 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#f97316] mb-2">{item.metric}</div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 px-4 bg-[#1e3a8a] text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Subir no Ranking?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Descubra onde sua empresa está perdendo dinheiro. Análise gratuita, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-10 py-6 text-lg rounded-lg flex items-center gap-2 justify-center">
              Começar Agora <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-lg">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/farol-icon_2d18dc53.png" alt="Farol Icon" className="w-6 h-6" />
                <span className="font-bold text-white">Primus Consultoria</span>
              </div>
              <p className="text-sm">Transformando desafios em oportunidades desde 1994.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">Gente e Gestão</a></li>
                <li><a href="#" className="hover:text-white transition">Financeiro</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:operacoes@primusconsultoria.com.br" className="hover:text-white transition">operacoes@primusconsultoria.com.br</a></li>
                <li><a href="tel:+5571993304939" className="hover:text-white transition">(71) 99330-4939</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Primus Consultoria. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">Operação O Oráculo - Hack Comercial 2026.2</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
