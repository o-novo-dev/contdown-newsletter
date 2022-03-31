document.getElementById('lista').innerHTML = '';

window.onload = () => {
  axios({
    method: "get",
    url: url + "inscritos.php",
    responseType: 'json'
  }).then(function (response) {
    if(response.data.success == 'true'){
      console.log(response.data.data)
      let data = JSON.parse(response.data.data)
      let table = ''
      data.forEach(element => {
        table = table.concat(`<tr>
          <th>${element.id}</th>
          <th>${element.email}</th>
        </tr>`);
      });
      document.getElementById('lista').innerHTML = table;
      
    } else
      alert('Falha na busca pela lista newsletters');
  });
}