





function copiarTexto(){
    let textoCopiado = document.getElementById('saida');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    document.execCommand('copy');
}