import { subscriveMonster } from "./firebase-config.js";

//armazenar e tratar os dados do formulario
const txtname = window.document.getElementById("txtname");
const txtemail = window.document.getElementById("txtemail");
const txtage = window.document.getElementById("txtage");
const check = window.document.querySelectorAll(".input-box");
const buttomForm = window.document.getElementById("subscrive");

buttomForm.addEventListener("click", async() => {
    if (txtname.value == "") {
        validarNome();    
    } else if (txtemail.value == "") {
        validarEmail();
    } else if (txtage.value == "") {
        validarIdade();
    } else if (check.value == "") {
        validarCheck();
    } else {
        let subscription = {
        name: txtname.value,
        email: txtemail.value,
        age: txtage.value,
        noticias: coletarValor()
        }
        const subscriptionid = await subscriveMonster(subscription);
        console.log(`Enviao com sucesso ${subscriptionid}`);
    }
    
})

function coletarValor() {
    let valoresEscolhidos = [];

    check.forEach(function(cl) {
        if(cl.checked) {
            valoresEscolhidos.push(cl.value)
        }
    })

    return valoresEscolhidos;
}