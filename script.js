document.getElementById("calcular").addEventListener("click", function() {
    // Obter entradas
    const horas = parseInt(document.getElementById("horas").value) || 0;
    const minutos = parseInt(document.getElementById("minutos").value) || 0;
    const segundos = parseInt(document.getElementById("segundos").value) || 0;
    const km = parseInt(document.getElementById("km").value) || 0;
    const m = parseInt(document.getElementById("m").value) || 0;

    // Calcular tempo total em segundos
    const tempoTotalEmSegundos = (horas * 3600) + (minutos * 60) + segundos;

    // Calcular distância total em quilômetros
    const distanciaTotalEmKm = km + (m / 1000);

    // Verificar se a distância é maior que zero para evitar divisão por zero
    if (distanciaTotalEmKm <= 0) {
        document.getElementById("resultado").innerText = "A distância deve ser maior que zero.";
        return;
    }

    // Calcular o pace (tempo por quilômetro)
    const paceEmSegundos = tempoTotalEmSegundos / distanciaTotalEmKm;

    // Converter o pace em minutos e segundos
    let paceMinutos = Math.floor(paceEmSegundos / 60);
    let paceSegundos = Math.round(paceEmSegundos % 60);

    // Ajustar caso os segundos sejam 60 ou mais
    if (paceSegundos > 59) {
        paceMinutos += Math.floor(paceSegundos / 60);
        paceSegundos = paceSegundos % 60;
    }

    // Exibir o resultado
    document.getElementById("resultado").innerText = 
        `Ritmo Médio: ${paceMinutos} minutos e ${paceSegundos} segundos`;
});