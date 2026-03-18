# Sistema de Cursos e Inscrição

## 1. Descrição do Exercício

Este projeto tem como objetivo desenvolver uma aplicação web simples utilizando HTML e JavaScript para simular o processo de inscrição em cursos de uma escola infantil.

O sistema é composto por duas páginas principais:

- Página de listagem de cursos
- Página de inscrição

---

## 2. Funcionalidades

### 2.1 Página de Cursos

A página inicial apresenta uma lista de cursos contendo:

- Nome do curso
- Descrição
- Turno/Horário
- Professores
- Valor

Cada curso possui um link de inscrição que redireciona o usuário para a página de cadastro.

Exemplo de redirecionamento:

---

### 2.2 Página de Inscrição

A página de inscrição contém um formulário dividido em seções:

- Dados do Curso
- Dados do Aluno
- Dados do Pai
- Dados da Mãe

O curso selecionado é automaticamente preenchido através da URL.

---

## 3. Estrutura do Formulário

O formulário foi organizado utilizando `fieldset` e `legend` para separar os dados:

### 3.1 Dados do Curso

- Nome do curso\*
- Data de ingresso\*
- Valor\*
- Forma de pagamento (quantidade de parcelas)\*

---

### 3.2 Dados do Aluno

- Nome\*
- Endereço
- Bairro
- Cidade
- Número
- CEP
- Complemento
- Estado
- Telefone
- Celular\*
- E-mail\*
- Cor\* (Branca, Preta, Parda, Amarela, Indígena)

---

### 3.3 Dados do Pai

- Nome\*
- Data de nascimento
- Naturalidade
- Instrução
- Profissão
- Celular\*
- E-mail\*
- CPF\*
- Responsável financeiro (Sim/Não)

---

### 3.4 Dados da Mãe

- Nome\*
- Data de nascimento
- Naturalidade
- Instrução
- Profissão
- Celular\*
- E-mail\*
- CPF\*
- Responsável financeiro (Sim/Não)

---

## 4. Campos Obrigatórios

Os campos marcados com \* são obrigatórios.

Foi utilizado o atributo `required` nos inputs para impedir o envio do formulário sem preenchimento.

---

## 5. Conceitos HTML Utilizados

### fieldset

Agrupa campos relacionados dentro do formulário.

### legend

Define o título do grupo de campos.

### label

Define o texto descritivo de cada campo e melhora a acessibilidade.

### input

Elemento responsável pela entrada de dados do usuário.

---

## 6. Atributos Importantes

### type

Define o tipo de dado do campo:

- text
- number
- email
- date
- datetime-local
- radio

---

### name

Identifica o campo no envio de dados.

Importante:
Sem `name`, o valor não é enviado para a API.

---

### id

Identificador único utilizado para:

- JavaScript
- CSS
- associação com label

---

### value

Define o valor do campo ou da opção selecionada.

---

## 7. Funcionamento da Navegação entre Páginas

Ao clicar em um curso, o usuário é redirecionado com um parâmetro na URL.

Exemplo:

---

## 8. Script JavaScript

O JavaScript é responsável por capturar o valor da URL e preencher automaticamente o campo do curso.

### Código:

```javascript
const params = new URLSearchParams(window.location.search);
const curso = params.get("curso");

if (curso) {
  const inputCurso = document.getElementById("nomeCurso");
  inputCurso.value = curso;
}
```
