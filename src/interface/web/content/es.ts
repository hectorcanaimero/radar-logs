/**
 * LAYER: Interface
 * Contains: Content es (español)
 * Rules: Solo datos.
 */

import type { Content } from "./types";

export const es: Content = {
  brand: "Radar de logs",
  nav: {
    how: "Cómo funciona",
    cases: "Casos de uso",
    faq: "FAQ",
    try: "Probar",
  },
  hero: {
    h1: "Resaltá las anomalías de tus logs",
    subtitle:
      "Pegá cientos de líneas de un contenedor. El radar pondera el patrón dominante y sube al tope lo que se sale de la norma. Sin etiquetas, sin supervisión, 100% en tu navegador.",
  },
  howItWorks: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Pegá tus logs",
        body: "Copiá la salida de tu contenedor (Portainer, Docker, k8s) y pegá el texto. Nada se sube a ningún servidor.",
      },
      {
        title: "El modelo pondera el patrón",
        body: "Cada línea se convierte en un embedding y se calcula el centroide ponderado por frecuencia: el “log normal”.",
      },
      {
        title: "Lo raro sube al tope",
        body: "Cada línea se puntúa por distancia coseno al centroide. Las que más se alejan son las que vale la pena mirar.",
      },
    ],
  },
  useCases: { title: "Casos de uso" },
  trust: {
    title: "Privacidad",
    body: "Tus logs nunca salen de tu navegador. El modelo corre localmente vía WebAssembly; no hay servidor, no hay envío de datos, no hay cuenta.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Mis logs se suben a algún servidor?",
        a: "No. El análisis corre 100% en tu navegador con transformers.js. El modelo se descarga una sola vez y todo el cómputo es local.",
      },
      {
        q: "¿Necesito etiquetar datos de entrenamiento?",
        a: "No. Es sin supervisión: el patrón dominante se calcula solo por frecuencia y distancia coseno.",
      },
      {
        q: "¿Qué modelo usa?",
        a: "Xenova/all-MiniLM-L6-v2, 22M de parámetros, cuantizado a q8. Rápido y liviano para cientos de líneas cortas.",
      },
      {
        q: "¿Funciona con logs que tienen timestamp?",
        a: "Sí. Aunque cada línea sea textualmente distinta, el embedding agrupa las que son semánticamente iguales.",
      },
      {
        q: "¿Cuántas líneas puedo analizar?",
        a: "Cientos sin problema. El cuello de botella no es el navegador, es pegar más de lo que el ojo puede revisar.",
      },
    ],
  },
  features: {
    title: "Funcionalidades",
    items: [
      {
        label: "Sin supervisión",
        body: "No hay etiquetas ni entrenamiento. El patrón normal emerge solo de la frecuencia.",
      },
      {
        label: "100% local",
        body: "El modelo corre en tu navegador. Cero envío de datos, cero servidores.",
      },
      {
        label: "Rápido",
        body: "22M de parámetros cuantizados. Cientos de líneas en milisegundos tras la carga inicial.",
      },
      {
        label: "Gratis y sin límites",
        body: "Sin cuentas, sin cuotas, sin límites de uso.",
      },
      {
        label: "Agnóstico de stack",
        body: "Sirve para cualquier texto: logs, salidas de build, CSV, lo que pegues.",
      },
    ],
  },
  relatedTitle: "Relacionado",
  footer: {
    tagline:
      "Resaltador de anomalías en logs por embeddings. Sin etiquetas, sin supervisión, 100% local.",
    casesTitle: "Casos de uso",
    resourcesTitle: "Recursos",
    how: "Cómo funciona",
    faq: "Preguntas frecuentes",
    privacy: "Privacidad",
  },
  tool: {
    placeholder: "Pegá tus logs acá…",
    analyze: "Analizar",
    loadSample: "Cargar ejemplo",
    loadingModel: "Descargando modelo (solo la primera vez)…",
    analyzing: "Analizando…",
    resultTitle: "Resultado",
    linesMeta: "{total} líneas · {unique} únicas",
    footerNote:
      "Ordenado por distancia coseno al centroide ponderado. Arriba = más anómalo. La barra roja marca las líneas que rompen el patrón dominante.",
  },
  landings: [
    {
      slug: "errores",
      label: "Errores de producción",
      description:
        "Encontrá el stack trace enterrado entre miles de health checks.",
      h1: "Encontrá el error entre mil líneas",
      intro: [
        "El 95% de un log de contenedor es ruido repetitivo: el mismo GET /health 200 una y otra vez. El error real —la excepción, el stack trace, la conexión caída— está enterrado ahí en el medio, y el ojo se cansa de escanear.",
        "Radar de logs convierte cada línea en un embedding y calcula el patrón dominante del archivo. Las líneas que se alejan de ese patrón son, casi siempre, las que explican el incidente. No hace falta decirle al modelo qué es un error: emerge solo.",
        "Pegá el log de tu contenedor y mirá arriba de la lista. Ahí está lo que importa.",
      ],
      faq: [
        {
          q: "¿Detecta excepciones sin entrenar?",
          a: "Sí. No busca palabras clave: pondera qué es lo normal y marca lo que se aleja, sea un stack trace, un 500 o una conexión rechazada.",
        },
        {
          q: "¿Sirve para logs con stack trace multilínea?",
          a: "Sí. Cada línea se analiza por separado, y las líneas de un stack trace suelen quedar agrupadas arriba del ranking.",
        },
        {
          q: "¿Y si el error es una sola línea?",
          a: "Justo el caso ideal: una línea única y distinta al patrón dominante puntúa alto por distancia coseno.",
        },
      ],
    },
    {
      slug: "seguridad",
      label: "Seguridad y accesos",
      description: "Detectá intentos de login sospechosos o accesos anómalos.",
      h1: "Detectá accesos anómalos en tus logs",
      intro: [
        "Un intento de login fallido entre miles de accesos normales no llama la atención a simple vista. Pero para el radar es una señal clara: se aleja del patrón de tráfico habitual.",
        "Sin reglas predefinidas ni firmas. El patrón normal de tus accesos se calcula por frecuencia, y lo que se desvía —fuerza bruta, IPs nuevas, rutas raras— sube al tope.",
        "Pegá el log de accesos y dejá que el patrón hable.",
      ],
      faq: [
        {
          q: "¿Es un SIEM o un firewall?",
          a: "No. Es una herramienta de triaje: te ordena el log para que mires primero lo anómalo. No bloquea ni alerta por sí solo.",
        },
        {
          q: "¿Detecta ataques conocidos?",
          a: "No busca firmas de ataques. Detecta desviación del patrón, que es la señal de que algo distinto pasó.",
        },
        {
          q: "¿Puedo analizar logs de auth?",
          a: "Sí, cualquier texto plano. Los logs de acceso, auth y auditoría funcionan igual de bien.",
        },
      ],
    },
    {
      slug: "rendimiento",
      label: "Rendimiento",
      description: "Ubicá los endpoints lentos y los timeouts que rompen el patrón.",
      h1: "Ubicá los cuellos de botella",
      intro: [
        "Los endpoints lentos, los timeouts y los reintentos se pierden entre los requests rápidos. El radar los separa porque rompen el patrón de latencia normal.",
        "Cada línea de request se embebe y se compara con el centroide de tu tráfico. Las respuestas lentas y los errores de timeout quedan agrupados arriba, listos para revisar.",
        "Pegá el log de requests y encontrá el endpoint que está frenando todo.",
      ],
      faq: [
        {
          q: "¿Mide latencia?",
          a: "No hace métricas numéricas: pondera el patrón del texto. Una línea de 1450ms se ve tan anómala como un timeout porque se aleja del patrón dominante.",
        },
        {
          q: "¿Sirve para logs de nginx o apache?",
          a: "Sí. Cualquier log de acceso en texto plano funciona.",
        },
        {
          q: "¿Reemplaza un APM?",
          a: "No. Es triaje rápido sin infraestructura. Para métricas continuas usá un APM; para un vistazo inmediato, el radar.",
        },
      ],
    },
    {
      slug: "despliegues",
      label: "Despliegues y releases",
      description: "Compará el log del release nuevo contra el patrón esperado.",
      h1: "Compará el release nuevo contra el patrón",
      intro: [
        "Desplegaste y ahora el log cambió. ¿Qué hay de nuevo? El radar pondera el patrón del release y separa lo que aparece por primera vez.",
        "Sin configurar nada: pegá el log del deploy nuevo y mirá qué líneas se alejan del patrón. Son las novedades, los warnings nuevos y los errores del release.",
        "Ideal para revisar una salida de deploy antes de darla por buena.",
      ],
      faq: [
        {
          q: "¿Compara dos versiones entre sí?",
          a: "No difea archivos. Pondera el patrón interno del log que pegues y resalta lo que no encaja.",
        },
        {
          q: "¿Sirve para salidas de CI?",
          a: "Sí. Cualquier salida de build o pipeline en texto plano se puede analizar igual.",
        },
        {
          q: "¿Cómo sé qué es nuevo?",
          a: "Lo nuevo tiende a ser poco frecuente y distinto al patrón dominante: sube al tope del ranking.",
        },
      ],
    },
  ],
};
