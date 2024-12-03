const questions = [
    { q: "¿Cuál es el río más largo del mundo?", a: "Amazonas" },
    { q: "¿Quién pintó la Mona Lisa?", a: "Leonardo da Vinci" },
    { q: "¿En qué año llegó el hombre a la Luna?", a: "1969" },
    { q: "¿Cuál es el país más grande del mundo?", a: "Rusia" },
    { q: "¿Qué planeta es conocido como el planeta rojo?", a: "Marte" },
    { q: "¿Cuántos colores tiene el arcoíris?", a: "7" },
    { q: "¿Cuál es el océano más grande del mundo?", a: "Pacífico" },
    { q: "¿Qué animal es el símbolo de WWF?", a: "Panda" },
    { q: "¿En qué continente está Egipto?", a: "África" },
    { q: "¿Qué gas respiramos principalmente?", a: "Oxígeno" },
    // Agrega más preguntas aquí
];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

function loadQuiz() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < selectedQuestions.length) {
        const question = selectedQuestions[currentQuestion];
        document.getElementById("question").innerText = question.q;
        const options = `
            <button onclick="checkAnswer('true')">Correcto</button>
            <button onclick="checkAnswer('false')">Falso</button>
        `;
    }
}
