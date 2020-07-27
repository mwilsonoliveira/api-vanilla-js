var inputCEP = document.getElementById('inputCEP');
var returnCEP = document.getElementById('return');

function renderizaCEP(cep) {
  returnCEP.innerHTML = '';

/*
  const textName = document.createTextNode(empresa.nome);
  const textActivity = document.createTextNode('Atividade: '+empresa.atividade_principal[0]['text']);
  const textPhone = document.createTextNode('Telefone: '+empresa.telefone);


  const h3Name = document.createElement('h3');
  const pActivity = document.createElement('p');
  const pPhone = document.createElement('p'); 


  h3Name.appendChild(textName);
  pActivity.appendChild(textActivity);
  pPhone.appendChild(textPhone);


  returnCNPJ.appendChild(h3Name);
  returnCNPJ.appendChild(pActivity);
  returnCNPJ.appendChild(pPhone);
*/
}

function renderizaLoading() {
  returnCEP.innerHTML = '';

  const textElement = document.createTextNode('Carregando...');
  const loadingElement = document.createElement('p');

  loadingElement.id = "loading";
  loadingElement.appendChild(textElement);
  returnCEP.appendChild(loadingElement);
}

function renderizaErro(erro) {
  returnCEP.innerHTML = '';

  const textElement = document.createTextNode('');
  const errElement = document.createElement('p');
  
  if (erro.response.status === 404) {
    textElement.nodeValue = 'CEP não encontrado';
  } else {
    textElement.nodeValue = erro.response.data
  }

  errElement.style.color = "#F00";

  errElement.appendChild(textElement);
  returnCNPJ.appendChild(errElement);
}

function listaCEP() {
  if (returnCEP.innerHTML = '') {
    alert('Campo CEP vazio!');
    return;
  } else {
    returnCEP.innerHTML = '';
    var cep = inputCEP.value;
  
    renderizaLoading();
  
    axios({
      method: 'get',
      baseURL: `https://viacep.com.br/ws/${cep}/json/`,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    });
  }
}
