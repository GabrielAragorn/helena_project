function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var username = username.toLowerCase();
    var password = password.toLowerCase();
    console.log(username);

    if ((username == "helena" || username == "helena guedes") && (password == "gabriel" || password == "xuxu")) {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("Desculpa!", "Não posso aceitar, você não parece ser minha Helena! :(")
}
