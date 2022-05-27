
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ) {
       
        img.src = 'fotomanha.jpg'
        //Bom dia
    } else if (hora >= 13 && hora < 18)
    {
        img.src = 'fototarde.jpg'
        //boa tarde

    } else ( hora > 18 && hora <= 24)
    {
       
        img.src = 'fotonoite.jpg'
        //boa noie
    } 

}
