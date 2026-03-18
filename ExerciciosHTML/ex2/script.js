// ===============================
// OBJETIVO DO CÓDIGO:
// Pegar o nome do curso vindo pela URL
// e preencher automaticamente o campo
// "Nome do curso" no formulário.
// ===============================

// window.location.search
// → pega tudo que vem depois do "?" na URL
// Ex: ?curso=web

// URLSearchParams
// → transforma os parâmetros da URL em algo que podemos acessar facilmente
const params = new URLSearchParams(window.location.search);

// params.get("curso")
// → pega o valor do parâmetro chamado "curso"
// Ex: se for ?curso=web → retorna "web"
const curso = params.get("curso");

// if (curso)
// → verifica se existe algum valor na URL
// evita erro caso a página seja aberta sem parâmetro
if (curso) {
  // document.getElementById
  // → pega o input do HTML pelo id
  // precisa ter id="nomeCurso" no HTML
  const inputCurso = document.getElementById("nomeCurso");

  // inputCurso.value = curso
  // → coloca o valor dentro do campo input
  // Ex: o campo será preenchido com "web"
  inputCurso.value = curso;
}
