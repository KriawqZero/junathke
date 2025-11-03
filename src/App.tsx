import { useState } from 'react'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'quem-somos', label: 'Quem somos' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'solucao', label: 'Solução' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'etapas', label: 'Etapas' },
  { id: 'desafios', label: 'Desafios' },
  { id: 'testes', label: 'Testes' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'reflexao', label: 'Reflexão' },
]

const timeline = [
  {
    date: '23/09/2025',
    description:
      'Criamos a identidade visual da startup, definindo tons de verde e um estilo moderno que transmitisse sustentabilidade e tecnologia.',
  },
  {
    date: '26/09/2025',
    description:
      'Brainstorm sobre o nome do projeto e os problemas ambientais que poderíamos resolver. Escolhemos focar em automação sustentável para residências.',
  },
  {
    date: '30/09/2025',
    description:
      'Organizamos o diário de bordo e dividimos funções entre os integrantes para pesquisa, desenvolvimento do protótipo e documentação.',
  },
  {
    date: '03/10/2025',
    description:
      'Reunimos referências visuais e tecnológicas pesquisando sensores inteligentes, automação residencial e aplicativos de monitoramento.',
  },
  {
    date: '07/10/2025',
    description:
      'Planejamos as funcionalidades do protótipo EcoLiving, simulando o funcionamento com sensores, hub central e aplicativo.',
  },
  {
    date: '10/10/2025',
    description:
      'Montamos o esboço inicial do aplicativo e do design do sistema, definindo interface de controle e principais telas de monitoramento.',
  },
  {
    date: '14/10/2025',
    description:
      'Detalhamos tecnicamente o protótipo, especificando sensores, integração com IA adaptativa e automações residenciais. Finalizamos o protótipo 3D virtual.',
  },
  {
    date: '17/10/2025',
    description:
      'Fizemos uma revisão geral das pesquisas e começamos a preparar textos descritivos do projeto, incluindo benefícios, objetivos e justificativa.',
  },
  {
    date: '21/10/2025',
    description:
      'Ajustamos as funções do protótipo, discutimos melhorias na interface e finalizamos o diário de bordo e materiais da apresentação.',
  },
]

const tecnologias = [
  'Sensores inteligentes de energia, água, temperatura, umidade e qualidade do ar.',
  'Microcontroladores e placas como Arduino e ESP32 para o controle dos dispositivos.',
  'Aplicativo mobile integrado para monitoramento e controle em tempo real.',
  'Inteligência artificial adaptativa que aprende hábitos dos moradores e otimiza o consumo.',
  'Conexão via Wi-Fi e Internet das Coisas (IoT) para comunicar todos os dispositivos.',
  'Banco de dados em nuvem para armazenamento e análise das informações coletadas.',
  'Linguagens como Python, C++ e JavaScript aplicadas ao sistema e ao aplicativo.',
]

const etapas = [
  'Planejamento e pesquisa sobre automação residencial, sustentabilidade e consumo inteligente de recursos.',
  'Definição da solução com hub central, sensores integrados e aplicativo EcoLiving.',
  'Escolha das tecnologias, selecionando componentes eletrônicos, microcontroladores e ferramentas de software.',
  'Desenvolvimento do protótipo com montagem de circuitos, programação de sensores e integração com o aplicativo.',
  'Testes e ajustes para verificar desempenho, identificar falhas e otimizar automações e coleta de dados.',
  'Design e interface do aplicativo, priorizando uma experiência simples e intuitiva para os moradores.',
  'Apresentação e validação destacando benefícios ambientais, tecnológicos e sociais da solução.',
]

const desafios = [
  'Definir a comunicação entre sensores e hub central antes de construir o protótipo físico, optando pelo uso do ESP32 pela compatibilidade com IoT.',
  'Planejar o funcionamento do aplicativo para monitorar consumo de energia, água e alimentos com layout simples e funcional.',
  'Transformar a ideia em uma proposta viável tecnicamente, equilibrando sustentabilidade e automação sem elevar custos.',
  'Organizar tarefas e tempo da equipe com divisão de funções, reuniões frequentes e registros detalhados no diário de bordo.',
]

const resultados = [
  'Reduzir significativamente o desperdício de recursos nas residências.',
  'Tornar o ambiente doméstico mais confortável, saudável e eficiente.',
  'Oferecer controle acessível e automatizado para os moradores.',
  'Demonstrar que é viável unir tecnologia e sustentabilidade na prática.',
]

function Logo() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 128 128"
      className="h-14 w-14 text-emerald-600"
    >
      <path
        d="M21 62 64 25l45 37v49a12 12 0 0 1-12 12H33a12 12 0 0 1-12-12z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M64 102c-14-9-18.5-26.5-9-42 7.5-12.5 23-25 38-30-3.5 11-11.5 27-30 36 6.5 3.5 10.5 8 12 14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M100 18a22 22 0 0 1 14 20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M100 36a14 14 0 0 1 9 13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </svg>
  )
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-emerald-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/80 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-96 rounded-full bg-lime-200/70 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-teal-200/60 blur-3xl" />
      </div>

      <div className="relative flex">
        <aside className="sticky top-0 hidden h-screen flex-col justify-between border-r border-emerald-100/40 bg-white/70 px-6 py-10 shadow-xl backdrop-blur-xl lg:flex lg:w-60 min-[1400px]:w-72 min-[1400px]:px-8">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                  Junathke
                </p>
                <p className="text-lg font-bold text-emerald-800">EcoLiving</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Tecnologia e sustentabilidade caminhando juntas para transformar cada casa em um lar inteligente e consciente.
            </p>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-100/70 hover:text-emerald-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

        </aside>

        <div className="flex-1 lg:pl-4 min-[1400px]:pl-10">
          <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/30 bg-white/80 px-6 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                  Junathke
                </p>
                <p className="text-base font-bold text-emerald-800">EcoLiving</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="rounded-full border border-emerald-200 bg-white/70 p-2 text-emerald-700 shadow-md"
              aria-label="Abrir navegação"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>

          {isNavOpen ? (
            <div className="fixed inset-0 z-50 bg-emerald-900/40 backdrop-blur">
              <nav className="absolute right-4 top-4 w-64 rounded-3xl border border-emerald-100/60 bg-white/90 p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      Junathke
                    </p>
                    <p className="text-base font-bold text-emerald-800">EcoLiving</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsNavOpen(false)}
                    className="rounded-full border border-emerald-200 bg-white p-2 text-emerald-700 shadow"
                    aria-label="Fechar navegação"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-emerald-100/80 hover:text-emerald-800"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          ) : null}

          <main className="relative z-10 space-y-24 px-6 pb-16 pt-10 sm:px-10 lg:pl-4 lg:pr-12 min-[1400px]:px-16">
            <section id="inicio" className="relative overflow-hidden rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-2xl backdrop-blur-xl sm:p-14">
              <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-gradient-to-br from-emerald-200 via-lime-200 to-emerald-100 blur-3xl" />
              <div className="absolute -left-20 bottom-0 h-48 w-56 rounded-full bg-gradient-to-br from-emerald-300/70 to-teal-200/40 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">
                    Startup • Automação sustentável
                  </p>
                  <h1 className="text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
                    JUNATHKE EcoLiving – automação residencial inteligente com consciência ambiental
                  </h1>
                  <p className="text-lg leading-relaxed text-slate-700">
                    Desenvolvemos uma plataforma que une sensores inteligentes, hub central e aplicativo com IA adaptativa para monitorar e otimizar o uso de energia, água e alimentos em lares modernos. O projeto nasceu no 2ºB da Escola do SESI Corumbá para provar que inovação e sustentabilidade podem caminhar lado a lado.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                        Equipe
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        Natalha Freitas, Julia Padilha, Thaiane Alves e Klemann Kenzo
                      </p>
                    </div>
                    <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                        Instituição
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        Escola do SESI Corumbá • Professor Gabriel Souza
                      </p>
                    </div>
                    <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                        Local e ano
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        Corumbá – MS • 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#solucao"
                      className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                    >
                      Conheça a solução
                    </a>
                    <a
                      href="#cronograma"
                      className="rounded-full border border-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-100/60"
                    >
                      Jornada do projeto
                    </a>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/40 bg-gradient-to-br from-white/80 via-emerald-50/80 to-white/30 p-8 shadow-xl backdrop-blur-lg">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                    Impacto esperado
                  </p>
                  <h2 className="mt-6 text-5xl font-black text-emerald-600">
                    30%
                    <span className="ml-2 text-base font-semibold text-emerald-500">
                      menos energia
                    </span>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Simulações indicam potencial de economia de até 30% no consumo de energia e 20% na utilização de água, aliando conforto, saúde e sustentabilidade dentro de casa.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      Monitoramento em tempo real de energia, água e ar.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
                      Alertas e relatórios personalizados para toda a família.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
                      Automação adaptativa com inteligência artificial.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="quem-somos" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Quem somos nós
                </p>
              </div>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <p>
                    A JUNATHKE - Eco Living é uma startup criada em setembro de 2025 como parte de um projeto proposto pelo professor Gabriel Souza, incentivando a inovação e o pensamento sustentável através da automação.
                  </p>
                  <p>
                    Nossa equipe é formada por Natalha Freitas, Julia Padilha, Thaiane Alves e Klemann Kenzo, estudantes do 2ºB da Escola do SESI Corumbá (MS). Somos unidos pelo desejo de desenvolver soluções tecnológicas para um futuro mais inteligente, econômico e ecológico.
                  </p>
                  <p>
                    A proposta nasceu da vontade de integrar tecnologia, sustentabilidade e bem-estar, criando sistemas automatizados que otimizam o consumo de energia, água e alimentos. Queremos mostrar que pequenas inovações podem gerar grandes impactos positivos nos lares.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white/70 via-emerald-50/60 to-white/30 p-8 shadow-inner">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Nossos valores</p>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                    <li className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      Inovação com propósito social e ambiental.
                    </li>
                    <li className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      Tecnologia acessível para famílias brasileiras.
                    </li>
                    <li className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      Colaboração e aprendizagem contínua dentro da escola.
                    </li>
                    <li className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      Responsabilidade com o futuro do planeta.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="objetivos" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                    Objetivo do projeto
                  </p>
                </div>
                <p>
                  O objetivo do projeto JUNATHKE EcoLiving é desenvolver uma solução de automação residencial sustentável que promova o uso inteligente de energia, água e alimentos dentro das casas.
                </p>
                <p>
                  Buscamos reduzir desperdícios, melhorar a eficiência no consumo de recursos e proporcionar um ambiente doméstico mais confortável, saudável e econômico. Nossa meta é integrar tecnologia e sustentabilidade, comprovando que é possível viver de forma moderna e consciente sem abrir mão da praticidade e do bem-estar.
                </p>
              </div>
            </section>

            <section id="solucao" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Descrição da solução
                </p>
              </div>
              <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <p>
                    Nossa solução combina um hub central, sensores inteligentes e um aplicativo com inteligência artificial adaptativa. O hub conecta e controla todos os sistemas da casa, enquanto os sensores monitoram energia, água, qualidade do ar e estoque de alimentos.
                  </p>
                  <p>
                    O aplicativo aprende os hábitos da família e faz ajustes automáticos para otimizar o uso dos recursos em tempo real. Também envia alertas, recomendações e relatórios personalizados para promover conforto, economia e sustentabilidade.
                  </p>
                  <p>
                    Assim, a EcoLiving transforma qualquer residência em um ambiente inteligente, econômico e alinhado às metas de sustentabilidade do século XXI.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-100/80 via-white/90 to-teal-100/60 p-8 shadow-inner backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
                      Componentes principais
                    </p>
                    <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                      <li>Hub central com conectividade Wi-Fi e IoT.</li>
                      <li>Sensores de energia, água, temperatura, umidade e qualidade do ar.</li>
                      <li>Aplicativo mobile com dashboards intuitivos e alertas instantâneos.</li>
                      <li>IA adaptativa para recomendações personalizadas.</li>
                    </ul>
                  </div>
                  <div className="rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                      Benefícios imediatos
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li>Consumo inteligente e automatizado de recursos.</li>
                      <li>Alertas preventivos sobre desperdícios e vazamentos.</li>
                      <li>Relatórios acessíveis para toda a família.</li>
                      <li>Integração simples com dispositivos residenciais.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="tecnologias" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Tecnologias e ferramentas
                </p>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {tecnologias.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-inner"
                  >
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="etapas" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Etapas de desenvolvimento
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {etapas.map((item, index) => (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-inner"
                  >
                    <span className="absolute right-4 top-4 text-4xl font-black text-emerald-100">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="desafios" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Desafios e soluções
                </p>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {desafios.map((item) => (
                  <div key={item} className="rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-inner">
                    <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-slate-600">
                Esses desafios fortaleceram a equipe e prepararam o caminho para a próxima etapa: construir o protótipo online da EcoLiving e validar as automações propostas.
              </p>
            </section>

            <section id="testes" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Testes e resultados previstos
                </p>
              </div>
              <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <p>
                    Embora ainda estejamos na fase de protótipo, realizamos simulações e pesquisas teóricas para prever o funcionamento do sistema. Analisamos monitoramento de energia e água, controle de iluminação e temperatura e detecção de desperdícios.
                  </p>
                  <p>
                    Os resultados indicam que, quando implementado, o EcoLiving pode gerar economia de até 30% no consumo de energia e 20% no uso de água, além de oferecer um controle acessível e automatizado aos moradores.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-100/70 via-white/80 to-teal-100/60 p-8 shadow-inner">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
                    Resultados esperados
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                    {resultados.map((item) => (
                      <li key={item} className="rounded-2xl bg-white/90 p-4 shadow-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="cronograma" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Cronograma e realizações
                </p>
              </div>
              <div className="mt-10 space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.date} className="relative pl-10">
                    <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-lime-400 shadow" />
                    {index !== timeline.length - 1 ? (
                      <span className="absolute left-1 top-5 h-full w-px bg-emerald-200" aria-hidden />
                    ) : null}
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      {item.date}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="reflexao" className="rounded-[2.5rem] border border-emerald-100/60 bg-white/70 p-10 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  Reflexão final
                </p>
              </div>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-700">
                <p>
                  O desenvolvimento do projeto JUNATHKE EcoLiving foi uma experiência enriquecedora. Mesmo na fase de protótipo, aprendemos sobre automação residencial, sustentabilidade e o impacto positivo que a tecnologia pode gerar na qualidade de vida.
                </p>
                <p>
                  Enfrentamos desafios de organização, definição de tecnologias e criação de uma proposta viável, mas cada obstáculo trouxe novos aprendizados. A colaboração da equipe transformou uma ideia em um projeto com potencial real de aplicação futura.
                </p>
                <p>
                  O progresso alcançado demonstra que pequenas ações podem gerar grandes mudanças. Seguiremos evoluindo para transformar o EcoLiving em um protótipo funcional e, futuramente, em uma solução sustentável aplicada em lares reais.
                </p>
              </div>
            </section>

            <footer id="contato" className="rounded-[2.5rem] border border-emerald-100/60 bg-gradient-to-br from-emerald-600 to-teal-500 p-10 text-white shadow-xl">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Junathke EcoLiving</p>
                  <p className="mt-2 text-lg font-semibold">Projeto de startup • Escola do SESI Corumbá</p>
                </div>
                <div className="text-sm leading-relaxed text-white/80">
                  <p>Turma 2º B • Ano letivo 2025</p>
                  <p>Professor orientador: Gabriel Souza</p>
                  <p>Equipe: Natalha, Julia, Thaiane e Klemann</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-white/70">
                © 2025 JUNATHKE EcoLiving
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

