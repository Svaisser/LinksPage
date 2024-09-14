function toogleMode(){
    const html = document.documentElement

    /*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } 
    Isso é abreviado pelo a função abaixo.
    */
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.jpg')
    } else{
        img.setAttribute('src', './assets/perfil.jpg')
    }
}