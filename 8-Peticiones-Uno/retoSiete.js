fetch('https://api.rand.fun/number/integer')
    .then(function(response) {    
            return response.html();  
        }
    ).then(function(data) {     
            document.body.innerHTML = data.result;  
    }
)
.catch(error => console.log(`Ha sucedido un error: TypeError: response.html is not a function`));