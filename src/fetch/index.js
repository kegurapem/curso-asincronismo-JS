let contenido = document.querySelector('#contenido')

function traer() {
    // console.log('Hello World')
        fetch('info.txt')
        .then(data => data.text())
        .then(data =>  {
            // console.log(data);
            contenido.innerHTML = `${data}`
        })

}