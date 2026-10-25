# PROJETO - Contexto Permanente

## Regras Permanentes
- No início de toda sessão, leia apenas os 4 arquivos de `/contexto` antes de qualquer tarefa. Não releia o projeto inteiro.
- Ao terminar cada tarefa, atualize o arquivo correspondente: mudou design -> `DESIGN.md`; decisão do cliente -> `CLIENTE.md`; estrutura/arquivos -> `PROJETO.md`; andamento -> `TODO.md`.
- Se precisar de algo que não está no contexto, leia só o arquivo específico e depois registre a informação no contexto.

## Stack e Versões
- **Framework & SSR/SSG:** TanStack Start `1.167.50` com TanStack Router `1.168.25`
- **Core:** React `19.2.0`, TypeScript `5.8.3`, Node `22`
- **Build Tool:** Vite `7.3.1` (`@tailwindcss/vite` 4.2.1, `vite-tsconfig-paths` 6.0.2)
- **Estilização:** Tailwind CSS `4.2.1`, `tw-animate-css` 1.3.4
- **Componentes & UI:** Radix UI primitivos, Lucide React `0.575.0`, `class-variance-authority`, `tailwind-merge`
- **Dados & Estado:** TanStack Query `5.83.0`
- **Deploy:** GitHub Pages via GitHub Actions (rotas pré-renderizadas estaticamente)

## Estrutura de Pastas
- `public/`: Assets estáticos servidos diretamente na raiz (ex: `favicon.svg`).
- `src/assets/`: Fotografias institucionais e imagens de conteúdo da Dra. Grace.
- `src/components/site/`: Componentes visuais institucionais (Header, Footer, CTASection, PageHero, etc.).
- `src/components/ui/`: Primitivos acessíveis baseados em Radix/shadcn (botões, cards, dialogs, etc.).
- `src/content/`: Fonte única da verdade para dados e textos estáticos do site (`site.ts`).
- `src/hooks/`: Hooks utilitários personalizados do React (`use-mobile.tsx`).
- `src/lib/`: Configurações de analytics, captura de erros, utilitários (`cn`) e server configs.
- `src/routes/`: Definições de rotas baseadas em arquivo pelo TanStack Router.

## Mapa de Rotas -> Arquivo
- `/` -> `src/routes/index.tsx` (Home institucional, hero, credenciais, áreas em destaque, depoimentos)
- `/sobre` -> `src/routes/sobre.tsx` (Biografia, trajetória pública na SEC-SP, timeline e conselhos)
- `/atuacao` -> `src/routes/atuacao.index.tsx` (Visão geral de serviços e áreas atendidas)
- `/atuacao/$slug` -> `src/routes/atuacao.$slug.tsx` (Detalhes por área: gestão cultural, incentivos, autorais, patrimônio)
- `/artigos` -> `src/routes/artigos.index.tsx` (Listagem e índice de artigos jurídicos)
- `/artigos/$slug` -> `src/routes/artigos.$slug.tsx` (Visualização do artigo individual)
- `/cursos` -> `src/routes/cursos.tsx` (Cursos, podcast Spotify e materiais de fomento)
- `/synapsecare` -> `src/routes/synapsecare.tsx` (Projeto SynapseCare / SynApp para cuidadores)
- `/contato` -> `src/routes/contato.tsx` (Formulário via mailto, endereços e canais diretos)
- Layout Shell -> `src/routes/__root.tsx` (HTML root, meta tags, Google Fonts, scripts GA/Pixel, Header e Footer)

## Onde Editar Conteúdos
- **Textos da Home:** `src/routes/index.tsx` (hero, frases institucionais) e `src/content/site.ts` (depoimentos e resumos de serviços).
- **Números / Estatísticas:** `src/routes/index.tsx` (seção de métricas: anos de SEC-SP, atuação jurídica, CONPRESP, pessoas atendidas).
- **Telefone / WhatsApp:** `src/content/site.ts` (`SITE.whatsapp`) + links dinâmicos em `src/components/site/WhatsappFloatButton.tsx`, `src/routes/cursos.tsx` e `src/routes/synapsecare.tsx`.
- **Redes Sociais:** `src/content/site.ts` (`SITE.instagram`, `SITE.linkedin`, `SITE.facebook`, `SITE.spotify`, `SITE.eduzz`).
- **Artigos / Blog:** `src/content/site.ts` (`export const ARTICLES = [...]`).
- **Mídia / Entrevistas / Depoimentos:** `src/content/site.ts` (`TESTIMONIALS`, `AREAS`) e `src/routes/cursos.tsx` (embed/link do Podcast).

## Comandos e Pontos de Atenção
- `npm run dev`: Inicia o servidor local de desenvolvimento (Vite).
- `npm run build`: Executa build e pré-renderização estática das rotas listadas em `vite.config.ts`.
- `npm run preview`: Visualiza o build de produção localmente.
- `npm run lint` / `npm run format`: Checagem e formatação com ESLint e Prettier.
- **Deploy:** Automático ao dar push na branch `main` via `.github/workflows/deploy-pages.yml`.
- **Atenção:** `src/routeTree.gen.ts` é gerado automaticamente pelo compilador de rotas; nunca edite à mão. Ao adicionar nova rota, declare-a também em `vite.config.ts` (`pages: [...]`) para garantir pré-renderização no GitHub Pages.
- **Entrevistas / Na mídia:** src/content/site.ts -> INTERVIEWS (item com published:false ou url vazia fica oculto; adicionar nova = novo objeto). Renderizado por src/components/site/MidiaSection.tsx, incluído no fim de src/routes/artigos.index.tsx.
- **YouTube:** src/content/site.ts -> YOUTUBE = { url, visible } (oculto; preencher url e isible: true). Renderizado em MidiaSection.tsx.
- **WhatsApp (número atual, não alterar):** src/content/site.ts -> SITE.whatsapp; consumido por WhatsappFloatButton.tsx, Footer.tsx, cursos.tsx, synapsecare.tsx.