function callRenderAPI() {
  fetch('https://multi-cloud-app-6.onrender.com/api')  
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').innerText = data.message || 'Success!';
    })
    .catch(error => {
      document.getElementById('output').innerText = 'Error: ' + error.message;
    });
}

