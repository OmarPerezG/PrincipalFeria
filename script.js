const preguntas = [
    // Combina todas las preguntas de 'facil', 'medio', y 'dificil' en un solo array
    { pregunta: "¿Qué distancia se recomienda estar para evitar un riesgo por destello de arco?", opciones: ["1.5 metros", "10 pies", "1 metro"], answer: "1.5 metros" },
    { pregunta: "¿Qué es MPS?", opciones: ["Monitoring procedure system", "Machine power system", "Monitoring power system"], answer: "Monitoring power system" },
    { pregunta: "Cuando se está verificando voltaje en una instalación eléctrica se dice que se está trabajando en:", opciones: ["En zona limite restringido", "En caliente", "En condiciones normales 127V"], answer: "En caliente" },
    { pregunta: "¿Cuál de estas es una herramienta de bloqueo?", opciones: ["Llave", "Candado", "Cadena"], answer: "Candado" },
    // Agrega aquí todas las preguntas de todos los niveles de dificultad
    // ...
];

let currentQuestion = null;

document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});

function showQuestion() {
    if (preguntas.length === 0) {
        alert("No hay más preguntas disponibles.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * preguntas.length);
    currentQuestion = preguntas[randomIndex];
    
    document.getElementById("question").textContent = currentQuestion.pregunta;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => checkAnswer(opcion);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultModal = document.getElementById("resultModal");
    const resultMessage = document.getElementById("resultMessage");
    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");

    if (selectedOption === currentQuestion.answer) {
        resultMessage.textContent = "¡Respuesta correcta!";
        correctSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.href = "https://omarperezg.github.io/Ruleta/"; // Cambia a la ruta correcta
        }, 3000); // Redirige después de 3 segundos
    } else {
        resultMessage.textContent = "Respuesta incorrecta. La respuesta correcta es: " + currentQuestion.answer;
        incorrectSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.href = "https://omarperezg.github.io/end/"; // Cambia a la ruta correcta
        }, 3000); // Redirige después de 3 segundos
    }
}
