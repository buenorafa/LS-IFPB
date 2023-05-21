function isValid(cep) {
  return cep.length == 8 && /^\d+$/.test(cep);
}

function formatURL(cep) {
  return `http://viacep.com.br/ws/${cep}/json/`;
}

function errorMsg() {
  document.getElementById("erro").classList.remove("hidden");
}
function hideErrorMsg() {
  document.getElementById("erro").classList.add("hidden");
}

function cleanForm() {
  document.getElementById("cep").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

document.getElementById("cep").addEventListener("focusout", async () => {
  let cep = document.getElementById("cep").value;
  if (isValid(cep)) {
    hideErrorMsg();
    url = formatURL(cep);
    const request = await fetch(url);
    const dados = await request.json();

    if (dados.hasOwnProperty("erro")) {
      errorMsg();
      cleanForm();
    } else {
      document.getElementById("rua").value = dados.logradouro;
      document.getElementById("bairro").value = dados.bairro;
      document.getElementById("cidade").value = dados.localidade;
      document.getElementById("uf").value = dados.uf;
      document.getElementById("numero").focus();
    }
  } else {
    errorMsg();
    cleanForm();
  }
});
