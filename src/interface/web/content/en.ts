/**
 * LAYER: Interface
 * Contains: Content en (English)
 * Rules: Data only.
 */

import type { Content } from "./types";

export const en: Content = {
  brand: "Log Radar",
  nav: {
    how: "How it works",
    cases: "Use cases",
    faq: "FAQ",
    try: "Try it",
  },
  hero: {
    h1: "Highlight anomalies in your logs",
    subtitle:
      "Paste hundreds of lines from a container. The radar weighs the dominant pattern and pushes whatever breaks the norm to the top. No labels, no supervision, 100% in your browser.",
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Paste your logs",
        body: "Copy the output of your container (Portainer, Docker, k8s) and paste the text. Nothing is uploaded to any server.",
      },
      {
        title: "The model weighs the pattern",
        body: "Each line is turned into an embedding and a frequency-weighted centroid is computed: the “normal log”.",
      },
      {
        title: "The weird stuff rises to the top",
        body: "Each line is scored by cosine distance to the centroid. The furthest lines are the ones worth looking at.",
      },
    ],
  },
  useCases: { title: "Use cases" },
  trust: {
    title: "Privacy",
    body: "Your logs never leave your browser. The model runs locally via WebAssembly; no server, no data transfer, no account.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Are my logs uploaded to a server?",
        a: "No. Analysis runs 100% in your browser with transformers.js. The model is downloaded once and all compute is local.",
      },
      {
        q: "Do I need to label training data?",
        a: "No. It's unsupervised: the dominant pattern is computed from frequency and cosine distance alone.",
      },
      {
        q: "Which model does it use?",
        a: "Xenova/all-MiniLM-L6-v2, 22M parameters, quantized to q8. Fast and lightweight for hundreds of short lines.",
      },
      {
        q: "Does it work with timestamped logs?",
        a: "Yes. Even when each line is textually different, the embedding groups the semantically equal ones.",
      },
      {
        q: "How many lines can I analyze?",
        a: "Hundreds without breaking a sweat. The bottleneck isn't the browser — it's pasting more than the eye can review.",
      },
    ],
  },
  features: {
    title: "Features",
    items: [
      {
        label: "Unsupervised",
        body: "No labels, no training. The normal pattern emerges from frequency alone.",
      },
      {
        label: "100% local",
        body: "The model runs in your browser. Zero data transfer, zero servers.",
      },
      {
        label: "Fast",
        body: "22M quantized parameters. Hundreds of lines in milliseconds after the initial load.",
      },
      {
        label: "Free and unlimited",
        body: "No accounts, no quotas, no usage limits.",
      },
      {
        label: "Stack-agnostic",
        body: "Works on any text: logs, build output, CSV, whatever you paste.",
      },
    ],
  },
  relatedTitle: "Related",
  footer: {
    tagline:
      "Embedding-based log anomaly highlighter. No labels, no supervision, 100% local.",
    casesTitle: "Use cases",
    resourcesTitle: "Resources",
    how: "How it works",
    faq: "FAQ",
    privacy: "Privacy",
  },
  tool: {
    placeholder: "Paste your logs here…",
    analyze: "Analyze",
    loadSample: "Load example",
    loadingModel: "Downloading model (first time only)…",
    analyzing: "Analyzing…",
    resultTitle: "Result",
    linesMeta: "{total} lines · {unique} unique",
    footerNote:
      "Sorted by cosine distance to the weighted centroid. Top = most anomalous. The red bar marks lines that break the dominant pattern.",
  },
  landings: [
    {
      slug: "errores",
      label: "Production errors",
      description:
        "Find the stack trace buried among thousands of health checks.",
      h1: "Find the error among a thousand lines",
      intro: [
        "95% of a container log is repetitive noise: the same GET /health 200 over and over. The real error —the exception, the stack trace, the dropped connection— is buried somewhere in the middle, and your eyes get tired of scanning.",
        "Radar de logs turns each line into an embedding and computes the file's dominant pattern. The lines that drift from that pattern are almost always the ones that explain the incident. You don't have to tell the model what an error is: it emerges on its own.",
        "Paste your container log and look at the top of the list. That's where the signal is.",
      ],
      faq: [
        {
          q: "Does it detect exceptions without training?",
          a: "Yes. It doesn't look for keywords: it weighs what's normal and flags what drifts, whether it's a stack trace, a 500, or a refused connection.",
        },
        {
          q: "Does it handle multi-line stack traces?",
          a: "Yes. Each line is analyzed separately, and stack trace lines usually cluster at the top of the ranking.",
        },
        {
          q: "What if the error is a single line?",
          a: "That's the ideal case: a single line that differs from the dominant pattern scores high on cosine distance.",
        },
      ],
    },
    {
      slug: "seguridad",
      label: "Security & access",
      description: "Spot suspicious login attempts or anomalous access.",
      h1: "Detect anomalous access in your logs",
      intro: [
        "One failed login among thousands of normal requests doesn't stand out to the naked eye. But to the radar it's a clear signal: it drifts from the usual traffic pattern.",
        "No predefined rules or signatures. The normal pattern of your access logs is computed by frequency, and whatever deviates —brute force, new IPs, odd routes— rises to the top.",
        "Paste your access log and let the pattern speak.",
      ],
      faq: [
        {
          q: "Is this a SIEM or a firewall?",
          a: "No. It's a triage tool: it orders your log so you look at anomalies first. It doesn't block or alert on its own.",
        },
        {
          q: "Does it detect known attacks?",
          a: "It doesn't look for attack signatures. It detects deviation from the pattern, which is the signal that something different happened.",
        },
        {
          q: "Can I analyze auth logs?",
          a: "Yes, any plain text. Access, auth, and audit logs work equally well.",
        },
      ],
    },
    {
      slug: "rendimiento",
      label: "Performance",
      description: "Spot slow endpoints and timeouts that break the pattern.",
      h1: "Spot the bottlenecks",
      intro: [
        "Slow endpoints, timeouts, and retries get lost among fast requests. The radar separates them because they break the normal latency pattern.",
        "Each request line is embedded and compared to your traffic's centroid. Slow responses and timeout errors cluster at the top, ready to review.",
        "Paste your request log and find the endpoint that's dragging everything down.",
      ],
      faq: [
        {
          q: "Does it measure latency?",
          a: "It doesn't do numeric metrics: it weighs the text pattern. A 1450ms line looks as anomalous as a timeout because it drifts from the dominant pattern.",
        },
        {
          q: "Does it work with nginx or apache logs?",
          a: "Yes. Any plain-text access log works.",
        },
        {
          q: "Does it replace an APM?",
          a: "No. It's fast triage without infrastructure. For continuous metrics use an APM; for an immediate look, the radar.",
        },
      ],
    },
    {
      slug: "despliegues",
      label: "Deployments & releases",
      description: "Compare the new release's log against the expected pattern.",
      h1: "Compare the new release against the pattern",
      intro: [
        "You deployed and now the log changed. What's new? The radar weighs the release's pattern and separates what appears for the first time.",
        "No configuration: paste the new deploy's log and see which lines drift from the pattern. Those are the new warnings and the release's errors.",
        "Ideal for reviewing a deploy output before calling it good.",
      ],
      faq: [
        {
          q: "Does it compare two versions against each other?",
          a: "It doesn't diff files. It weighs the internal pattern of the log you paste and highlights what doesn't fit.",
        },
        {
          q: "Does it work with CI output?",
          a: "Yes. Any plain-text build or pipeline output can be analyzed the same way.",
        },
        {
          q: "How do I know what's new?",
          a: "New lines tend to be infrequent and different from the dominant pattern: they rise to the top of the ranking.",
        },
      ],
    },
  ],
};
