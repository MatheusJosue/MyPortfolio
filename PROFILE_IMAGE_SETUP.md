# 📸 Como Usar Sua Foto de Perfil

## Passo a Passo

### 1. Salve a imagem da sua foto

A imagem que você forneceu deve ser salva como `profile.jpg` na pasta:

```
my-portfolio/public/profile.jpg
```

### 2. Locais de onde você pode obter a imagem:

- ✅ Arquivo anexado que você enviou
- ✅ Seu LinkedIn: https://www.linkedin.com/in/matheusxaviercerqueira/
- ✅ Qualquer arquivo local no seu computador

### 3. Estrutura de pastas esperada:

```
my-portfolio/
├── public/
│   ├── profile.jpg          ← Sua foto aqui!
│   ├── profile-placeholder.svg
│   └── ...outros arquivos
├── src/
└── ...
```

### 4. Alternativa - Usar URL do LinkedIn

Se preferir usar diretamente da URL, você pode modificar o Hero.tsx:

```tsx
<Image
  src="https://media.licdn.com/dms/image/v2/D4D03AQGRt8VNv3bVJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728333033425?e=1735689600&v=beta&t=4H9C6HFT0cIXJpYxCKLvjgFrKlQ9JWEQTk2QV6rP3YU"
  alt="Matheus Xavier Cerqueira - Profile"
  width={280}
  height={280}
  priority
  className={styles.profileImage}
/>
```

Mas isso é menos performático - recomendo salvar localmente como profile.jpg.

---

## Status Atual

✅ Componente Hero já está configurado para usar `/profile.jpg`
⏳ Aguardando arquivo `profile.jpg` na pasta `public/`

Assim que você copiar o arquivo para a pasta correta, a imagem aparecerá automaticamente no portfólio!
