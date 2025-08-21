//Elementos del DOM
const btnEvaluar = document.getElementById("btnEvaluar");
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

//Función principal que se ejecuta al hacer clic en el botón
function evaluarNota() {
  const nota = parseInt(inputNota.value);
  const calificacion = obtenerCalificacion(nota);
  resultado.textContent = `La calificación es: ${calificacion}`;
}

//Función que determina la calificación según la nota
function obtenerCalificacion(nota) {
  if (isNaN(nota) || nota < 0 || nota > 100) {
    return "Nota inválida. Debe ser un número entre 0 y 100.";
  }

  if (nota >= 90) return "Excelente";
  if (nota >= 80 && nota <= 89) return "Muy Bueno";
  if (nota >= 70 && nota <= 79) return "Bueno";
  if (nota >= 60 && nota <= 69) return "Regular";
  return "Reprobado";
}

//Evento para el botón
btnEvaluar.addEventListener("click", evaluarNota);

inputNota.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    evaluarNota();
  }
});
