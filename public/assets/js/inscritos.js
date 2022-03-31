document.getElementById('lista').innerHTML = '';

window.onload = () => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios({
    method: "get",
    url: url + "/api/newsletter",
    responseType: 'json'
  }).then(function (response) {
    if(response.data.success == 'true'){
      console.log(response.data.data)
      let data = response.data.data
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