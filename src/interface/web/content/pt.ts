/**
 * LAYER: Interface
 * Contains: Content pt (Português)
 * Rules: Apenas dados.
 */

import type { Content } from "./types";

export const pt: Content = {
  brand: "Radar de logs",
  nav: {
    how: "Como funciona",
    cases: "Casos de uso",
    faq: "FAQ",
    try: "Testar",
  },
  hero: {
    h1: "Destaque as anomalias dos seus logs",
    subtitle:
      "Cole centenas de linhas de um contêiner. O radar pondera o padrão dominante e joga para o topo o que foge da norma. Sem rótulos, sem supervisão, 100% no seu navegador.",
  },
  howItWorks: {
    title: "Como funciona",
    steps: [
      {
        title: "Cole seus logs",
        body: "Copie a saída do seu contêiner (Portainer, Docker, k8s) e cole o texto. Nada é enviado a servidor algum.",
      },
      {
        title: "O modelo pondera o padrão",
        body: "Cada linha vira um embedding e um centroide ponderado por frequência é calculado: o “log normal”.",
      },
      {
        title: "O raro sobe para o topo",
        body: "Cada linha é pontuada pela distância cosseno ao centroide. As mais distantes são as que valem a pena olhar.",
      },
    ],
  },
  useCases: { title: "Casos de uso" },
  trust: {
    title: "Privacidade",
    body: "Seus logs nunca saem do navegador. O modelo roda localmente via WebAssembly; sem servidor, sem envio de dados, sem conta.",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Meus logs são enviados a algum servidor?",
        a: "Não. A análise roda 100% no seu navegador com transformers.js. O modelo é baixado uma vez e todo o processamento é local.",
      },
      {
        q: "Preciso rotular dados de treino?",
        a: "Não. É não supervisionado: o padrão dominante é calculado apenas por frequência e distância cosseno.",
      },
      {
        q: "Qual modelo usa?",
        a: "Xenova/all-MiniLM-L6-v2, 22M de parâmetros, quantizado em q8. Rápido e leve para centenas de linhas curtas.",
      },
      {
        q: "Funciona com logs com timestamp?",
        a: "Sim. Mesmo quando cada linha é textualmente diferente, o embedding agrupa as semanticamente iguais.",
      },
      {
        q: "Quantas linhas posso analisar?",
        a: "Centenas sem problema. O gargalo não é o navegador, é colar mais do que o olho consegue revisar.",
      },
    ],
  },
  features: {
    title: "Funcionalidades",
    items: [
      {
        label: "Não supervisionado",
        body: "Sem rótulos, sem treino. O padrão normal emerge só da frequência.",
      },
      {
        label: "100% local",
        body: "O modelo roda no seu navegador. Zero envio de dados, zero servidores.",
      },
      {
        label: "Rápido",
        body: "22M de parâmetros quantizados. Centenas de linhas em milissegundos após a carga inicial.",
      },
      {
        label: "Grátis e sem limites",
        body: "Sem contas, sem cotas, sem limites de uso.",
      },
      {
        label: "Agnóstico de stack",
        body: "Serve para qualquer texto: logs, saída de build, CSV, o que você colar.",
      },
    ],
  },
  relatedTitle: "Relacionados",
  footer: {
    tagline:
      "Destaque de anomalias em logs por embeddings. Sem rótulos, sem supervisão, 100% local.",
    casesTitle: "Casos de uso",
    resourcesTitle: "Recursos",
    how: "Como funciona",
    faq: "Perguntas frequentes",
    privacy: "Privacidade",
  },
  tool: {
    placeholder: "Cole seus logs aqui…",
    analyze: "Analisar",
    loadSample: "Carregar exemplo",
    loadingModel: "Baixando modelo (só na primeira vez)…",
    analyzing: "Analisando…",
    resultTitle: "Resultado",
    linesMeta: "{total} linhas · {unique} únicas",
    footerNote:
      "Ordenado por distância cosseno ao centroide ponderado. Topo = mais anômalo. A barra vermelha marca as linhas que quebram o padrão dominante.",
  },
  landings: [
    {
      slug: "errores",
      label: "Erros de produção",
      description:
        "Encontre o stack trace enterrado entre milhares de health checks.",
      h1: "Encontre o erro entre mil linhas",
      intro: [
        "95% de um log de contêiner é ruído repetitivo: o mesmo GET /health 200 de novo e de novo. O erro real —a exceção, o stack trace, a conexão caída— está enterrado ali no meio, e o olho cansa de escanear.",
        "O Radar de logs transforma cada linha em um embedding e calcula o padrão dominante do arquivo. As linhas que se afastam desse padrão são, quase sempre, as que explicam o incidente. Não precisa dizer ao modelo o que é um erro: ele emerge sozinho.",
        "Cole o log do seu contêiner e olhe o topo da lista. É lá que está o que importa.",
      ],
      faq: [
        {
          q: "Detecta exceções sem treinar?",
          a: "Sim. Não busca palavras-chave: pondera o que é normal e marca o que se afasta, seja um stack trace, um 500 ou uma conexão recusada.",
        },
        {
          q: "Serve para logs com stack trace multilinha?",
          a: "Sim. Cada linha é analisada separadamente, e as linhas de um stack trace costumam ficar agrupadas no topo do ranking.",
        },
        {
          q: "E se o erro for uma única linha?",
          a: "É o caso ideal: uma linha única e diferente do padrão dominante pontua alto por distância cosseno.",
        },
      ],
    },
    {
      slug: "seguridad",
      label: "Segurança e acessos",
      description: "Detecte tentativas de login suspeitas ou acessos anômalos.",
      h1: "Detecte acessos anômalos nos seus logs",
      intro: [
        "Um login falho entre milhares de acessos normais não chama atenção à primeira vista. Mas para o radar é um sinal claro: ele se afasta do padrão de tráfego habitual.",
        "Sem regras predefinidas nem assinaturas. O padrão normal dos seus acessos é calculado por frequência, e o que desvia —força bruta, IPs novos, rotas raras— sobe para o topo.",
        "Cole o log de acessos e deixe o padrão falar.",
      ],
      faq: [
        {
          q: "É um SIEM ou um firewall?",
          a: "Não. É uma ferramenta de triagem: ordena o log para você olhar primeiro o anômalo. Não bloqueia nem alerta por conta própria.",
        },
        {
          q: "Detecta ataques conhecidos?",
          a: "Não busca assinaturas de ataques. Detecta desvio do padrão, que é o sinal de que algo diferente aconteceu.",
        },
        {
          q: "Posso analisar logs de auth?",
          a: "Sim, qualquer texto puro. Logs de acesso, auth e auditoria funcionam igualmente bem.",
        },
      ],
    },
    {
      slug: "rendimiento",
      label: "Desempenho",
      description: "Localize os endpoints lentos e os timeouts que quebram o padrão.",
      h1: "Localize os gargalos",
      intro: [
        "Os endpoints lentos, os timeouts e as tentativas se perdem entre os requests rápidos. O radar os separa porque quebram o padrão de latência normal.",
        "Cada linha de request é embutida e comparada com o centroide do seu tráfego. As respostas lentas e os erros de timeout ficam agrupados no topo, prontos para revisão.",
        "Cole o log de requests e encontre o endpoint que está travando tudo.",
      ],
      faq: [
        {
          q: "Mede latência?",
          a: "Não faz métricas numéricas: pondera o padrão do texto. Uma linha de 1450ms parece tão anômala quanto um timeout porque se afasta do padrão dominante.",
        },
        {
          q: "Serve para logs do nginx ou apache?",
          a: "Sim. Qualquer log de acesso em texto puro funciona.",
        },
        {
          q: "Substitui um APM?",
          a: "Não. É triagem rápida sem infraestrutura. Para métricas contínuas use um APM; para uma olhada imediata, o radar.",
        },
      ],
    },
    {
      slug: "despliegues",
      label: "Deploys e releases",
      description: "Compare o log do novo release com o padrão esperado.",
      h1: "Compare o novo release com o padrão",
      intro: [
        "Você fez deploy e agora o log mudou. O que há de novo? O radar pondera o padrão do release e separa o que aparece pela primeira vez.",
        "Sem configurar nada: cole o log do novo deploy e veja quais linhas se afastam do padrão. São as novidades, os novos warnings e os erros do release.",
        "Ideal para revisar uma saída de deploy antes de considerá-la boa.",
      ],
      faq: [
        {
          q: "Compara duas versões entre si?",
          a: "Não faz diff de arquivos. Pondera o padrão interno do log que você colou e destaca o que não encaixa.",
        },
        {
          q: "Serve para saídas de CI?",
          a: "Sim. Qualquer saída de build ou pipeline em texto puro pode ser analisada da mesma forma.",
        },
        {
          q: "Como sei o que é novo?",
          a: "O que é novo tende a ser pouco frequente e diferente do padrão dominante: sobe para o topo do ranking.",
        },
      ],
    },
  ],
};
