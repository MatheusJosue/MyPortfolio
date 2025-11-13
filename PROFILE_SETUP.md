# 📸 Como Adicionar Sua Foto de Perfil

## Opção 1: Usar Foto do LinkedIn (Recomendado)

### Passo 1: Baixar a Foto

1. Acesse seu perfil LinkedIn: https://www.linkedin.com/in/matheusxaviercerqueira/
2. Clique em sua foto de perfil
3. Clique com botão direito e escolha "Salvar imagem como"
4. Salve como `profile.jpg` na pasta `public/` do projeto

### Passo 2: Localizar o Arquivo

```
my-portfolio/
└── public/
    └── profile.jpg  ← Coloque a foto aqui
```

### Passo 3: Atualizar o Componente (Opcional)

Se a foto tiver nome diferente, edite `src/components/Hero/Hero.tsx` e mude:

```tsx
<Image
  src="/profile.jpg" // ← Mude para o nome do seu arquivo
  alt="Matheus Xavier Cerqueira - Profile"
  width={280}
  height={280}
  priority
  className={styles.profileImage}
/>
```

---

## Opção 2: Usar uma Foto Personalizada

1. Prepare uma imagem quadrada (recomendado 400x400px ou maior)
2. Converta para JPG ou PNG se necessário
3. Renomeie para `profile.jpg`
4. Coloque na pasta `public/`

---

## Opção 3: Usar o Placeholder Atual

O SVG atual é um placeholder profissional. Você pode manter assim temporariamente enquanto:

- Adiciona a foto de verdade
- Testa o portfólio

---

## ✅ Resultado Esperado

Quando a foto for adicionada, ela aparecerá:

- Na seção Hero (lado direito)
- Em um círculo com sombra azul
- Com efeito de escala ao passar o mouse
- Com animação suave de flutuação no fundo

---

## 💡 Dicas

- **Formato**: JPG, PNG ou WebP
- **Tamanho**: 300x300px a 600x600px
- **Proporção**: Quadrada (1:1)
- **Qualidade**: Pelo menos 150KB para melhor resolução

---

## 🔄 Teste Local

Após adicionar a foto:

1. Salve o arquivo na pasta `public/`
2. O Next.js auto-recarrega
3. Vá para http://localhost:3000
4. A foto aparecerá no Hero

---

**Nota**: O placeholder SVG será automaticamente substituído quando um arquivo `profile.jpg` for detectado!
