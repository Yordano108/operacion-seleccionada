const NUM1 = document.getElementById("numero1");
const NUM2 = document.getElementById("numero2");
const OPERACION = document.getElementById("operacion");
const RESULTADO = document.getElementById("resultado");

function operar() {
    let n1 = parseFloat(NUM1.value);
    let n2 = parseFloat(NUM2.value);
    let operacionTipo = OPERACION.value;

    let calculo = 0;
    let simbolo = "";

    if (operacionTipo === "1") {
        calculo = n1 + n2;
        simbolo = "+";
    } else if (operacionTipo === "2") {
        calculo = n1 - n2;
        simbolo = "-";
    } else if (operacionTipo === "3") {
        calculo = n1 * n2;
        simbolo = "*";
    } else if (operacionTipo === "4") {
        if (n2 === 0) {
            RESULTADO.innerText = "No se puede dividir por cero";
            return;
        }
        calculo = n1 / n2;
        simbolo = "/";
    }

    RESULTADO.innerText = `Resultado: ${n1} ${simbolo} ${n2} = ${calculo}`;
}
