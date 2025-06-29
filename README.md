# 📝 Projeto Blog com Next.js 15, React 19 e Tailwind CSS

Este projeto é um blog moderno construído com Next.js 15, React 19 e outras
tecnologias de ponta. Ele implementa práticas avançadas como SSR, SSG, ISR,
Server Actions, autenticação via JWT e deploy completo em servidor Linux com
HTTPS e NGINX.

---

## 🚀 Tecnologias Utilizadas

- Next.js 15 (App Router, SSR, SSG, ISR, Middleware, Server Actions)
- React 19 (com Suspense e Transitions)
- Tailwind CSS (com tema escuro/claro + Tailwind Typography)
- Drizzle ORM (banco de dados relacional)
- TypeScript
- Zod (validação de formulários)
- React Markdown (renderização de conteúdo)
- React Toastify (notificações)
- clsx (condicionais de classe)
- slugify + uuid (para geração de URLs e IDs)
- bcrypt (hash de senhas)
- JWT (com a biblioteca jose)
- PM2 + NGINX + Certbot (deploy)

---

## 📂 Estrutura do Projeto

```
├── app/               # App Router do Next.js (páginas e layouts)
├── components/        # Componentes reutilizáveis da aplicação
├── drizzle/           # Schemas do banco com Drizzle ORM
├── lib/               # Funções utilitárias e repositórios
├── public/            # Arquivos públicos e imagens
├── styles/            # Estilos globais (Tailwind)
├── middleware.ts      # Middleware de autenticação
└── .env.local         # Variáveis de ambiente
```

---

## 🔐 Autenticação

- Login com JWT armazenado em cookies seguros
- Hash de senhas com Bcrypt
- Validação de credenciais no backend
- Middleware protegendo rotas sensíveis
- Server Actions com verificação de autenticação

---

## 🛠 Funcionalidades da Área Administrativa

- CRUD completo de posts
- Editor de Markdown com preview ao vivo
- Upload de imagens com validação de tamanho
- Feedbacks com React Toastify
- Layout responsivo com Tailwind
- Interface protegida com autenticação

---

## ⚙️ Scripts Principais

```bash
npm install         # Instala as dependências
npm run dev         # Inicia o servidor em modo desenvolvimento
npm run build       # Cria o build de produção
npm start           # Inicia o build em ambiente de produção
```

---

## 🌐 Deploy em Servidor Linux

Passos para deploy:

1. Criar instância Linux (ex: GCP)
2. Instalar Node.js, PM2, NGINX e Certbot
3. Clonar o repositório do GitHub
4. Criar o arquivo `.env.local`
5. Instalar dependências e buildar o projeto:

```bash
npm install
npm run build
pm2 start npm --name "blog" -- start
```

6. Configurar NGINX como proxy reverso nas portas 80/443
7. Habilitar HTTPS com Certbot e Let’s Encrypt

---

## 📄 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com:

```env
DATABASE_URL=URL_DO_BANCO_DE_DADOS
JWT_SECRET=SEGREDO_PARA_JWT
UPLOAD_FOLDER=CAMINHO_PARA_IMAGENS
```

---

## 📘 Aprendizados do Projeto

- Diferenças entre SSR, SSG, ISR e Client Components
- Uso de Server Actions e Server Components
- Criação e validação de formulários com Zod
- Autenticação segura e proteção de rotas
- Upload de arquivos e preview
- Cache com `use cache`, `revalidateTag` e `unstable_cache`
- Estrutura de projeto com padrões de repositório
- Deploy seguro e escalável com HTTPS e PM2

---

## 🧑‍💻 Autor

Projeto baseado em uma jornada prática de criação de um blog completo com
Next.js e tecnologias modernas de front e back-end.

---

## 📄 Licença

Este projeto tem finalidade educacional. Sinta-se à vontade para modificar, usar
como base ou expandir conforme necessário.
