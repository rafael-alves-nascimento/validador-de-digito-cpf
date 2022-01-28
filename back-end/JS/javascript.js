function cpfCheck(){
    let cpf = document.getElementById("cpf").value

    let digito = cpf.split('.')[2].split("-")[0].split('')[2]

    console.log(digito)

    switch (digito) {
        case "8":
            resultado = "SP"
            break;
        case "9":
            resultado = "PR E SC"
            break;
        case "7":
            resultado = "RJ E ES"
            break;
        case "6":
            resultado = "MG"
            break;
        case "5":
            resultado = "BA , SE "
            break;
        case "4":
            resultado = "PB , PE , AL , RN "
            break;
        case "3":
            resultado = "CE , MA , PI "
            break;
        case "2":
            resultado = "AM , PA , RO , AL , AC , RR "
            break;
        case "1":
            resultado = "DF , GO , MT , MS , TO "
            break;
        case "0":
            resultado = " RS "
            break;

        
    }
    document.getElementById('respostas').value = resultado
}