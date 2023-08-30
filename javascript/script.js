async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML= '';
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente");
    }

    const cidade = document.getElementById("cidade");
    cidade.value = consultaCEPConvertida.localidade;

    const logradouro = document.getElementById("endereco");
    logradouro.value = consultaCEPConvertida.logradouro;

    const bairro = document.getElementById("bairro");
    bairro.value = consultaCEPConvertida.bairro

    const estado = document.getElementById("estado");
    estado.value = consultaCEPConvertida.uf

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `
    <div class="erro__imagem"></div>
    <p class="erro__texto">CEP invalido. Digite um CEP valido.</p>`
    console.log(erro, " Deu ruim ");
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

const bairro = document.getElementById("");
