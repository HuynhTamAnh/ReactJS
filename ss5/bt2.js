const questions = [
  {
    question: "Câu hỏi 1: Ai là người đầu tiên đặt chân lên Mặt Trăng?",
    answers: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
      "Yuri Gagarin",
    ],
    correctAnswer: 0,
  },
  {
    question: "Câu hỏi 2: Đâu là hành tinh thứ tư trong hệ Mặt Trời?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: 0,
  },
  {
    question: "Câu hỏi 3: Thủ đô của Việt Nam là thành phố nào?",
    answers: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"],
    correctAnswer: 0,
  },
  {
    question: "Câu hỏi 4: Đỉnh núi cao nhất thế giới là núi nào?",
    answers: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: 0,
  },
  // Thêm câu hỏi thứ 5 vào đây
];

let currentQuestionIndex = 0;
let timeLeft = 10;
let timer;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => checkAnswer(index);
      answersDiv.appendChild(button);
    });
    resetTimer();
  } else {
    endGame();
  }
}

function checkAnswer(selectedIndex) {
  clearTimeout(timer);
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    console.log("Đáp án đúng!");
  } else {
    console.log("Đáp án sai!");
  }
  currentQuestionIndex++;
  displayQuestion();
}

function resetTimer() {
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  document.getElementById("time").textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    currentQuestionIndex++;
    displayQuestion();
  }
}

function endGame() {
  console.log("Kết thúc trò chơi. Điểm của bạn là: ...");
  // Hiển thị nút chơi lại và xử lý sự kiện click cho nó
}

// Khởi tạo trò chơi
displayQuestion();
