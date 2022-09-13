function Cadastrar(){
    
    let login = document.getElementById('inputLogin')
    let senha = document.getElementById('inputSenha')
    
    arrayLogin = JSON.parse(localStorage.getItem('db_client'))
    
    for ( i = 0; i < arrayLogin.length; i++ ){
    if(login.value == arrayLogin[i].nome && senha.value == arrayLogin[i].senha){
        window.location.replace("../TELAPRINCIPAL/principal.html")
    }


    else {
        alert("Falha! Tente novamente")

    }

}}



