# Sistema de Inscrição em Cursos

## 1. Objetivo

Este projeto consiste no desenvolvimento de um formulário de inscrição para uma escola de cursos.  
O sistema permite que o usuário:

- Visualize cursos disponíveis
- Selecione um curso
- Seja redirecionado para a página de inscrição
- Tenha o curso automaticamente preenchido no formulário

---

## 2. Estrutura do Formulário

O formulário foi organizado utilizando boas práticas de HTML, com separação por grupos de dados:

- Dados do Curso
- Dados do Aluno
- Dados do Pai
- Dados da Mãe

---

## 3. Elementos HTML Utilizados

### 3.1 fieldset

Agrupa campos relacionados dentro de um formulário.

Função:

- Melhorar a organização visual
- Facilitar a leitura do código
- Separar logicamente as informações

---

### 3.2 legend

Define o título de um `fieldset`.

Função:

- Informar ao usuário qual grupo de dados está sendo preenchido

---

### 3.3 label

Define o texto descritivo de um campo.

Função:

- Indicar ao usuário o que deve ser preenchido
- Melhorar acessibilidade (clicar no texto ativa o input)

Uso correto:

```html
<label for="nome">Nome:</label> <input id="nome" />
```
