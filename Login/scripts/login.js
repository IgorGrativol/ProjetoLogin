window.onload = function() {
    const login = document.getElementById("username");
    const senha = document.getElementById("password");
    const btnAcessar = document.getElementById("btnAcessar");
    const form = document.getElementById("form-control");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        acessar();
    });

    function acessar() {
        if (login.value === "Igor" && senha.value === "123456") {
            console.log(login.value);
            window.location.replace("../../Home/home.html");
            console.log("LOGADO!");
        } else {
            window.alert("Acesso negado! Dados incorretos.");
        }
    }
};

// function validarCredenciais() {
//     let login = document.getElementById("txtlogin");
//     let senha = document.getElementById("txtsenha");

//     if (Number(login.value) == "123" && Number(senha.value) == 123456) {
//         document.open("home.html", 'janela');
//     } else {
//         window.alert("Acesso negado! Dados incorretos.");
//     }
// }