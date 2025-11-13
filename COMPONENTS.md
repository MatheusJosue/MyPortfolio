# 📚 Documentação de Componentes

## Componentes Criados

### 1. **Header**

**Localização**: `src/components/Header/`

Navbar responsiva com:

- Logo com gradient
- Links de navegação com efeito underline
- Menu mobile toggle
- Theme toggle (escuro/claro)
- Sticky ao topo com blur background

**Uso**:

```tsx
import { Header } from "@/components/Header/Header";

<Header />;
```

---

### 2. **Footer**

**Localização**: `src/components/Footer/`

Footer com:

- Links de seções
- Ícones sociais (WhatsApp, LinkedIn, GitHub, Email)
- Divider e copyright
- Totalmente responsivo

**Uso**:

```tsx
import { Footer } from "@/components/Footer/Footer";

<Footer />;
```

---

### 3. **Hero**

**Localização**: `src/components/Hero/`

Seção hero impactante com:

- Título grande e responsivo
- Subtítulo com gradient
- Descrição concisa
- Botões CTA (primário e secundário)
- Stats (anos de experiência, projetos, clientes)
- Decoração com gradient flutuante
- Animações via Framer Motion

**Uso**:

```tsx
import { Hero } from "@/components/Hero/Hero";

<Hero />;
```

---

### 4. **About**

**Localização**: `src/components/About/`

Seção sobre com:

- Título com underline animado
- Introdução profissional
- Grid de highlights (4 cards)
- CTA para contato
- Animações de entrada

**Uso**:

```tsx
import { About } from "@/components/About/About";

<About />;
```

---

### 5. **Skills**

**Localização**: `src/components/Skills/`

Showcase de tecnologias com:

- Dois categorias: Frontend e Backend & Tools
- Cards com ícones de cada tecnologia
- Lista adicional de competências
- Hover effects e animações
- Grid responsivo

**Uso**:

```tsx
import { Skills } from "@/components/Skills/Skills";

<Skills />;
```

**Tecnologias incluídas**:

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Git, Docker, Jest
- Competências: SSR/SSG/ISR, Performance, Acessibilidade, Testes, CI/CD, etc.

---

### 6. **Projects**

**Localização**: `src/components/Projects/`

Showcase de projetos com:

- Grid de cards responsivo
- Imagem placeholder com emoji
- Badge de status (Em Desenvolvimento/Concluído)
- Descrição e tecnologias
- Links para Demo e GitHub
- Hover animations

**Uso**:

```tsx
import { Projects } from "@/components/Projects/Projects";

<Projects />;
```

**Projetos de exemplo**:

1. Painel Admin com Next.js 14
2. Plataforma de Agendamentos
3. E-commerce Escalável

---

### 7. **Contact**

**Localização**: `src/components/Contact/`

Seção de contato com:

- Cards para cada meio (WhatsApp, LinkedIn, GitHub, Email)
- Ícones com gradients
- Links clicáveis para redes sociais
- CTA para enviar email
- Design centrado e elegante

**Uso**:

```tsx
import { Contact } from "@/components/Contact/Contact";

<Contact />;
```

---

### 8. **ThemeToggle**

**Localização**: `src/components/ThemeToggle/`

Toggle de tema dark/light com:

- Ícones Sun/Moon (react-icons)
- Transição suave
- Efeito hover e click
- Usa hook `useTheme()`

**Uso**:

```tsx
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

<ThemeToggle />;
```

---

## Hooks Customizados

### `useTheme`

**Localização**: `src/hooks/useTheme.ts`

Hook para gerenciar tema com localStorage.

**Funcionalidades**:

- Detecta preferência do SO (prefers-color-scheme)
- Persiste escolha em localStorage
- Aplica classe `dark` no HTML
- Retorna: `{ theme, toggleTheme, mounted }`

**Uso**:

```tsx
import { useTheme } from "@/hooks/useTheme";

const { theme, toggleTheme, mounted } = useTheme();
```

---

## Variáveis CSS (Tema)

Definidas em `src/app/globals.css`:

### Tema Claro

```css
--color-bg: #ffffff
--color-bg-secondary: #f8f9fb
--color-bg-header: rgba(255, 255, 255, 0.8)
--color-bg-hover: #f0f2f5
--color-text: #1a1d23
--color-text-secondary: #6b7280
--color-border: #e5e7eb
--color-accent: #3b82f6
--color-accent-light: #60a5fa
```

### Tema Escuro

```css
--color-bg: #0f1419
--color-bg-secondary: #1a1f2e
--color-bg-header: rgba(15, 20, 25, 0.8)
--color-bg-hover: #252d3d
--color-text: #e5e7eb
--color-text-secondary: #9ca3af
--color-border: #374151
--color-accent: #3b82f6
--color-accent-light: #60a5fa
```

---

## Adicionando Novos Componentes

1. **Criar pasta**: `src/components/NomeComponente/`

2. **Criar arquivo TypeScript**: `NomeComponente.tsx`

   ```tsx
   "use client";

   import styles from "./NomeComponente.module.css";

   export const NomeComponente = () => {
     return <section className={styles.container}>{/* Conteúdo */}</section>;
   };
   ```

3. **Criar CSS Module**: `NomeComponente.module.css`

   ```css
   .container {
     /* Estilos aqui */
   }
   ```

4. **Exportar**: Adicione em `src/components/index.ts`

   ```ts
   export { NomeComponente } from "./NomeComponente/NomeComponente";
   ```

5. **Usar na página**:

   ```tsx
   import { NomeComponente } from "@/components";

   export default function Home() {
     return <NomeComponente />;
   }
   ```

---

## Bibliotecas de Ícones

- **React Icons**: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

  - `FiMoon`, `FiSun` - Ícones do tema
  - `FiMenu`, `FiX` - Menu mobile
  - `FiLinkedin`, `FiGithub`, `FiMail` - Redes sociais
  - `BiLogoWhatsapp` - WhatsApp

- **Font Awesome Icons**: Disponível via react-icons

---

## Animações (Framer Motion)

Patterns usados:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
>
  {/* Conteúdo com stagger */}
</motion.div>;
```

---

## Performance & SEO

- ✅ Server Components por padrão
- ✅ `'use client'` apenas onde necessário
- ✅ Lazy loading com Framer Motion
- ✅ Metadata dinâmica
- ✅ Image optimization
- ✅ CSS Modules (scoped)
- ✅ Turbopack para builds rápidos

---

## Troubleshooting

### Tema não persiste

- Verifique localStorage em DevTools
- Confirme que `useTheme` é chamado em componente client

### Animações não funcionam

- Confirme que Framer Motion está importado
- Verifique se está dentro de `motion.div` ou similar
- Remova `ease` se estiver usando (não suportado)

### Componentes não encontram estilos

- Verifique se o arquivo `.module.css` existe
- Confirme importação: `import styles from './Nome.module.css'`

---

Documentação atualizada em: 13/11/2025
