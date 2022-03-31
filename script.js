document.getElementById("dias").innerText = '';
document.getElementById("horas").innerText = '';
document.getElementById("minutos").innerText = '';
document.getElementById("segundos").innerText = '';

document.getElementById('retorno').innerText = '';

const dtFim = '2023-01-01';

function countdown() {
  const dtFinal = new Date(dtFim);
  const dtHoje = new Date();

  const base = Math.floor((dtFinal - dtHoje) / 1000);

  const dias = Math.floor(base / 3600 / 24);
  const horas = Math.floor((base / 3600) % 24);
  const minutos = Math.floor((base / 60) % 60);
  const segundos = Math.floor(base % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
  
}

setInterval(countdown, 1000);

document.getElementById('submitIncreverse').onsubmit = (e) => {
  e.preventDefault();
  document.getElementById('retorno').innerText = '';
  console.dir(e);
  console.log(e.target.elements.email.value);
  
  // Envia uma requisição post
  axios({
    method: "post",
    url: url + "inscrever.php",
    data: {
      email: e.target.elements.email.value,
    }, 
    responseType: 'json'
  }).then(function (response) {
    if(response.data.success == 'false')
      document.getElementById('retorno').innerText = response.data.msg;
    else
      alert(response.data.msg)
  });
}