function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date 
    var hora = 10
    // data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'foto-manha1.png'
        document.body.style.background = '#fec765'
    } else if (hora >= 12 && hora <18 ){
        img.src = 'foto-tarde1.png'
        document.body.style.background = '#f6c59e'
    } else {
        img.src = 'foto-noite1.png'
        document.body.style.background = '#053354'
        
    }

}

