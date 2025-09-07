let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let datanascimento = document.getElementById("datanascimento").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let cep = document.getElementById("cep").value;

    let novoParagrafo = document.createElement("p")

    novoParagrafo.textContent = `Nome: {Nome Completo} | datanascimento: {Data De Nascimento} | cpf: {CPF} | rg: {rg} | email: {email} | telefone: {telefone} | endereço: {endereço} | numero: {numero} | complemento: {complemento} | bairro: {bairro} | estado: {estado} | cidade: {cidade} | cep: {CEP}`;
    document.getElementById("Dados").appendChild(novoParagrafo);

    form.reset();

    form.addEventListener("submit", function(event) {
    event.preventDefault();
