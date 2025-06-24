function calculoDoSaldo (vitorias, derrotas){
    return vitorias - derrotas
}

function descobrindoONivel(saldoVitorias){
    if(saldoVitorias <= 10){
        return "Ferro"
    }else if(saldoVitorias >= 11 && saldoVitorias <= 20){
        return "Bronze"
    }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        return "Prata"
    }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        return "Ouro"
    }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        return "Diamante"
    }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        return "Lendário"
    }else if(saldoVitorias >= 101){
        return "Imortal"
    }
}

function mainPartidaRankeada(vitorias, derrotas){
    let saldoVitorias = calculoDoSaldo (vitorias, derrotas)
    let nivel = descobrindoONivel(saldoVitorias)
    return `O Herói tem saldo de vitória de ${saldoVitorias} e está no nível de ${nivel}.`
}

console.log(mainPartidaRankeada(100, 10))
console.log("Com grandes poderes, vêm grandes responsabilidades.")