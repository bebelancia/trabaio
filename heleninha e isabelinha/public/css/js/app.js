document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("name").value;
    let data = document.getElementById("data").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("RG").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let cep = document.getElementById("cep").value;
    let estado = document.getElementById("selecione").value;

    let diasSelecionados = [];
    let checkboxes = document.querySelectorAll("input[name='dias']:checked");
    checkboxes.forEach(function (checkbox) {
        diasSelecionados.push(checkbox.value);

    });

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    resultado.innerHTML += "<p><strong>Nome:</strong> " + nome + "</p>";
    resultado.innerHTML += "<p><strong>Data de Nascimento:</strong> " + data + "</p>";
    resultado.innerHTML += "<p><strong>CPF:</strong> " + cpf + "</p>";
    resultado.innerHTML += "<p><strong>RG:</strong> " + rg + "</p>";
    resultado.innerHTML += "<p><strong>E-mail:</strong> " + email + "</p>";
    resultado.innerHTML += "<p><strong>Endereço:</strong> " + endereco + ", Nº " + numero + "</p>";
    resultado.innerHTML += "<p><strong>Complemento:</strong> " + complemento + "</p>";
    resultado.innerHTML += "<p><strong>Bairro:</strong> " + bairro + "</p>";
    resultado.innerHTML += "<p><strong>Cidade:</strong> " + cidade + "</p>";
    resultado.innerHTML += "<p><strong>CEP:</strong> " + cep + "</p>";
    resultado.innerHTML += "<p><strong>Estado:</strong> " + estado + "</p>";
    resultado.innerHTML += "<p><strong>Dias escolhidos:</strong> " + (diasSelecionados.length > 0 ? diasSelecionados.join(", ") : "Nenhum") + "</p>";

    mensagem.style.display = "block";
      
    form.reset();

});



