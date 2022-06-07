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
        tagDivInfos.appendChild(tagDivImage);

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
    fetch('http://localhost:8000/getObras.php')
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