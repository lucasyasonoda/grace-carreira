# TODO - Pendências e Acompanhamento

## Fazer
- [ ] Configurar variáveis de ambiente de produção no deploy (`VITE_GA_MEASUREMENT_ID` e `VITE_META_PIXEL_ID`).
- [ ] Avaliar configuração de domínio customizado próprio (ex: `gracecarreira.adv.br`) no GitHub Pages.

## Aguardando Cliente
- [ ] Link do episódio do Podcast do Júnior Mosco (item pronto e oculto em INTERVIEWS).
- [ ] Link do canal do YouTube (YOUTUBE em site.ts, oculto).
- [ ] Dúvida pendente da Grace (anotar qual quando enviada).
- [ ] Domínio do site (definir/confirmar).
- [ ] Confirmar anos na SEC-SP: Home agora diz 15+, mas Sobre/SEO/áreas dizem 16 anos e Sobre diz 25 anos de experiência.
- [ ] **WhatsApp:** Fornecer o número oficial definitivo para substituir o placeholder (`5511999999999`) em `src/content/site.ts`.
- [ ] **SEC-SP:** Confirmar tempo exato de atuação na Secretaria de Estado da Cultura de SP (20 ou 25 anos) para sincronizar Home e Sobre (`src/routes/index.tsx` e `src/routes/sobre.tsx`).
- [ ] **Facebook:** Confirmar o link/handle oficial da página no Facebook com Amábile/Grace (`src/content/site.ts` e `Footer.tsx`).
- [ ] **Conselhos:** Validar datas de mandato e nomes completos das comissões (em especial a Presidência da Comissão de Direito Urbanístico - OAB Sorocaba 24ª Subseção em `src/routes/sobre.tsx`).

## Feito
- [x] Home: anos na SEC-SP de 20+ para 15+ (21/10/2026).
- [x] Seção 'Na mídia' em /artigos com CartaCapital publicado (21/10/2026).
- [x] Espaço do YouTube pronto e oculto.
- [x] Criação da estrutura completa de páginas (Home, Sobre, Atuação com 4 vertentes, Artigos, Cursos, SynapseCare, Contato).
- [x] Implementação do design system com tipografia Cormorant Garamond + Inter e paleta editorial Paper/Ink/Gold.
- [x] Integração de botões e links de WhatsApp com tracking para Meta Pixel e Google Analytics.
- [x] Inclusão de fotos institucionais tratadas da Dra. Grace.
- [x] Configuração da esteira de CI/CD via GitHub Actions com pré-renderização estática das rotas para o GitHub Pages.
- [x] Estruturação da base de contexto permanente do projeto na pasta `/contexto`.