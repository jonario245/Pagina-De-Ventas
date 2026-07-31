// Mensaje al cargar la página
window.addEventListener("load", () => {
   alert("¡Bienvenido! Sitio actualizado con JavaScript.");
});

// Cambiar el título al hacer clic
document.addEventListener("click", () => {
    document.title = "Página de Ventas";
});

// Mostrar la fecha y hora en la consola
setInterval(() => {
    console.clear();
    console.log("Fecha y hora:", new Date().toLocaleString());
}, 1000);