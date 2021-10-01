function formCadastro(){
    let data = document.getElementById('data');
    let produtoServiço = document.getElementById('produtoServiço');
    let valor = document.getElementById('valor');
    let formaPgto = document.getElementById('formaPgto');
    let fundoTroco = document.getElementById('fundoTroco');
    let observacao = document.getElementById('observacao');

    let tabela = document.getElementById('tbLista');
    let linha = tabela.insertRow();

    let cel0 = linha.insertCell(0);
    let cel1 = linha.insertCell(1);
    let cel2 = linha.insertCell(2);
    let cel3 = linha.insertCell(3);
    let cel4 = linha.insertCell(4);
    let cel5 = linha.insertCell(5);
    let cel6 = linha.insertCell(6);
    let cel7 = linha.insertCell(7);

    cel0.innerHTML = data.value
    cel1.innerHTML = produtoServiço.value
    cel2.innerHTML = valor.value
    cel3.innerHTML = formaPgto.value
    cel4.innerHTML = fundoTroco.value
    cel5.innerHTML = observacao.value
    
    cel6.innerHTML = "<button class='btn btn-warning' value='Excluir' onclick='formEditar(this)'>Editar</button>"
    cel7.innerHTML = "<button class='btn btn-danger' value='Alterar' onclick='formExcluir(this)'>Excluir</button>"
    
    limparCampos()
}

function limparCampos(){
    let data = document.getElementById('data');
    let produtoServiço = document.getElementById('produtoServiço');
    let valor = document.getElementById('valor');
    let formaPgto = document.getElementById('formaPgto');    
    let fundoTroco = document.getElementById('fundoTroco');
    let observacao = document.getElementById('observacao');

    data.value = " ";
    produtoServiço.value = "";
    valor.value = " ";
    formaPgto.value = " "; 
    fundoTroco.value = " ";
    observacao.value = " ";
}

function formExcluir(obj){
    let confirma = confirm("Deseja excluir?")
    if(confirma)
        obj.parentNode.parentNode.remove();
}

var arrayChild = '';

function formEditar(obj){
    let confirma = confirm("Deseja Editar?")
    if(confirma)

    arrayChild = obj.parentNode.parentNode.childNodes;

    let data = document.getElementById('data');
    let produtoServiço = document.getElementById('produtoServiço');
    let valor = document.getElementById('valor');
    let formaPgto = document.getElementById('formaPgto');    
    let fundoTroco = document.getElementById('fundoTroco');
    let observacao = document.getElementById('observacao');

    data.value = arrayChild[0].innerText;
    produtoServiço.value = arrayChild[1].innerText;
    valor.value = arrayChild[2].innerText;
    formaPgto.value = arrayChild[3].innerText;
    fundoTroco.value = arrayChild[4].innerText;
    observacao.value = arrayChild[5].innerText;

    let btnCadastrar = document.getElementById('btnCadastrar').style.display = 'none';
    let btnCancelar = document.getElementById('btnCancelar').style.display = 'none';
    let btnEditar = document.getElementById('btnEditar').style.display = 'block';
}

function formAlterar(){    

    let data = document.getElementById('data');
    let produtoServiço = document.getElementById('produtoServiço');
    let valor = document.getElementById('valor');
    let formaPgto = document.getElementById('formaPgto');    
    let fundoTroco = document.getElementById('fundoTroco');
    let observacao = document.getElementById('observacao');

    arrayChild[0].innerText = data.value;
    arrayChild[1].innerText = produtoServiço.value;
    arrayChild[2].innerText = valor.value;
    arrayChild[3].innerText = formaPgto.value;
    arrayChild[4].innerText = fundoTroco.value;
    arrayChild[5].innerText = observacao.value;

    let btnCadastrar = document.getElementById('btnCadastrar').style.display = 'none';
    let btnCancelar = document.getElementById('btnCancelar').style.display = 'none';
    let btnEditar = document.getElementById('btnEditar').style.display = 'block';

    limparCampos()
}