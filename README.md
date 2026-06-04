<p align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">NestJS Fastify Serverless Template</h1>

<p align="center">
  Production-ready <b>NestJS</b> template using <b>Fastify</b>, designed for <b>serverless</b>, low-latency APIs and scalable backends.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/nestjs-11-red" />
  <img src="https://img.shields.io/badge/fastify-4-black" />
  <img src="https://img.shields.io/badge/runtime-node.js-green" />
  <img src="https://img.shields.io/badge/license-unlicensed-lightgrey" />
</p>

---

## 🚀 What is this?

This is a **minimal, production-grade NestJS template** running on **Fastify instead of Express**, designed for:

- Serverless runtimes (AWS Lambda, Cloudflare Workers via adapters, Fly.io, etc.)
- High-throughput APIs
- Low cold-start overhead
- Clean architecture without HTTP stack bloat

No Express.  
No legacy adapters.  
No cargo cult config.  
Just Nest + Fastify done right.

---

## 🧠 Stack

- **NestJS 11**
- **Fastify 4**
- **TypeScript 5**
- **Jest**
- **ESLint + Prettier**

## 📦 Project setup

```bash
pnpm install
```

---

## ☁️ Deployment on Vercel

If you are deploying this template to **Vercel**, you need to ensure the correct package manager version is used since this project relies on **pnpm 11**.

To configure this:

1. Go to your **Vercel Dashboard** → **Project Settings** → **Environment Variables**.
2. Add the following environment variable:
   - **Key:** `ENABLE_EXPERIMENTAL_COREPACK`
   - **Value:** `1`

This will activate Corepack in Vercel's build environment, ensuring it respects the `"packageManager"` field defined in your `package.json` and runs with the correct PNPM version.

