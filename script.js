window.onload = () => {
    
    //1.1
    let btn = document.querySelector("#btnToClick")
    btn.innerHTML = 'Click me!'
    btn.addEventListener("click", () => console.log('Has hecho click!'))

    //1.2
    let input = document.querySelector("input.focus")
    input.addEventListener ("focus", () => console.log('Estás dentro del input'))

    //1.3
    let change = document.querySelector("input.value")
    change.addEventListener("input", () => console.log('Ha cambiado el input'))
}
