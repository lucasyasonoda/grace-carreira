import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base = isGitHubPages ? "/grace-carreira/" : "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { basepath: base },
      server: { entry: "server" },
      pages: [
        { path: "/" },
        { path: "/sobre" },
        { path: "/atuacao" },
        { path: "/atuacao/gestao-cultural" },
        { path: "/atuacao/leis-de-incentivo" },
        { path: "/atuacao/contratos-autorais" },
        { path: "/atuacao/patrimonio" },
        { path: "/artigos" },
        { path: "/artigos/constitucionalidade-direito-autoral" },
        { path: "/artigos/preservacao-ambiente-urbano" },
        { path: "/artigos/patrimonio-imaterial-mario-de-andrade" },
        { path: "/cursos" },
        { path: "/synapsecare" },
        { path: "/contato" },
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
