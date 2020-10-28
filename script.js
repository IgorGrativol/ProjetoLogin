
function acessar(){
    let login = document.getElementById('txtlogin')
    let senha = document.getElementById('txtsenha')

    if(Number(login.value) == "123" && Number(senha.value) == 123456){
        window.open('home.html','janela');
    } else {
        window.alert('Acesso negado! Dados incorretos.')
    }
}