function formCadastro(){
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let genero = document.getElementById('genero');
    let ativo = document.getElementById('ativo');

    let tabela = document.getElementById('tbLista');
    let linha = tabela.insertRow();//inserindo uma nova linha na tabela

    //inserindo colunas na tabela
    let cel0 = linha.insertCell(0);
    let cel1 = linha.insertCell(1);
    let cel2 = linha.insertCell(2);
    let cel3 = linha.insertCell(3);
    let cel4 = linha.insertCell(4);
    let cel5 = linha.insertCell(5);

    //adicionando os valores às variáveis
    cel0.innerHTML = nome.value
    cel1.innerHTML = idade.value
    cel2.innerHTML = genero.value
    if(ativo.checked)
        cel3.innerHTML = ativo.value
    else
        cel3.innerHTML = "";
    
    cel4.innerHTML = "<button class='btn btn-warning' value='Excluir' onclick='formEditar(this)'>Editar</button>"
    cel5.innerHTML = "<button class='btn btn-danger' value='Alterar' onclick='formExcluir(this)'>Excluir</button>"
    
    limparCampos()
}

function limparCampos(){
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let genero = document.getElementById('genero');
    let ativo = document.getElementById('ativo');

    nome.value = " ";
    idade.value = " ";
    genero.value = "Outros";
    ativo.value = " ";
}

function formExcluir(obj){
    let confirma = confirm("Deseja excluir?")
    if(confirma)
        obj.parentNode.parentNode.remove();
}

var arrayChild = '';

function formEditar(obj){

    arrayChild = obj.parentNode.parentNode.childNodes;

    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let genero = document.getElementById('genero');
    let ativo = document.getElementById('ativo');

    nome.value = arrayChild[0].innerText;
    idade.value = arrayChild[1].innerText;
    genero.value = arrayChild[2].innerText;
    if(arrayChild[3].innerText != '-')
        ativo.checked = true;
    else
        ativo.checked = false;

    let btnCadastrar = document.getElementById('btnCadastrar').style.display = 'none';
    let btnCancelar = document.getElementById('btnCancelar').style.display = 'none';
    let btnEditar = document.getElementById('btnEditar').style.display = 'block';
}

function formAlterar(){    

    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let genero = document.getElementById('genero');
    let ativo = document.getElementById('ativo');

    arrayChild[0].innerText = nome.value;
    arrayChild[1].innerText = idade.value;
    arrayChild[2].innerText = genero.value;
    if(ativo.checked)
        arrayChild[3].innerText = ativo.value;
    else
        arrayChild[3].innerText = '-';

    let btnCadastrar = document.getElementById('btnCadastrar').style.display = 'none';
    let btnCancelar = document.getElementById('btnCancelar').style.display = 'none';
    let btnEditar = document.getElementById('btnEditar').style.display = 'block';

    limparCampos()
}