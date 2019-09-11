var xhr = new XMLHttpRequest();
var json;

xhr.open("GET", "../json/dados.json");
xhr.addEventListener("load", function () {
    json = JSON.parse(xhr.responseText);
});

xhr.send();

var button = document.querySelector("button");

/*button.addEventListener("click", function () {
    console.log(json[1].cargo);

    switch (json[1].cargo) {
        case "aluno":
            return alert("caso aluno");
        case "professor":
                return alert("caso professor");
        case "secretaria":
            return alert("caso secretaria");
        case "direcao":
                return alert("caso direcao");

        default:
            alert("Usuário Inválido!");
            break;
    }
});*/

function acesso() {
    switch (json[1].cargo) {
        case "aluno":
            return `
                <h1>aluno</h1>
            `;
        case "professor":
            return `
                        <h1>professor</h1>
                    `;
        case "secretaria":
            return `
                <h1>secretaria</h1>
            `;
        case "direcao":
            return `
                <h1>direcao</h1>
            `;
        default:
            alert("Usuário Invalido");
            break;
    }
}

$("button").click(function (){
    $("#aqui").html(acesso());
});