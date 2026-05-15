# CLAUDE.md

## Comandos

```bash
npm run dev       # servidor local em http://localhost:5173
npm run build     # gera dist/ para produção
npm run preview   # serve o dist/ localmente
```

Deploy: automático via Vercel ao fazer push para `main`.

## Arquitetura

React 18 + Vite + TypeScript. Sem roteamento — app de página única.

```
src/
  data/treinos.ts         # fonte de dados: array de treinos com tipos
  components/
    TreinoCard.tsx        # renderiza tabela de exercícios de um treino
  App.tsx                 # layout geral: header, lista de TreinoCards, footer
  main.tsx                # entry point
  index.css               # estilos globais (sem CSS modules)
```

### Estrutura de dados (`treinos.ts`)

```ts
interface Exercicio {
  imgSrc: string   // URL de GIF animado (fitnessprogramer.com)
  imgAlt: string
  musculos: string
  exercicio: string
  series: number
  repeticoes: string  // ex: '12-10-8-6'
  intervalo: string
  tecnica: string
}

interface Treino {
  id: string        // 'A' | 'B' | 'C' | 'D' | 'E'
  titulo: string
  subtitulo: string
  exercicios: Exercicio[]
}
```

## Contexto do Projeto

Ficha de treino da aluna Karla Terra. Programa de Periodização de Glúteos com 5 dias/semana (A–E).

Treinos ficam em `Treinos/Karla/treino-DD-MM-YYYY.md` (um arquivo por bloco).
O app React exibe sempre o bloco atual definido em `src/data/treinos.ts`.

## Preferências e Fluxo de Trabalho

- Novo treino: criar `.md` em `Treinos/Karla/` → atualizar `treinos.ts` → build → push para `main`
- Exercícios variam a cada bloco para evitar adaptação, mantendo o foco em glúteos 4x/semana
- Upper body apenas 1x/semana (Treino A)
- Sistema de pirâmide crescente: mais reps com menos peso → menos reps com mais peso por série
- Deload na semana 9 de cada bloco (−50% volume, −20–30% carga)
- Sem arquivos HTML de treino — usar apenas `.md` + React/TypeScript
- GIFs vêm de `fitnessprogramer.com` ou `inspireusafoundation.org`
