# DESIGN - Guia Visual e Tokens

## Paleta de Cores
- `--paper` (`oklch(0.99 0.003 80)` / `#FAF9F6`): Fundo principal do site (body, cards claros).
- `--ink` (`oklch(0.18 0.005 60)` / `#1D1C1B`): Texto principal, títulos e botões primários.
- `--gold` (`oklch(0.74 0.12 78)` / `#B88746`): Acentos de autoridade, números das métricas, `.eyebrow`, hairline e `.gold-italic`.
- `--gold-soft` (`oklch(0.88 0.06 82)` / `#E9DCBF`): Realces suaves e fundos secundários leves.
- `--secondary` / `--muted` (`oklch(0.96 0.005 80)` / `#F4F3EF`): Faixas de destaque (credenciais, background do footer).
- `--border` (`oklch(0.9 0.005 70)` / `#E4E2DC`): Linhas sutis e divisórias de tabelas/grids.
- WhatsApp Brand: `#25D366` (botão flutuante de atendimento).
- SynapseCare: `#A55F55` (destaque terracota), `#F7F4EE` (fundo suave) e `#26352B` (texto).

## Tipografia
- **Serif (Editorial):** `Cormorant Garamond` (fallback: `Playfair Display`, Georgia, serif)
  - Usada em: H1, H2, H3, H4, `.display-title` (3rem a 4rem, font-weight: 500), `.page-title` (2.375rem a 3rem), `.section-title` (2rem a 2.5rem), `.card-title` (1.5rem a 1.625rem), `.editorial-lead` (1.25rem).
- **Sans (Interface & Leitura):** `Inter` (fallback: system-ui, -apple-system, sans-serif)
  - Usada em: corpo do texto (`.lead-copy`, `.body-copy`), links de menu e `.eyebrow` (0.6875rem, font-weight: 700, uppercase).
- **Ajustes Globais:** `letter-spacing: 0` forçado via classes tracking; text-wrap balance nos títulos e pretty nos parágrafos.

## Espaçamentos, Bordas, Sombras e Botões
- **Container:** Utilitário `@utility container-edit` (max-width: 1240px; padding lateral de 1.5rem / 2.5rem no desktop).
- **Bordas & Raio:** `--radius: 0.5rem` (shadcn default). Elementos editoriais usam cantos retos ou raio discreto.
- **Botões:** Minimalistas e sóbrios. Fundo `bg-foreground text-background` ou `border border-foreground`, texto `text-xs uppercase tracking-widest`, padding amplo (`px-7 py-4`).
- **Cards & Grids:** Divisórias ultrafinas usando container com fundo `bg-border` e `gap-px`. Sombras discretas (`shadow-xl` apenas em overlays e menus flutuantes).

## Componentes Visuais Reutilizáveis
- `PageHero.tsx` (`src/components/site/PageHero.tsx`): Cabeçalho padrão de páginas internas com overline, título e parágrafo lead.
- `CTASection.tsx` (`src/components/site/CTASection.tsx`): Seção padrão de chamada para ação ao final das páginas.
- `Header.tsx` & `Footer.tsx` (`src/components/site/`): Navegação fixa com blur e rodapé com mapa do site.
- `WhatsappFloatButton.tsx` (`src/components/site/`): Botão flutuante inferior direito com evento disparado para o Meta Pixel / GA4.
- `LegalRef.tsx` (`src/components/site/`): Bloco de notas legais e referências jurídicas.

## Identidade e Regras do Cliente
- **Tom Visual:** Advocacia editorial de alto padrão, culta e institucional. Foco em autoridade e clareza técnica.
- **O que NÃO MUDAR:**
  - NÃO trocar a paleta neutra (Paper/Ink/Gold) por cores vivas ou azul corporativo genérico.
  - NÃO remover a combinação Cormorant Garamond + Inter.
  - NÃO adicionar animações espalhafatosas ou clichês jurídicos (balança da justiça, martelos, estátuas gregas).