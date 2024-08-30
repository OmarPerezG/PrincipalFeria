const preguntas = [
    { pregunta: "¿Qué distancia se recomienda estar para evitar un riesgo por destello de arco?", opciones: ["1.5 metros", "10 pies", "1 metro"], answer: "1.5 metros" },
    { pregunta: "¿Qué es MPS?", opciones: ["Monitoring procedure system", "Machine power system", "Monitoring power system"], answer: "Monitoring power system" },
    { pregunta: "Cuando se está verificando voltaje en una instalación eléctrica se dice que se está trabajando en:", opciones: ["En zona limite restringido", "En caliente", "En condiciones normales 127V"], answer: "En caliente" },
    { pregunta: "¿Cuál de estas es una herramienta de bloqueo?", opciones: ["Llave", "Candado", "Cadena"], answer: "Candado" },
    { pregunta: "¿Cuál de estas Energías es más peligrosa, primarias o secundarias?", opciones: ["Solo causan daños las energías primarias ya que con ellas funciona cualquier proceso, maquinaria o equipo.", "Ninguna de las dos es peligrosa", "Ambas son peligrosas ya que pueden causar daños en la misma magnitud, incluyendo las energías de tipo residual que se deben aislar y drenar"], answer: "Ambas son peligrosas ya que pueden causar daños en la misma magnitud, incluyendo las energías de tipo residual que se deben aislar y drenar" },
    { pregunta: "¿Cuál es el equipo de protección personal más básico?", opciones: ["Guantes", "Casco", "Arnés"], answer: "Casco" }
    // Puedes agregar más preguntas aquí
];

document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});

function showQuestion() {
    const randomIndex = Math.floor(Math.random() * preguntas.length);
    const currentQuestion = preguntas[randomIndex];
    
    document.getElementById("question").textContent = currentQuestion.pregunta;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => checkAnswer(opcion, currentQuestion.answer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const resultModal = document.getElementById("resultModal");
    const resultMessage = document.getElementById("resultMessage");
    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");

    if (selectedOption === correctAnswer) {
        resultMessage.textContent = "¡Respuesta correcta!";
        correctSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.reload(); // Recargar la página para mostrar una nueva pregunta
        }, 3000);
    } else {
        resultMessage.textContent = "Respuesta incorrecta. La respuesta correcta es: " + correctAnswer;
        incorrectSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.reload(); // Recargar la página para mostrar una nueva pregunta
        }, 3000);
    }
}
