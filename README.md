![CI (Lint & Build)](https://github.com/dannielcristie/rede-nave-frontend-react/actions/workflows/ci.yml/badge.svg)

# Rede Nave - Frontend

Interface web moderna para a plataforma de cursos **Rede Nave**, focada no empoderamento feminino através do empreendedorismo.

## 🚀 Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

- **Axios**: Consumo de API.
- **Context API**: Gerenciamento de estado global (Autenticação).
- **Lucide React**: Ícones modernos.

## ✨ Funcionalidades

- **Autenticação Completa**:
  - Login e Cadastro (integração com backend).
  - Proteção de rotas privadas.
- **Dashboard da Aluna**:
  - Visualização de cursos matriculados.
  - Barra de progresso das aulas.
  - Eventos e estatísticas de estudo.
- **Player de Cursos**:
  - Reprodução de vídeo aulas.
  - Navegação entre módulos e lições.
  - Modo Claro/Escuro.

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js (v18+)
- Backend rodando localmente (veja `rede-nave-backend`).

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto (opcional se o backend rodar na porta 3000):

```env
VITE_API_URL="http://localhost:3000/api"
```

### 3. Rodar o Projeto

**Modo Desenvolvimento:**
```bash
npm run dev
```
Acesse: [http://localhost:5173](http://localhost:5173)

**Modo Produção (Build):**
```bash
npm run build
npm run preview
```

### Opção via Docker Compose
Certifique-se de ter o Docker instalado e execute na raiz:
```bash
docker compose up -d
```

## 🎨 Design Review

Link para o Figma oficial do projeto.
- [Acessar Figma](https://www.figma.com/make/OklaMDG7BoiAJbwmUCSXUJ/Landing-Page-para-Plataforma-de-Curso?node-id=0-1&t=eLY4Jdu0ETNJGxIn-1)
- [Baixar Assets (.zip)](project.zip)

## 🤝 Contribuição

Veja nosso [Guia de Contribuição](CONTRIBUTING.md) para padrões de commit e fluxo de trabalho.
