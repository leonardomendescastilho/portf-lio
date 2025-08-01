# 🚀 Guia de Deploy - GitHub Pages

Este guia detalha como configurar e fazer o deploy do seu portfólio no GitHub Pages.

## 📋 Pré-requisitos

1. **Conta no GitHub** com repositório criado
2. **Git configurado** localmente
3. **Projeto buildando** sem erros

## 🔧 Configuração Inicial

### 1. Push do Código para o GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: initial commit - portfolio setup"

# Adicionar repositório remoto
git remote add origin https://github.com/leonardomendescastilho/portf-lio.git

# Push para a branch main
git push -u origin main
```

### 2. Configurar GitHub Pages

1. **Acesse seu repositório** no GitHub
2. **Vá em Settings** (Configurações)
3. **Role até a seção Pages** no menu lateral
4. **Em Source**, selecione "GitHub Actions"

### 3. Verificar se o Workflow Está Funcionando

1. **Vá na aba Actions** do seu repositório
2. **Verifique se o workflow "Build and Deploy Portfolio"** está rodando
3. **Aguarde a conclusão** (geralmente 2-3 minutos)

## 🌐 Acessar o Site

Após o deploy bem-sucedido, seu portfólio estará disponível em:

**https://leonardomendescastilho.github.io/portf-lio/**

## 🔄 Fluxo de Deploy Automático

### O que acontece automaticamente:

1. **Push na branch main** → Trigger do workflow
2. **Instalação de dependências** → `npm ci`
3. **Verificação de código** → `npm run lint`
4. **Build do projeto** → `npm run build`
5. **Deploy para GitHub Pages** → Publicação automática

### Comandos para atualizações:

```bash
# Fazer alterações no código
# ...

# Adicionar mudanças
git add .

# Commit das mudanças
git commit -m "feat: add new feature"

# Push para disparar deploy automático
git push origin main
```

## 🐛 Solução de Problemas

### Deploy Falhando?

1. **Verifique os logs** na aba Actions
2. **Teste o build localmente**:
   ```bash
   npm run build
   ```
3. **Verifique se há erros de linting**:
   ```bash
   npm run lint
   ```

### Site não carregando recursos?

1. **Verifique se o base path** está correto no `vite.config.ts`
2. **Confirme se o nome do repositório** coincide com o configurado

### Workflow não executando?

1. **Verifique se o arquivo** `.github/workflows/deploy.yml` existe
2. **Confirme se você tem permissões** para GitHub Actions no repositório
3. **Verifique se o GitHub Pages** está habilitado nas configurações

## 📊 Monitoramento

### Métricas importantes:

- **Build time**: ~3-4 minutos
- **Bundle size**: ~450KB (JavaScript)
- **Performance**: Lighthouse Score 90+

### Logs úteis:

```bash
# Ver status do último deploy
git log --oneline -5

# Verificar diferenças desde último commit
git diff HEAD~1

# Ver arquivos modificados
git status
```

## 🔐 Configurações de Segurança

O workflow já inclui as seguintes práticas de segurança:

- ✅ **Permissões mínimas** para GitHub Actions
- ✅ **Verificação de integridade** com linting
- ✅ **Build isolado** em container Ubuntu
- ✅ **Deploy seguro** com tokens de acesso limitado

## 📞 Suporte

Se encontrar problemas:

1. **Verifique este guia** primeiro
2. **Consulte os logs** no GitHub Actions
3. **Teste localmente** antes de fazer push
4. **Revise a documentação** do GitHub Pages

---

✨ **Seu portfólio está pronto para brilhar na web!**
