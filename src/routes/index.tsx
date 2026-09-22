import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  HandCoins,
  HeartHandshake,
  Home,
  KeyRound,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import fotoThiago from "../assets/foto-thiago.jpeg";

import { Button } from "@/components/ui/button";

const SITE_URL = "https://thiago-abrantes.vercel.app/";
const WHATSAPP = "https://wa.me/5583991163599";
const WHATSAPP_MCMV =
  "https://wa.me/5583991163599?text=Ol%C3%A1%2C%20Thiago!%20Quero%20saber%20mais%20sobre%20o%20Minha%20Casa%20Minha%20Vida.";

const navigation = [
  ["Início", "#inicio"],
  ["Minha Casa, Minha Vida", "#minha-casa-minha-vida"],
  ["Como funciona", "#como-funciona"],
  ["Sobre o corretor", "#sobre"],
  ["Dúvidas", "#duvidas"],
] as const;

const benefits = [
  { icon: Search, title: "Entenda suas possibilidades", description: "Entenda como a renda familiar e as características do imóvel influenciam o enquadramento no programa." },
  { icon: HandCoins, title: "Conheça as condições", description: "Saiba quais condições de financiamento e possíveis subsídios podem se aplicar ao seu perfil, conforme as regras vigentes." },
  { icon: HeartHandshake, title: "Tenha orientação", description: "Conte com apoio para compreender a documentação e os próximos passos." },
];

const steps = [
  { icon: Banknote, title: "Simulação", description: "Estime a entrada e as parcelas para planejar a compra. A simulação não garante a aprovação do financiamento." },
  { icon: Home, title: "Escolha do imóvel", description: "Compare localização, características e valor do imóvel em João Pessoa, considerando seu orçamento e sua rotina." },
  { icon: ClipboardCheck, title: "Documentação e análise", description: "Reúna os documentos para a análise de crédito. O banco também avalia o imóvel e verifica as condições da operação." },
  { icon: FileCheck2, title: "Contrato e formalização", description: "Após as aprovações, confira as condições, assine o contrato e siga as etapas de registro no cartório de imóveis." },
  { icon: KeyRound, title: "Entrega das chaves", description: "Após a conclusão das etapas e o cumprimento das condições e prazos do contrato, é hora de receber as chaves." },
];

const questions = [
  { question: "Por onde começar a compra de um imóvel em João Pessoa?", answer: "Defina seu orçamento, a região onde deseja morar e as características essenciais do imóvel. Se pretende financiar, faça uma simulação antes de escolher. Thiago pode ajudar você a organizar essa busca e entender os próximos passos." },
  { question: "Posso financiar um imóvel pelo Minha Casa, Minha Vida?", answer: "O enquadramento depende da renda familiar, do imóvel e dos demais requisitos do programa. Na modalidade financiada, o banco analisa o crédito e as condições da operação. Thiago orienta sobre a compra; a aprovação do financiamento cabe à instituição financeira." },
  { question: "O Minha Casa, Minha Vida garante subsídio ou entrada zero?", answer: "Não. Os subsídios dependem do enquadramento da família e das regras vigentes. O valor da entrada varia conforme o preço e a avaliação do imóvel, o crédito aprovado e os benefícios aplicáveis. Confirme essas condições na análise da proposta." },
  { question: "O que considerar ao escolher onde morar em João Pessoa?", answer: "Compare o trajeto até o trabalho, o acesso a transporte, escolas e serviços, além das características do imóvel. Inclua no orçamento despesas como condomínio, IPTU e custos de contratação. Conte suas prioridades ao corretor para orientar a busca." },
];
export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE_URL }],
    meta: [
      { title: "Corretor de imóveis em João Pessoa | Thiago Abrantes" },
      { name: "description", content: "Compre seu imóvel em João Pessoa, PB, com Thiago Abrantes. Orientação sobre financiamento e Minha Casa, Minha Vida. Fale com o corretor pelo WhatsApp." },
      { property: "og:title", content: "Corretor de imóveis em João Pessoa | Thiago Abrantes" },
      { property: "og:description", content: "Encontre seu imóvel em João Pessoa, Paraíba, com orientação de Thiago Abrantes sobre a compra, o financiamento e o Minha Casa, Minha Vida." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Thiago Abrantes" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: new URL(fotoThiago, SITE_URL).href },
      { property: "og:image:alt", content: "Thiago Abrantes, corretor de imóveis em João Pessoa" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Corretor de imóveis em João Pessoa | Thiago Abrantes" },
      { name: "twitter:description", content: "Orientação para comprar seu imóvel em João Pessoa, PB, e entender o financiamento e o Minha Casa, Minha Vida." },
      { name: "twitter:image", content: new URL(fotoThiago, SITE_URL).href },
    ],

  }),
  component: Index,
});

function WhatsAppLink({ href = WHATSAPP, children, variant = "gold", className = "" }: { href?: string; children: React.ReactNode; variant?: "gold" | "heroOutline"; className?: string }) {
  return (
    <Button asChild size="lg" variant={variant} className={className}>
      <a href={href} target="_blank" rel="noreferrer"><MessageCircle />{children}</a>
    </Button>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="min-w-0 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring" aria-label="Ir para o início">
            <span className="block truncate font-display text-2xl font-bold leading-none">Thiago Abrantes</span>
            <span className="mt-1 block truncate text-[0.68rem] font-medium uppercase tracking-[0.14em] text-primary-foreground/65">Corretor de imóveis | CRECI 5760-F</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navigation.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-accent focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring">{label}</a>)}
            <WhatsAppLink className="h-11 px-5 text-sm">Falar no WhatsApp</WhatsAppLink>
          </nav>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-hero-soft hover:text-accent lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-foreground/10 bg-primary px-5 py-5 lg:hidden" aria-label="Navegação no celular">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="rounded-md px-3 py-3 text-base font-medium text-primary-foreground/85 hover:bg-hero-soft hover:text-accent">{label}</a>)}
              <WhatsAppLink className="mt-3 w-full">Falar no WhatsApp</WhatsAppLink>
            </div>
          </nav>
        )}
      </header>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Thiago Abrantes",
        jobTitle: "Corretor de imóveis",
        url: SITE_URL,
        image: new URL(fotoThiago, SITE_URL).href,
        telephone: "+55-83-99116-3599",
        workLocation: { "@type": "Place", name: "João Pessoa, Paraíba, Brasil" },
      }).replace(/</g, "\u003c") }} />
      <main>
        <section id="inicio" className="relative flex min-h-[720px] items-center overflow-hidden bg-primary pt-20 md:min-h-[780px]">
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-lighting absolute inset-0" aria-hidden="true" />
            <svg className="absolute inset-0 size-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
              <g fill="none" strokeLinecap="round">
                <path d="M-80 640C180 560 320 420 560 400s380 90 620 10 340-210 420-300" stroke="currentColor" className="text-primary-foreground/10" strokeWidth="1.2" />
                <path d="M-80 700C200 640 360 500 620 470s420 100 640 0 300-230 360-330" stroke="currentColor" className="text-primary-foreground/[0.07]" strokeWidth="1" />
                <path d="M-60 560C220 500 380 340 660 320s400 120 640 30" stroke="currentColor" className="text-accent/20" strokeWidth="1" />
                <path d="M900 -60C860 140 980 260 1180 320s280 160 320 300" stroke="currentColor" className="text-primary-foreground/[0.06]" strokeWidth="1" />
                <path d="M1020 -40C980 180 1120 300 1340 380" stroke="currentColor" className="text-accent/15" strokeWidth="1" />
              </g>
            </svg>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl text-primary-foreground">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"><BadgeCheck className="size-4" /> Thiago Abrantes • CRECI 5760-F</div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-8xl">Sua casa própria em João Pessoa começa aqui.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">Conte com Thiago Abrantes, corretor de imóveis em João Pessoa, na Paraíba, para encontrar um imóvel que combine com sua rotina e seu orçamento. Receba orientação da escolha à entrega das chaves.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink className="w-full sm:w-auto">Quero conquistar meu imóvel <ArrowRight /></WhatsAppLink>
                <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto"><a href="#como-funciona">Entenda como funciona <ChevronRight /></a></Button>
              </div>
            </div>
          </div>
        </section>

        <section id="minha-casa-minha-vida" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <SectionLabel>Minha Casa, Minha Vida</SectionLabel>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">Minha Casa, Minha Vida em João Pessoa</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end lg:text-lg">Quer comprar seu imóvel em João Pessoa pelo Minha Casa, Minha Vida? Entenda os critérios da modalidade financiada e as condições que podem se aplicar à sua renda familiar e ao imóvel escolhido.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="group rounded-lg border border-border bg-surface p-7 shadow-soft transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-md bg-secondary text-accent-strong"><Icon /></span><span className="font-display text-3xl font-bold text-primary/10">0{index + 1}</span></div>
                  <h3 className="mt-7 text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <WhatsAppLink href={WHATSAPP_MCMV}>Quero saber se posso participar <ArrowRight /></WhatsAppLink>
              <p className="max-w-2xl text-xs leading-5 text-muted-foreground">A participação no programa, os benefícios e as condições de financiamento dependem das regras vigentes, do imóvel e da análise da instituição financeira.</p>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel light>Como funciona</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Como comprar seu imóvel com financiamento</h2>
            </div>
            <div className="relative mt-16 grid gap-5 md:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-line md:block" />
              {steps.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="relative grid grid-cols-[auto_1fr] gap-5 rounded-lg border border-primary-foreground/10 bg-hero-soft p-5 backdrop-blur-sm md:block md:border-0 md:bg-transparent md:p-0 md:text-center md:backdrop-blur-none">
                  <div className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border border-accent/70 bg-primary text-accent md:mx-auto md:size-[4.5rem]"><Icon className="size-6" /></div>
                  <div className="min-w-0 md:mt-6"><span className="text-xs font-bold text-accent">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-1 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/65">{description}</p></div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><WhatsAppLink>Quero dar o primeiro passo <ArrowRight /></WhatsAppLink></div>
          </div>
        </section>

        <section id="sobre" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-lg bg-primary shadow-soft">
              <img
                src={fotoThiago}
                alt="Thiago Abrantes, corretor de imóveis em João Pessoa, Paraíba"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground">CRECI 5760-F</div>
            </div>
            <div>
              <SectionLabel>Sobre o corretor</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-6xl">Conheça Thiago Abrantes</h2>
              <p className="mt-3 font-semibold text-accent-strong">Corretor de imóveis em João Pessoa, PB | CRECI 5760-F</p>
              <div className="mt-7 space-y-4 text-base leading-8 text-muted-foreground sm:text-lg"><p>Sou Thiago Abrantes, corretor de imóveis em João Pessoa, na Paraíba. Meu compromisso é ouvir o que você procura, esclarecer suas dúvidas e orientar sua compra com atenção ao seu orçamento e ao seu momento de vida.</p><p>Na busca pelo seu imóvel, vamos considerar o que faz diferença no dia a dia: localização, acesso ao trabalho, serviços próximos e necessidades da sua família. Da primeira conversa à entrega das chaves, você conta com um atendimento próximo e claro.</p></div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Atendimento personalizado", "Clareza em cada etapa", "Foco nas suas necessidades"].map((item) => <li key={item} className="flex items-start gap-2 border-t border-border pt-4 text-sm font-semibold text-primary"><Check className="mt-0.5 size-4 shrink-0 text-accent-strong" />{item}</li>)}
              </ul>
              <WhatsAppLink className="mt-9">Conversar com Thiago <ArrowRight /></WhatsAppLink>
            </div>
          </div>
        </section>

        <section id="duvidas" className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">Dúvidas sobre comprar um imóvel em João Pessoa</h2>
            <div className="mt-10 divide-y divide-border">
              {questions.map(({ question, answer }) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer text-lg font-semibold text-primary focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring">{question}</summary>
                  <p className="mt-4 leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">Consulte também as informações oficiais da <a href="https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/urbana/Paginas/default.aspx" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">CAIXA sobre o Minha Casa, Minha Vida</a>.</p>
          </div>
        </section>
        <section className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <Sparkles className="mx-auto size-8 text-accent" />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Vamos conversar sobre a sua casa própria?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/70">Conte em qual região de João Pessoa você quer morar e o que procura no seu imóvel. Fale com Thiago Abrantes pelo WhatsApp para entender os próximos passos.</p>
            <WhatsAppLink className="mt-8">Iniciar conversa no WhatsApp <ArrowRight /></WhatsAppLink>
          </div>
        </section>
      </main>

      <footer className="bg-background pb-28 pt-12 sm:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div><p className="font-display text-2xl font-bold text-primary">Thiago Abrantes — Corretor de imóveis</p><p className="mt-2 text-sm text-muted-foreground">João Pessoa, Paraíba · CRECI 5760-F</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-primary hover:text-accent-strong">WhatsApp: (83) 99116-3599</a></div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Navegação do rodapé">{navigation.map(([label, href]) => <a key={href} href={href} className="text-xs font-semibold text-muted-foreground hover:text-primary">{label}</a>)}</nav>
          <div className="border-t border-border pt-5 text-xs text-muted-foreground md:col-span-2">© {new Date().getFullYear()} Thiago Abrantes. Todos os direitos reservados.</div>
        </div>
      </footer>

      <Button asChild variant="gold" size="icon" className="fixed bottom-5 right-5 z-40 size-14 rounded-full shadow-gold sm:bottom-7 sm:right-7" aria-label="Conversar com Thiago pelo WhatsApp">
        <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="size-6" /></a>
      </Button>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${light ? "text-accent" : "text-accent-strong"}`}><ShieldCheck className="size-4" />{children}</div>;
}