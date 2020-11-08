window.onload = function() {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const passwordConfirmValue = passwordConfirm.value.trim();

        const fieldsValue = [
            usernameValue,
            emailValue,
            passwordValue,
            passwordConfirmValue,
        ];

        const fields = [
            username,
            email,
            password,
            passwordConfirm
        ]

        console.log(fields)

        for (let i = 0; i < fieldsValue.length; i++) {
            if (fieldsValue[i] === '') {
                setErrorFor(fields[i], 'Campo não pode estar em branco')
            } else {
                setSuccessFor(fields[i])
            }
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        // adicionando mensagem de erro dentro do small
        small.innerText = message;

        //adicionando classe de erro
        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;

        //adicionando classe de sucesso
        formControl.className = "form-control success";
    }
};