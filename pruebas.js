// declaracion de inputs
const input = document.getElementById("input");
//const mensaje = input.value;
const palabraABuscar = document.querySelector("p");
const palabraAComparar = palabraABuscar.substring(0, palabraABuscar.textContent.length);
palabraABuscar.classList.add("invisible");

console.log(palabraABuscar);

input.addEventListener("input", function () {



    if (this.value == palabraAComparar) {
        console.log(input.value.substring(0, this.value.length));
        palabraABuscar.classList.remove("invisible");
    } else {
        palabraABuscar.classList.add("invisible");
    }
});