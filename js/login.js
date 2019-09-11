var xhr = new XMLHttpRequest();
var json;

xhr.open("GET", "json/dados.json");
xhr.addEventListener("load", function () {
    json = JSON.parse(xhr.responseText);
});

xhr.send();

button = document.querySelector("button");

button.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("form");

    for (i = 0; i < json.length; i++) {
        if (json[i].usuario == form.usuario.value) {
            if (json[i].senha == form.senha.value) {
                return window.location.href = "html/painel.html";
            } else {
                return alert("Senha Incorreta!");
            }
        }
    }
    return alert("Email Incorreto!");
});



