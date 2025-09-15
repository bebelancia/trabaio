document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value;
    const data = document.getElementById("data").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("RG").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const cep = document.getElementById("cep").value;
    const estado = document.getElementById("selecione").value;

    const diasSelecionados = Array.from(document.querySelectorAll("input[name='dias']:checked"))
        .map(checkbox => checkbox.value);

    const diasTexto = diasSelecionados.length > 0 ? diasSelecionados.join(", ") : "Nenhum dia selecionado";

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const titulo = document.createElement("h4");
    titulo.textContent = "Dados salvos com sucesso :D";
    resultado.appendChild(titulo);

    function displayField(label, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${label}</strong> ${value}`;
        resultado.appendChild(p);
    }

    displayField("Nome:", nome);
    displayField("Data de Nascimento:", data);
    displayField("CPF:", cpf);
    displayField("RG:", rg);
    displayField("E-mail:", email);
    displayField("Endereço:", `${endereco}, Nº ${numero}`);
    displayField("Telefone:", telefone);
    displayField("Complemento:", complemento);
    displayField("Bairro:", bairro);
    displayField("Cidade:", cidade);
    displayField("CEP:", cep);
    displayField("Estado:", estado);
    displayField("Dias escolhidos:", diasTexto);

});
