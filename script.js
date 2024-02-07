function escolhaComputador() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const indice = Math.floor(Math.random() * 3);
    return opcoes[indice];
}

function jogar(escolhaJogador) {
    const escolhaComp = escolhaComputador();
    let resultado = "";

    if (escolhaJogador === escolhaComp) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === "Pedra" && escolhaComp === "Tesoura") ||
        (escolhaJogador === "Papel" && escolhaComp === "Pedra") ||
        (escolhaJogador === "Tesoura" && escolhaComp === "Papel")
    ) {
        resultado = "Você ganhou!";
        document.getElementById("resultado").style.color = "green";
    } else {
        resultado = "Computador ganhou!";
        document.getElementById("resultado").style.color = "red";
    }

    document.getElementById("resultado").innerText = "Você escolheu: " + escolhaJogador + ". Computador escolheu: " + escolhaComp + ". " + resultado;
}