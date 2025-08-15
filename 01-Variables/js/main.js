//Seleccionar el botón y el párrafo
const calcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
  const anioNacimiento = prompt("Ingresa tu año de nacimiento.");
  const aniActual = new Date().getFullYear();
  const edad = aniActual - anioNacimiento;

  //Mostrar el resultado
  resultado.textContent = `Tienes aproximadamente ${edad} años.`;
});
