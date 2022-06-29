const keyBD = '@usuariosestudo'
var cadastrados = [];
lerBD();
function gravarBD(){
    localStorage.setItem(keyBD, JSON.stringify(cadastrados))
}

function lerBD(){
    const data = localStorage.getItem(keyBD)
        if(data){
            cadastrados = JSON.parse(data)
        }
    criarTabela(cadastrados)
}

function salvarCadastro (e) {
    e.preventDefault();
    //document.getElementById('ident').value = criarId();
    dadosCadastrados ={
        id : document.getElementById('ident').value,
        nome : document.getElementById('nick').value,
        login : document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        confirmSenha: document.getElementById('confirmesenha').value,
    }
    const i = cadastrados.findIndex(linha => linha.id == dadosCadastrados.id)

    if (i != -1){
        cadastrados[i].nome = dadosCadastrados.nome;
        cadastrados[i].login = dadosCadastrados.login;
        cadastrados[i].senha = dadosCadastrados.senha;
        cadastrados[i].confirmSenha = dadosCadastrados.confirmSenha;
    } else {

        dadosCadastrados.id = criarId();
        cadastrados.push(dadosCadastrados);
    
    }
    
    criarTabela(cadastrados);
    gravarBD()
    limparAreaDeCadastro();
    
}

function criarId(){
    var ultimoId= (cadastrados.length > 0 ? +cadastrados[cadastrados.length-1].id : 0) + 1;
    return ultimoId;

    var ultimoId = 0;
    if(cadastrados.length > 0){
        ultimoId = cadastrados[cadastrados.length-1].id +1;
    } else {
        ultimoId = 1;
    }
}

function criarTabela(cadastrados){
    var elemento = "";
    for (var i = 0; i < cadastrados.length; i++){
        elemento += "<tr><td>" + cadastrados[i].id + "</td>";
        elemento += "<td>" + cadastrados[i].nome + "</td>";
        elemento += "<td>" + cadastrados[i].login + "</td>";
        elemento += "<td><button onClick='editarUsuario(" + cadastrados[i].id + ")'>Editar usuario</button></td>";
        elemento += "<td><button onClick='excluirUsuario(" + cadastrados[i].id + ")'>excluir usuario</button></td>";
    }
    var tabela = document.getElementById("tabelaDeResgistro");
    tabela.innerHTML = elemento;
}

function limparAreaDeCadastro(){
        document.getElementById('ident').value = "";
        document.getElementById('nick').value = "";
        document.getElementById('usuario').value = "";
        document.getElementById('senha').value = "";
        document.getElementById('confirmesenha').value = "";
}

function editarUsuario(id){
    const usuarios = cadastrados.find(linha=> linha.id == id)
            document.getElementById('ident').value = usuarios.id
            document.getElementById('nick').value = usuarios.nome
            document.getElementById('usuario').value = usuarios.login
            document.getElementById('senha').value = usuarios.senha
            document.getElementById('confirmesenha').value = usuarios.confirmSenha
}


function excluirUsuario(id){
    const i = cadastrados.findIndex(linha => linha.id == id)
    if(i != -1){ 
        var excluir = cadastrados.splice(i,1)
    }
    criarTabela(cadastrados)
}


document.querySelector("#add").addEventListener("click", salvarCadastro);