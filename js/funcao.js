const keyBD = '@usuariosestudo'

var listaRegistro = {
    ultimoIdGerado : 0,
    usuarios : [],
    login : [],
}

function gravarBD(){
    localStorage.setItem(keyBD, JSON.stringify(listaRegistro))
}

function lerBD(){
    const data = localStorage.getItem(keyBD)
        if(data){
            listaRegistro = JSON.parse(data)
        }
}

function desenhaTabela(){
    const tbody = document.getElementById('listaRegistroBody')
    if(tbody){
        tbody.innerHTML = listaRegistro.usuarios
        .sort( (a,b)=> {
            return a.nome < b.nome ? -1 : 1
        })
        .map( usuarios=> {

            return `<tr>
                        <td>${usuarios.id}</td>
                        <td>${usuarios.nome}</td>
                        <td>${usuarios.login}</td>
                        <td>
                            <button id='btn${usuarios.id}' onclick='editarUsuario(this.id)' class= 'verde'>Editar</button>                            
                        </td>
                        <td>
                            <button class= 'vermelho'>deletar</button>
                        </td>
                    </tr>`
        }).join('')
    }
}

function insertUser(nome, login){
    const id = listaRegistro.ultimoIdGerado + 1;
    listaRegistro.ultimoIdGerado = id;
    listaRegistro.usuarios.push({
        id,nome,login
    })
    gravarBD()
    desenhaTabela()
}

function editarUsuario(id){
    const idUsuario = id.substring(3)
    const usuarios = listaRegistro.usuarios.find(usuarios=> usuarios.id == idUsuario)
            document.getElementById('ident').value = usuarios.id
            document.getElementById('nick').value = usuarios.nome
            document.getElementById('usuario').value = usuarios.login
            document.getElementById('senha').value = usuarios.senha
            document.getElementById('confirmesenha').value = usuarios.confirmSenha
}

function editUser(data){

    const usuarios = listaRegistro.usuarios.find(usuarios=> usuarios.id == data.id)
    if(data.id){
        listaRegistro.usuarios.push({
            listaRegistro.usuarios = data.nome
            listaRegistro.login = data.login
        })
      
    }
    gravarBD()
    desenhaTabela()
}

function deleteUser(id){
    
}

function limparEdicao(){
    document.getElementById('nick').value = ''
    document.getElementById('usuario').value = ''
}

function submeter(e){
    e.preventDefault()
    const data = {
        id : document.getElementById('ident').value,
        nome : document.getElementById('nick').value,
        login : document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        confirmSenha: document.getElementById('confirmesenha').value,
    }
    if(data.id){
        editUser(data)
    }else {
        insertUser(data.nome, data.login, data.senha, data.confirmSenha)
        limparEdicao()
    }
}

window.addEventListener('load', ()=>{
    lerBD()

    document.getElementById('form').addEventListener('submit', submeter)
})

/**var id = [1];
var name = document.getElementById('name');
var login = document.getElementById('login');

function addUsuario(add){
    add.addEventListener(click, function(e){
        let click= document.getElementById('add');
        let linhaOne = document.createElement('tr');
        let celula1= document.createElement('th');
        celula1.innerHTML= id + 1;
        let celula2 = document.createElement('th');
        let nameUser = name.value;
        celula2.innerHTML = nameUser;
        let celula3 = document.createElement('th');
        let user = login.value;
        celula3.innerHTML = user;
        

    })

}**/