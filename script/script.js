//console.log("minha script está funcionando");

const showObras = (obras) => {
    //console.log('Cheguei no show products');
    //console.log(obras);
   // console.log(obras.length);

    for (let i=0; i < obras.length; i++){
        console.log(obras[i].name);

        let tagDivQuadro = document.createElement('div');
        tagDivQuadro.setAttribute('class', 'quadro');

        let tagDivInfos = document.createElement('div');
        tagDivInfos.setAttribute('class', 'infos');
        tagDivQuadro.appendChild(tagDivInfos);

        let tagDivImage = document.createElement('div');
        tagDivImage.setAttribute('class', 'imagemDoQuadro');
        let tagIMG = document.createElement('img');
        tagIMG.setAttribute('src', obras[i].url);
        tagIMG.setAttribute('alt', obras[i].name);
        tagDivImage.appendChild(tagIMG);
        tagDivInfos.appendChild(tagDivImage);

        let tagDivNome = document.createElement('div');
        tagDivNome.setAttribute('class', 'nome');
        let tagh2 = document.createElement('h2');
        let textnode = document.createTextNode(obras[i].name);
        tagh2.appendChild(textnode);
        tagDivNome.appendChild(tagh2);
        tagDivInfos.appendChild(tagDivNome);

        let tagDivData = document.createElement('div');
        tagDivData.setAttribute('class', 'data');
        tagh2 = document.createElement('h2');
        textnode = document.createTextNode(obras[i].data);
        tagh2.appendChild(textnode);
        tagDivData.appendChild(tagh2);
        tagDivInfos.appendChild(tagDivData);

        let tagDivDescricao = document.createElement('div');
        tagDivDescricao.setAttribute('class', 'decricao');
        tagh2 = document.createElement('h2');
        textnode = document.createTextNode(obras[i].descricao);
        tagh2.appendChild(textnode);
        tagDivDescricao.appendChild(tagh2);
        tagDivInfos.appendChild(tagDivDescricao);

        let tagDivQuadros = document.getElementById('mostrarQuadros');

        tagDivQuadros.appendChild(tagDivQuadro);
    }
}

const fetchObras = () => {
    //console.log('cheguei na script para carregar as obras');
    var url_atual = window.location.href;
    console.log(url_atual)
    const myArray = url_atual.split("=");
    console.log(myArray);
    id = myArray[1];
    fetch('http://localhost:8000/getObras.php?autor='+id)
        .then((response) => {
            if (response.status >= 200 && response.status<300){
                return response.json()
            }
            throw new Error(response.statusText);
        })
        .then((obras) => {
            showObras(obras);
        })
        .catch((error) => {
            console.log(error);
        })
}

const checkForm = {
    nameAlert: false,
    alertaDescricao: false,
    obraURL: false,
    artistaAlert: false,
}

document.getElementById('nome').addEventListener('input', function (e) {
    const nameAlert = e.target.value;
    if (nameAlert.length < 5 || nameAlert.length > 50) {
        document.getElementById('alertaNome').style.display = "block";
        checkForm.nameAlert = false;
    } else {
        document.getElementById('alertaNome').style.display = "none";
        checkForm.nameAlert = true;
    }
    enableButton();
});

document.getElementById('descricao').addEventListener('input', function (e) {
    const descricaoAlert = e.target.value;
    if (descricaoAlert.length < 5) {
        document.getElementById('alertaDescricao').style.display = "block";
        checkForm.alertaDescricao = false;
    } else {
        document.getElementById('alertaDescricao').style.display = "none";
        checkForm.alertaDescricao = true;
    }
    enableButton();
});

var select = document.getElementById('artista');
var value = select.options[select.selectedIndex].value;
console.log(value); 

document.getElementById('artista').addEventListener('change', function(e) {
    const artistaAlert = e.target.value;
    console.log(artistaAlert); 
    if(artistaAlert != 0){
        document.getElementById('alertaArtista').style.display = "none";
        checkForm.artistaAlert = true;
    } else {
        document.getElementById('alertaArtista').style.display = "block";
        checkForm.artistaAlert = false;
    }
    enableButton();
})

document.getElementById('image').addEventListener('input', function (e) {
    const obraURL = e.target.value
    if(validURL(obraURL)) {
        document.getElementById('alertaURL').style.display = "block"
        checkForm.obraURL = false;
    }else{
        document.getElementById('alertaURL').style.display = "none"
        checkForm.obraURL = true;
    }
    enableButton();
});

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !pattern.test(str);
  }


function enableButton() {
    const buttonEnviar = document.getElementById("buttonCadastrar");
    if (checkForm.nameAlert && checkForm.obraURL && checkForm.alertaDescricao && checkForm.artistaAlert) {
            buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}



function alterar(){
    document.getElementById("obrafrida1").style.bottom = "8rem"
    document.getElementById("obrafrida1").style.left = "6rem"
    document.getElementById("obrafrida2").style.bottom = "15rem"
    document.getElementById("obrafrida2").style.left = "12rem"
}
function voltar(){
    document.getElementById("obrafrida1").style.bottom = "5rem"
    document.getElementById("obrafrida1").style.left = "3rem"
    document.getElementById("obrafrida2").style.bottom = "9rem"
    document.getElementById("obrafrida2").style.left = "6rem"
}

function alterarPablo(){
    document.getElementById("obrapablo1").style.bottom = "8rem"
    document.getElementById("obrapablo1").style.left = "9rem"
    document.getElementById("obrapablo2").style.bottom = "15rem"
    document.getElementById("obrapablo2").style.left = "15rem"
    
}
function voltarPablo(){
    document.getElementById("obrapablo1").style.bottom = "5rem"
    document.getElementById("obrapablo1").style.left = "6rem"
    document.getElementById("obrapablo2").style.bottom = "9rem"
    document.getElementById("obrapablo2").style.left = "9rem"
}

function alterarSalvador(){
    document.getElementById("obrasalvador1").style.bottom = "8rem"
    document.getElementById("obrasalvador1").style.left = "9rem"
    document.getElementById("obrasalvador2").style.bottom = "15rem"
    document.getElementById("obrasalvador2").style.left = "15rem"
}
function voltarSalvador(){
    document.getElementById("obrasalvador1").style.bottom = "5rem"
    document.getElementById("obrasalvador1").style.left = "6rem"
    document.getElementById("obrasalvador2").style.bottom = "9rem"
    document.getElementById("obrasalvador2").style.left = "9rem"
}

function alterarAnita(){
    document.getElementById("obraanita1").style.bottom = "8rem"
    document.getElementById("obraanita1").style.left = "6rem"
    document.getElementById("obraanita2").style.bottom = "15rem"
    document.getElementById("obraanita2").style.left = "12rem"
    
}
function voltarAnita(){
    document.getElementById("obraanita1").style.bottom = "5rem"
    document.getElementById("obraanita1").style.left = "3rem"
    document.getElementById("obraanita2").style.bottom = "9rem"
    document.getElementById("obraanita2").style.left = "6rem"
}