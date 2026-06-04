const questions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Program Unit",
            "Control Processing Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which language is used for web page styling?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        answer: "CSS"
    },
    {
        question: "Which company developed Java?",
        options: [
            "Google",
            "Microsoft",
            "Sun Microsystems",
            "Apple"
        ],
        answer: "Sun Microsystems"
    },
    {
        question: "What is the brain of a computer?",
        options: [
            "RAM",
            "Hard Disk",
            "CPU",
            "Monitor"
        ],
        answer: "CPU"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionElement.innerText = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option");

        btn.addEventListener("click", () => selectAnswer(btn, q.answer));

        optionsElement.appendChild(btn);
    });
}

function selectAnswer(button, correctAnswer) {
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(btn => btn.disabled = true);

    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    document.getElementById("score").innerText =
        `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
