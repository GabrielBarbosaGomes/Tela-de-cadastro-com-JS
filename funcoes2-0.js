var cadastrados = [{id: 0,nome: "", login: "",senha: "",confirmSenha: ""}];


function salvarCadastro (){
    dadosCadastrados ={
        id : document.getElementById('ident').value,
        nome : document.getElementById('nick').value,
        login : document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        confirmSenha: document.getElementById('confirmesenha').value,
    }
    criarTabela(cadastrados);
}

function criarTabela(cadastrados){
    var elemento = "";
    for (var i = 0; i < cadastrados.length; i++){
        elemento += "<tr><td>" + cadastrados[i].id + "</td>";
        elemento += "<td>" + cadastrados[i].nome + "</td>";
        elemento += "<td>" + cadastrados[i].login + "</td>";
        elemento += "<td>" + cadastrados[i].senha + "</td>";
        elemento += "<td>" + cadastrados[i].confirmSenha + "</td>";
        elemento += "<td><button onClick='editarUsuario(" + i + ")'>Editar usuario</button></td>";
        elemento += "<td><button onClick='excluirUsuario(" + i + ")'>excluir usuario</button></td>";
    }
}