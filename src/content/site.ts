export const SITE = {
  name: "Grace Carreira",
  tagline: "Advogada — Direitos Culturais e Gestão Pública",
  email: "contato@gracecarreira.adv.br",
  whatsapp: "5511999999999",
  eduzz: "https://www.eduzz.com/",
  spotify: "https://open.spotify.com/show/4ubIfa4cb0jHw3HOmPNG5i?si=6n26fj4PST-6kNifbORsFQ",
  oab: "OAB/SP",
  city: "São Paulo, SP",
};

export type Area = {
  slug: string;
  short: string;
  title: string;
  headline: string;
  chapeu: string;
  intro: string;
  subservices: {
    tag: string;
    title: string;
    body: string;
    hint?: string;
    ref?: string;
  }[];
  cta: string;
};

export const AREAS: Area[] = [
  {
    slug: "gestao-cultural",
    short: "Gestão Cultural e Políticas Públicas",
    title: "Gestão Cultural e Políticas Públicas",
    headline:
      "Assessoria jurídica e consultoria estratégica para gestores públicos que precisam transformar intenção cultural em política pública real — com conformidade legal, segurança institucional e impacto territorial e criativo duradouro.",
    chapeu:
      "Para prefeitos, secretários de cultura, conselheiros e técnicos de órgãos públicos que precisam estruturar, executar e defender políticas culturais eficientes — do planejamento à prestação de contas, com respaldo jurídico em cada etapa.",
    intro:
      "A implementação de políticas públicas eficientes exige muito mais do que boa vontade: requer domínio do marco regulatório vigente, capacidade técnica para estruturar editais e planos que resistam ao escrutínio dos órgãos de controle — e experiência real de quem já esteve dentro do sistema. Com 16 anos de atuação na Secretaria de Estado da Cultura de São Paulo e participação em colegiados, ofereço assessoria jurídica especializada em todas as etapas da gestão cultural pública — da estruturação de sistemas municipais à defesa em processos junto ao TCE e TCU. Conheço os entraves do setor e sei como transformá-los em soluções práticas para a sua gestão.",
    subservices: [
      {
        tag: "Implantação e estruturação",
        title: "Sistemas Municipais de Cultura",
        body: "Diagnóstico, estruturação e implementação de sistemas municipais conforme diretrizes do MinC — incluindo elaboração do Plano Municipal de Cultura, Fundo de Cultura, estruturação de conselhos, criação de indicadores e avaliação, além de capacitação de equipes técnicas para gestão continuada.",
        hint: "Seu município ainda não tem um sistema organizado, ou precisa se adequar? Mapeamos o que já existe, identificamos as lacunas e construímos a estrutura certa para a sua realidade.",
        ref: "SNC — Lei nº 14.835/2024 e Lei 14.903/2024",
      },
      {
        tag: "Planejamento estratégico",
        title: "Planos Municipais de Cultura",
        body: "Elaboração de planos com diagnóstico participativo envolvendo sociedade civil, artistas e gestores; definição de objetivos alinhados às políticas estaduais e federais; estruturação de metas, ações e indicadores; e integração ao PPA, LDO e LOA com acompanhamento de execução e revisão periódica.",
        hint: "Um Plano Municipal de Cultura bem estruturado não é apenas um documento de conformidade — é o instrumento que garante continuidade às ações culturais da gestão e que o recurso público seja aplicado com propósito e transparência.",
      },
      {
        tag: "Licitações e parcerias",
        title: "Editais Culturais e Assessoria Jurídica em Licitações",
        body: "Elaboração e revisão de editais culturais com plena conformidade legal; análise de propostas e projetos; consultoria em processos licitatórios para contratação de serviços culturais; estruturação de parcerias público-privadas (PPP) e contratos de colaboração; e defesa em processos de tomada de contas junto ao TCE e TCU.",
        hint: "Um edital mal elaborado pode comprometer toda a licitação — e expor o gestor a processos nos órgãos de controle. Garantimos que cada etapa da contratação cultural da sua secretaria esteja tecnicamente fundamentada e juridicamente segura.",
      },
      {
        tag: "Financiamento público",
        title: "Fundos para Cultura",
        body: "Consultoria para criação e operacionalização de fundos públicos para financiamento à cultura: definição de modelos de gestão e governança, estratégia de captação junto a doadores pessoas físicas e jurídicas, estruturação de políticas de aplicação de recursos e acompanhamento de conformidade legal e fiscal.",
        hint: "Municípios com fundos estruturados conseguem atrair investimentos privados e garantir recursos estáveis para a cultura além do ciclo eleitoral — reduzindo a dependência exclusiva do orçamento público.",
      },
      {
        tag: "Regime de Contratações para Fomento",
        title: "Consultoria em Lei 14.903/2024 — Marco Regulatório do Fomento à Cultura",
        body: "Consultoria especializada na interpretação e aplicação da nova Lei 14.903/2024; análise de impacto nas políticas culturais existentes; orientação para adequação de editais e programas; e capacitação de equipes técnicas.",
        hint: "A nova lei traz mudanças significativas. Garantimos que sua gestão esteja alinhada às novas diretrizes desde o início.",
        ref: "Lei 14.903/2024 — Marco Regulatório do Fomento à Cultura",
      },
    ],
    cta: "Quer estruturar e fortalecer a política cultural do seu município com segurança jurídica? Agende uma consulta inicial e avalie como posso contribuir para a sua gestão — do diagnóstico à execução.",
  },
  {
    slug: "leis-de-incentivo",
    short: "Leis de Incentivo e Fomento à Cultura",
    title: "Leis de Incentivo e Fomento à Cultura",
    headline:
      "Consultoria estratégica e jurídica para proponentes, produtoras culturais e gestores públicos na utilização das leis de incentivo fiscal, editais de fomento e programas públicos de financiamento à cultura — maximizando o acesso a recursos e minimizando riscos de conformidade.",
    chapeu:
      "Para artistas, produtoras, organizações culturais, gestores públicos e empresas que querem acessar, executar e prestar contas de projetos financiados por leis de incentivo — com segurança jurídica em cada etapa do processo.",
    intro:
      "O Brasil conta com um dos sistemas de fomento à cultura mais complexos do mundo — e navegar por ele exige conhecimento técnico aprofundado sobre enquadramento de projetos, conformidade fiscal e gestão de prestação de contas. Um erro de enquadramento pode inviabilizar um projeto inteiro; uma prestação de contas mal elaborada pode resultar em devolução de recursos e impedimentos futuros. Com experiência em assessoramento de projetos incentivados, ofereço assessoria jurídica especializada em todo o ciclo das leis de incentivo — da análise de elegibilidade à resolução de pendências junto aos órgãos federais e estaduais. Seu projeto cultural merece chegar onde precisa chegar.",
    subservices: [
      {
        tag: "Federal",
        title: "Lei Rouanet — Lei Federal de Incentivo à Cultura",
        body: "Análise de elegibilidade e enquadramento de projetos conforme critérios federais; orientação sobre categorias de financiamento (artes cênicas, audiovisual, música, patrimônio e demais segmentos); consultoria em prestação de contas e comprovação de gastos; e resolução de pendências e recursos junto ao Ministério da Cultura.",
        hint: "A Lei Rouanet é o principal mecanismo de financiamento da cultura brasileira — mas também um dos mais exigentes em termos de conformidade. Garantimos que o seu projeto seja enquadrado corretamente desde o início, evitando retrabalho e riscos na captação.",
        ref: "Lei 8.313/1991 — PRONAC / Lei Rouanet",
      },
      {
        tag: "Federal",
        title: "Lei Paulo Gustavo e PNAB — Política Nacional Aldir Blanc",
        body: "Consultoria para acesso a recursos dos fundos de apoio; análise de elegibilidade e enquadramento de projetos; elaboração de propostas alinhadas aos critérios de seleção; acompanhamento de processos de aprovação; e gestão de conformidade fiscal e legal na execução e prestação de contas.",
        hint: "Essas políticas representam um volume significativo de recursos descentralizados para estados e municípios. Para gestores públicos, a assessoria garante que os repasses sejam operacionalizados corretamente. Para proponentes, assegura acesso efetivo ao fomento disponível.",
        ref: "Lei 14.399/2022 — PNAB / LC 195/2022 — Lei Paulo Gustavo",
      },
      {
        tag: "Estadual — São Paulo",
        title: "ProAC — Programa de Ação Cultural do Estado de São Paulo",
        body: "Consultoria para acesso aos diferentes programas ProAC (Editais, Bolsas e Prêmios); análise de enquadramento conforme linhas de financiamento; elaboração de projetos bem estruturados; acompanhamento do processo de seleção e aprovação; gestão de contratos e prestação de contas; e suporte em auditorias e processos de verificação.",
        hint: "O ProAC opera com múltiplas linhas e critérios distintos para cada categoria. Conhecer essas nuances faz a diferença entre um projeto aprovado e um projeto devolvido por inadequação formal.",
        ref: "Lei Estadual 12.268/2006 — ProAC SP",
      },
      {
        tag: "Organizações da sociedade civil",
        title: "MROSC — Marco Regulatório das Organizações da Sociedade Civil",
        body: "Consultoria para adequação de OSCs à legislação vigente; estruturação de termos de colaboração e fomento; elaboração de planos de trabalho conformes; acompanhamento de prestação de contas; e resolução de pendências em auditorias.",
        hint: "Organizações que atuam com cultura e dependem de parcerias com o poder público precisam de estrutura jurídica adequada para firmar convênios e termos de fomento sem risco de irregularidade.",
        ref: "Lei 13.019/2014 — MROSC",
      },
      {
        tag: "Gestão de projetos",
        title: "Execução e Prestação de Contas de Projetos Incentivados",
        body: "Planejamento financeiro e orçamentário durante a execução; acompanhamento de conformidade com os termos de aprovação; gestão documental da prestação de contas e comprovação de gastos; comunicação com órgãos financiadores; e resolução de pendências e ajustes ao longo do projeto.",
        hint: "Aprovar o projeto é apenas o começo. A execução e a prestação de contas exigem atenção técnica contínua — e é nessa fase que a maioria dos problemas surge. Acompanhamos o projeto do início ao encerramento para garantir que tudo chegue ao fim sem pendências.",
      },
      {
        tag: "Financiamento permanente",
        title: "Fundos Patrimoniais para Cultura",
        body: "Consultoria para estruturação de fundos permanentes de financiamento à cultura; definição de modelos de governança e gestão; estratégia de captação de recursos junto a doadores; e acompanhamento de conformidade legal e fiscal.",
        hint: "Para organizações e municípios que querem construir uma base de financiamento estável — independente de editais anuais e ciclos orçamentários —, o fundo patrimonial é o instrumento mais sólido disponível na legislação brasileira.",
      },
    ],
    cta: "Tem um projeto cultural que precisa de financiamento — ou recursos aprovados que precisam ser executados com segurança? Agende uma consulta e encontremos juntos o melhor caminho dentro do sistema de fomento disponível.",
  },
  {
    slug: "contratos-autorais",
    short: "Contratos, Direitos Autorais e PI",
    title: "Contratos, Direitos Autorais e Propriedade Intelectual",
    headline:
      "Consultoria jurídica especializada em proteção de direitos autorais, negociação e elaboração de contratos artísticos, gestão de propriedade intelectual e estruturação de carreira para artistas, produtores, influenciadores e criadores digitais.",
    chapeu:
      "Para artistas independentes, produtoras culturais, influenciadores e criadores de conteúdo que precisam proteger sua obra, formalizar relações comerciais e negociar com segurança — seja com parceiros, plataformas digitais ou patrocinadores.",
    intro:
      "No setor cultural, a obra é o patrimônio mais valioso de um artista ou produtor — e protegê-la exige muito mais do que talento. Contratos mal elaborados, cessões de direitos assinadas sem análise criteriosa e acordos informais podem comprometer décadas de trabalho criativo. A legislação brasileira oferece instrumentos robustos de proteção autoral e contratual — mas eles só funcionam quando aplicados com precisão técnica e conhecimento do setor. Ofereço assessoria jurídica especializada em contratos, direitos autorais e propriedade intelectual para o mercado cultural, com foco em proteger o que você criou e viabilizar as relações comerciais que sustentam sua carreira.",
    subservices: [
      {
        tag: "Direitos autorais",
        title: "Proteção de Direitos Autorais",
        body: "Consultoria sobre direitos autorais e direitos conexos; registro de obras artísticas junto a órgãos competentes; análise de violação de direitos e estratégia de proteção; negociação de cessão de direitos com terceiros; e defesa em processos administrativos e judiciais de infração autoral.",
        hint: "Sua obra é protegida pela lei desde o momento da criação — mas o registro e a formalização são o que tornam essa proteção efetiva na prática. Atuamos desde a orientação preventiva até a defesa em casos de uso indevido.",
        ref: "Lei 9.610/1998 — Lei de Direitos Autorais",
      },
      {
        tag: "Contratos artísticos",
        title: "Contratos Artísticos e de Prestação de Serviços",
        body: "Elaboração de contratos de prestação de serviços artísticos; contratos de parceria entre artistas e produtoras; contratos de exclusividade e não-concorrência; contratos de licenciamento de obras; contratos de cessão de direitos patrimoniais; negociação de cláusulas de remuneração e royalties; e análise e revisão de contratos propostos por terceiros.",
        hint: "Assinar um contrato sem análise jurídica especializada pode significar ceder direitos que você não pretendia ceder — ou assumir obrigações desproporcionais. Cada cláusula tem peso e consequência: analisamos tudo antes que você assine.",
      },
      {
        tag: "Propriedade intelectual",
        title: "Registro de Marcas e Propriedade Intelectual",
        body: "Consultoria sobre registro de marcas e patentes relacionadas a projetos culturais; proteção de nomes artísticos e identidades visuais; consultoria sobre domínios e propriedade digital; estruturação de portfólio de propriedade intelectual; e estratégia de proteção em múltiplas jurisdições.",
        hint: "O nome artístico, a identidade visual e a marca têm valor comercial e precisam de proteção formal. Estruturamos esse portfólio de forma estratégica, antecipando conflitos antes que eles aconteçam.",
        ref: "Lei 9.279/1996 — Lei de Propriedade Industrial",
      },
      {
        tag: "Carreira artística",
        title: "Gestão e Estruturação de Carreira Artística",
        body: "Consultoria estratégica para desenvolvimento de carreira; estruturação de pessoa jurídica (PJ) para artistas com planejamento fiscal e tributário adequado; negociação com plataformas digitais (YouTube, Spotify, TikTok); e consultoria em contratos com influenciadores e criadores de conteúdo.",
        hint: "Formalizar a carreira artística vai além de abrir um CNPJ — envolve escolher o regime tributário correto, estruturar contratos adequados para cada tipo de receita e entender direitos e obrigações em cada relação comercial.",
      },
      {
        tag: "Imagem e personalidade",
        title: "Direitos de Imagem e Personalidade",
        body: "Elaboração de contratos de licenciamento de uso de imagem; consultoria sobre direitos de personalidade; proteção contra uso indevido de imagem; negociação de remuneração por uso de imagem; e análise de contratos de publicidade e comunicação.",
        hint: "A imagem de um artista ou influenciador é um ativo comercial — e seu uso sem autorização ou remuneração adequada é uma violação legal. Definimos os termos certos para cada tipo de uso e garantimos que sua imagem trabalhe a seu favor.",
      },
      {
        tag: "Plataformas digitais",
        title: "Contratos e Direitos em Plataformas Digitais",
        body: "Análise e negociação de termos de serviço junto a plataformas como YouTube, Spotify, TikTok e Instagram; consultoria sobre monetização e direitos autorais no ambiente digital; estratégia de proteção de conteúdo contra uso não autorizado; e orientação sobre direitos de criadores frente às políticas algorítmicas das plataformas.",
        hint: "As plataformas digitais operam com contratos de adesão extensos e condições que mudam com frequência. Entender o que você está aceitando — e o que pode negociar — faz diferença direta na monetização e na proteção do seu conteúdo.",
      },
    ],
    cta: "Quer proteger sua obra, revisar um contrato antes de assinar ou estruturar sua carreira com segurança jurídica? Agende uma consulta e vamos avaliar juntos o que precisa de atenção.",
  },
  {
    slug: "patrimonio",
    short: "Patrimônio Cultural e Preservação",
    title: "Patrimônio Cultural e Preservação",
    headline:
      "Consultoria jurídica especializada em proteção, preservação e gestão do patrimônio cultural — incluindo bens imóveis tombados, patrimônio imaterial e instrumentos de tutela, com foco em viabilidade econômica e desenvolvimento territorial sustentável.",
    chapeu:
      "Para proprietários de bens tombados, municípios, órgãos públicos e organizações culturais que precisam navegar pela legislação de patrimônio com segurança — seja para proteger, intervir, captar recursos ou resolver conflitos com órgãos de preservação.",
    intro:
      "O patrimônio cultural brasileiro é protegido pela legislação e por órgãos com competências sobrepostas — IPHAN, conselhos estaduais e municipais. Qualquer intervenção em bem tombado exige assessoria jurídica especializada. Com atuação em conselhos de preservação como o CONPRESP e trajetória construída dentro da gestão pública cultural paulistana, ofereço consultoria jurídica com visão técnica e institucional do setor — entendendo tanto as obrigações legais quanto as possibilidades reais de conciliar preservação e desenvolvimento.",
    subservices: [
      {
        tag: "Tombamento",
        title: "Tombamento e Proteção de Bens Culturais",
        body: "Consultoria sobre processos de tombamento nas esferas federal, estadual e municipal; elaboração de pareceres jurídicos; acompanhamento de processos junto a órgãos de proteção (IPHAN, CONDEPHAAT, CONPRESP e demais); orientação sobre direitos e obrigações de proprietários de bens tombados; e defesa em processos administrativos relacionados a patrimônio.",
        hint: "Ter um bem tombado gera obrigações legais específicas — mas também abre acesso a instrumentos de financiamento e benefícios fiscais que muitos proprietários desconhecem. Orientamos em ambas as direções: o que a lei exige e o que ela permite.",
        ref: "Decreto-Lei 25/1937 — Lei do Tombamento / Art. 216 da Constituição Federal",
      },
      {
        tag: "Financiamento",
        title: "Acesso a Financiamento e Benefícios Fiscais para Patrimônio",
        body: "Consultoria sobre acesso a programas de financiamento para restauração de bens tombados; orientação sobre benefícios fiscais disponíveis para proprietários; e estruturação de projetos para captação de recursos junto a órgãos de fomento.",
        hint: "Ter um bem tombado abre acesso a instrumentos de financiamento que muitos proprietários desconhecem. Orientamos sobre como acessá-los.",
      },
      {
        tag: "Intervenção em bens tombados",
        title: "Licenciamento e Autorização para Intervenção em Bens Culturais",
        body: "Consultoria sobre licenças para intervenção em bens tombados; orientação técnica para elaboração de projetos de restauração em conformidade com as normas de preservação; acompanhamento do processo de aprovação junto aos órgãos competentes; e consultoria sobre compatibilidade entre preservação e uso econômico do bem.",
        hint: "Qualquer obra ou intervenção em imóvel tombado — mesmo reformas internas — exige autorização prévia dos órgãos de proteção. Agir sem essa autorização pode resultar em embargo da obra e processo administrativo. Garantimos que cada etapa do projeto seja aprovada corretamente.",
      },
      {
        tag: "Patrimônio imaterial",
        title: "Patrimônio Cultural Imaterial",
        body: "Consultoria sobre o processo de registro de patrimônio imaterial (saberes, práticas, formas de expressão e lugares); acompanhamento junto ao IPHAN e demais órgãos competentes; orientação sobre direitos de comunidades detentoras de patrimônio imaterial; e estratégia de valorização e transmissão de conhecimento tradicional.",
        hint: "O patrimônio imaterial — festas populares, saberes tradicionais, expressões culturais — tem proteção jurídica própria e pode ser registrado em nível municipal, estadual ou federal. Para comunidades e municípios, esse reconhecimento formal fortalece identidade territorial e abre portas para financiamento cultural específico.",
        ref: "Decreto 3.551/2000 — Registro de Bens Culturais Imateriais",
      },
      {
        tag: "Sítios históricos",
        title: "Gestão de Sítios Históricos e Arqueológicos",
        body: "Consultoria sobre gestão de áreas com potencial arqueológico; acompanhamento de processos de escavação e pesquisa junto aos órgãos competentes; orientação sobre conformidade com a legislação arqueológica; e estratégia de desenvolvimento econômico compatível com a preservação do sítio.",
        hint: "Empreendimentos em áreas com potencial arqueológico exigem licenciamento específico e podem ser paralisados sem aviso caso não sigam os protocolos legais. Orientamos desde a fase de diagnóstico até a regularização completa junto ao IPHAN.",
        ref: "Lei 3.924/1961 — Proteção de Monumentos Arqueológicos e Pré-históricos",
      },
      {
        tag: "Desenvolvimento urbano",
        title: "Patrimônio e Desenvolvimento Urbano",
        body: "Consultoria sobre instrumentos de política urbana aplicados à preservação (IPTU progressivo, outorga onerosa, transferência do direito de construir); análise de conformidade de projetos urbanos com a legislação de preservação; consultoria sobre revitalização de áreas históricas; e estratégia de desenvolvimento econômico em zonas de patrimônio.",
        hint: "Preservação e desenvolvimento urbano não são objetivos opostos — mas conciliá-los exige conhecimento dos instrumentos jurídicos disponíveis. Municípios e incorporadores que entendem essa equação conseguem viabilizar projetos que outros consideram inviáveis.",
      },
      {
        tag: "Conflitos e litígios",
        title: "Defesa em Conflitos Administrativos de Patrimônio",
        body: "Defesa em processos administrativos instaurados por órgãos de proteção; consultoria em conflitos entre proprietários e órgãos de preservação; e orientação sobre direitos e obrigações em matéria de preservação para proprietários, municípios e organizações culturais.",
        hint: "Receber uma notificação do IPHAN, CONDEPHAAT ou CONPRESP pode parecer o fim do processo — mas muitas autuações têm fundamento questionável ou procedimento irregular. Analisamos cada caso e construímos a melhor estratégia de defesa administrativa.",
      },
    ],
    cta: "Precisa de orientação sobre patrimônio tombado, processos de preservação ou conflitos com órgãos de proteção? Agende uma consulta — e vamos encontrar o caminho que concilia preservação, segurança jurídica e viabilidade para o seu projeto.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "A Grace traz uma segurança jurídica fundamental para quem trabalha com comunicação e imagem. Seja na análise de contratos ou na consultoria estratégica, ela entende a dinâmica do nosso mercado e protege nossos interesses com agilidade e precisão.",
    name: "Benjamin Back",
    role: "Comunicador Esportivo e Influenciador",
  },
  {
    quote:
      "Trabalhar com a Grace na construção de Planos Municipais de Cultura foi uma experiência transformadora. Nossa parceria mostrou que é possível unir técnica jurídica e sensibilidade cultural para criar políticas públicas que realmente funcionam.",
    name: "Camila Marujo",
    role: "Gestora Cultural e Ex-Presidente da Fundart Ubatuba",
  },
  {
    quote:
      "Contratei a Grace para estruturarmos o Sistema e o Plano Municipal de Cultura. O resultado foi um marco regulatório sólido e moderno. A Grace tem uma visão sistêmica que poucos profissionais do direito possuem.",
    name: "Jean Carlo Cunha",
    role: "Gestor Cultural — Campo Limpo Paulista",
  },
];

export const ARTICLES = [
  {
    slug: "constitucionalidade-direito-autoral",
    category: "Direito Autoral",
    title: "A Constitucionalidade do Direito Autoral e a Lei 9.610/1998",
    excerpt:
      "Reflexão sobre os aparentes conflitos entre Direitos do Autor, Liberdade de Expressão e Acesso à Cultura no ordenamento jurídico brasileiro.",
    body: [
      "A Lei 9.610/1998 estrutura o regime brasileiro de direitos autorais sobre uma equação delicada: proteger a criação como bem patrimonial e moral do autor e, ao mesmo tempo, garantir o acesso à cultura como direito fundamental.",
      "Esta análise percorre o tratamento constitucional do tema, examina os limites materiais à propriedade intelectual e propõe critérios para a ponderação entre tutela autoral, liberdade de expressão e função social da cultura.",
      "O texto integral está disponível para download — solicite pelo formulário de contato.",
    ],
  },
  {
    slug: "preservacao-ambiente-urbano",
    category: "Patrimônio Cultural",
    title: "A Proteção do Ambiente Urbano: Instrumentos de Preservação",
    excerpt:
      "Uma análise sobre a preservação do patrimônio ambiental urbano e os novos instrumentos de política urbana na cidade de São Paulo.",
    body: [
      "A cidade de São Paulo concentra um dos acervos urbanos mais complexos do país. Sua preservação não depende apenas do tombamento de bens isolados, mas da articulação entre instrumentos de política urbana, planos diretores e a atuação dos conselhos de patrimônio.",
      "O artigo examina ferramentas como a transferência do direito de construir, a outorga onerosa e o IPTU progressivo aplicadas à proteção do ambiente urbano paulistano.",
    ],
  },
  {
    slug: "patrimonio-imaterial-mario-de-andrade",
    category: "Patrimônio Imaterial",
    title: "Patrimônio Cultural Imaterial: De Mário de Andrade à Constituição de 1988",
    excerpt:
      "Histórico da tutela do Patrimônio Cultural no Brasil e a contribuição fundamental de Mário de Andrade para as políticas de preservação.",
    body: [
      "Do anteprojeto pioneiro de Mário de Andrade, em 1936, até o reconhecimento constitucional do patrimônio imaterial em 1988 e o Decreto 3.551/2000, a tutela das expressões culturais brasileiras desenhou um percurso institucional singular.",
      "Este texto recupera os marcos centrais dessa trajetória e seus reflexos na atuação contemporânea do IPHAN e dos conselhos estaduais e municipais.",
    ],
  },
];
