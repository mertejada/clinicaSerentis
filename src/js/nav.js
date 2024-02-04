const nav = document.querySelector("#nav-links");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => { // al hacer click en abrir
    abrir.style.display = "none"; // el boton de abrir desaparece
    cerrar.style.display = "inline-block"; //aparece el boton cerrar
}); 

cerrar.addEventListener("click", () => { //al contrario
    nav.classList.remove("visible"); // el menu desaparece
    abrir.style.display = "inline-block";
    cerrar.style.display = "none";
});


//he tenido que añadir esto porque si no, al cambiar de tamaño de pantalla,el boton que estuviera visible no desaparecia
window.addEventListener("resize", () => { 
    if (window.innerWidth > 1024) {
        nav.classList.remove("visible");
        abrir.style.display = "none";
        cerrar.style.display = "none";
    } else {
        abrir.style.display = "block";
        cerrar.style.display = "block";
    }
});

if (window.innerWidth > 1024) {
    abrir.style.display = "none";
    cerrar.style.display = "none";
} else {
    abrir.style.display = "inline-block";
    cerrar.style.display = "none";
}
