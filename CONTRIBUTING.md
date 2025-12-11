# Guia de Contribuição

Este documento define os padrões adotados no projeto para mensagens de commit e nomes de branches, visando manter o histórico organizado e legível.

## Padrões de Commit

Adotamos o padrão **[Conventional Commits](https://www.conventionalcommits.org/)**.

### Estrutura
```text
<tipo>: <descrição breve>

[corpo opcional]
```

### Tipos Comuns
- **feat**: Adição de uma nova funcionalidade.
- **fix**: Correção de um bug.
- **docs**: Alterações apenas na documentação (README, etc).
- **style**: Alterações que não afetam o significado do código (espaços, formatação, etc).
- **refactor**: Alteração de código que não corrige um bug nem adiciona uma feature.
- **perf**: Mudança de código para melhoria de performance.
- **test**: Adição ou correção de testes.
- **chore**: Alterações em tarefas de build, configurações de ferramentas, etc.

### Exemplos
- `feat: adicionar sistema de login`
- `fix: corrigir erro de layout no mobile`
- `docs: atualizar instruções no README`
- `style: formatar código com prettier`

---

## Padrões de Branch

Os nomes das branches devem seguir o padrão `tipo/descricao-curta`.

### Estrutura
- Use letras minúsculas.
- Use hífens para separar palavras (kebab-case).
- O prefixo deve corresponder ao tipo de trabalho (similar aos tipos de commit).

### Prefixos
- `feat/`: Para novas funcionalidades.
- `fix/`: Para correção de bugs.
- `docs/`: Para documentação.
- `refactor/`: Para refatoração de código.
- `chore/`: Para configurações e tarefas gerais.

### Exemplos
- `feat/pagina-de-login`
- `fix/responsividade-navbar`
- `docs/atualizar-readme`
