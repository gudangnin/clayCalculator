function calculapeca(){

    var pesoDaPeca = document.getElementById('pesopeca').value;
    var valorArgila = document.getElementById('valorargila').value;
    var valorEsmalte = document.getElementById('valoresmalte').value;
    var valorForno = document.getElementById('valorqueima').value;
     
   
     
    if(pesoDaPeca != 0){
        let valorTotal = ((parseInt(pesoDaPeca) * parseFloat(valorArgila)) + parseFloat(valorEsmalte) + parseFloat(valorForno));
        document.getElementById("paragrafo").textContent = `Sua peça custará ${valorTotal} R$`;
    }else{
        alert("Insira um valor válido");
    }
}







