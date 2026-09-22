# Thiago Abrantes — Corretor de imóveis

Site de apresentação profissional de Thiago Abrantes, corretor de imóveis em João Pessoa, Paraíba. O projeto ajuda quem busca a casa própria a entender as etapas da compra, conhecer a modalidade financiada do Minha Casa, Minha Vida e entrar em contato pelo WhatsApp.

**Endereço do projeto:** [thiago-abrantes.vercel.app](https://thiago-abrantes.vercel.app/)

## Funcionalidades

- Página responsiva com navegação para desktop e celular.
- Apresentação do corretor com foto e identificação profissional.
- Informações sobre o Minha Casa, Minha Vida e as etapas do financiamento.
- Perguntas frequentes sobre a compra de imóveis em João Pessoa.
- Botões de contato direto pelo WhatsApp.
- Identidade visual em azul e dourado, com gradientes suaves no destaque inicial.
- Conteúdo em português brasileiro e SEO direcionado ao público local.

## Tecnologias

- React 19 e TypeScript.
- TanStack Start e TanStack Router, com renderização no servidor e rotas baseadas em arquivos.
- Vite 8 e Nitro para desenvolvimento e build.
- Tailwind CSS 4 para os estilos.
- Radix UI e Lucide React para componentes e ícones.

## Executar localmente

Com Node.js e npm instalados, clone o repositório e instale as dependências:

```bash
git clone https://github.com/lucasvna/site-corretor.git
cd site-corretor
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal. As alterações salvas no código são refletidas automaticamente no navegador. Para encerrar o servidor, pressione `Ctrl+C`.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o servidor de desenvolvimento. |
| `npm run build` | Gerar o build de produção. |
| `npm run build:dev` | Gerar o build no modo development. |
| `npm run preview` | Visualizar o build gerado localmente. |
| `npx tsc --noEmit` | Verificar os tipos TypeScript. |
| `npm run lint` | Executar o ESLint. |
| `npm run format` | Formatar os arquivos com Prettier. |

Para conferir a versão compilada:

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
public/
  robots.txt              # Orientações para rastreadores
  sitemap.xml             # URL principal para indexação
src/
  assets/foto-thiago.jpeg  # Foto do corretor
  components/ui/          # Componentes de interface
  routes/
    __root.tsx            # Estrutura HTML, fontes e páginas de erro
    index.tsx             # Página inicial, textos, contato e metadados
  router.tsx              # Configuração do roteador
  routeTree.gen.ts         # Árvore de rotas gerada automaticamente
  server.ts               # Entrada do servidor e tratamento de erros SSR
  styles.css              # Tema, tipografia e gradientes
vite.config.ts            # Configuração de desenvolvimento e build
```

Não edite `src/routeTree.gen.ts` manualmente: o arquivo é gerado pelo roteador.

## Atualizar o conteúdo

Os textos, as perguntas frequentes, os links do WhatsApp e os metadados ficam em `src/routes/index.tsx`. As constantes `WHATSAPP` e `WHATSAPP_MCMV` definem os destinos de contato.

A foto está em `src/assets/foto-thiago.jpeg`. O tema e o efeito de iluminação da primeira seção ficam em `src/styles.css`.

Ao revisar informações sobre financiamento, consulte as regras vigentes da [CAIXA](https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/urbana/Paginas/default.aspx) e do [Ministério das Cidades](https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/mcmv-fgts). A simulação não garante aprovação de crédito; condições e benefícios dependem da análise da proposta.

## SEO e compartilhamento

O projeto inclui título e descrição com foco em João Pessoa, idioma `pt-BR`, URL canônica, metadados Open Graph e Twitter, dados estruturados do tipo `Person`, `robots.txt` e sitemap.

Se o domínio mudar, atualize:

- `SITE_URL` em `src/routes/index.tsx`.
- A URL do sitemap em `public/robots.txt`.
- A URL principal em `public/sitemap.xml`.
- O endereço apresentado neste README.

## Publicação

O endereço definido para o site é `https://thiago-abrantes.vercel.app/`. A integração do repositório e as opções de implantação são administradas no provedor de hospedagem.

A configuração atual utiliza `@lovable.dev/vite-tanstack-config`, cujo build usa Nitro com destino padrão Cloudflare. Ao configurar ou alterar a implantação na Vercel, confira a compatibilidade do destino de build com o ambiente do provedor; executar o build localmente não realiza a publicação.
