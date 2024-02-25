let quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Who wrote Romeo and Juliet?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      correctAnswer: "Jupiter"
    }
  ];
  
  let score = 0;
  
  // Function to display a random quiz question along with multiple-choice answers
  function displayRandomQuestion() {
    let randomIndex = Math.floor(Math.random() * quizQuestions.length);
    let question = quizQuestions[randomIndex];
  
    console.log("Question: " + question.question);
    console.log("Options:");
    question.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  
    let userAnswer = prompt("Enter your answer (1, 2, 3, 4):");
  
    if (userAnswer === null || userAnswer === "") {
      console.log("No answer provided.");
    } else {
      userAnswer = parseInt(userAnswer);
      if (userAnswer >= 1 && userAnswer <= question.options.length) {
        let selectedOption = question.options[userAnswer - 1];
        if (selectedOption === question.correctAnswer) {
          console.log("Correct answer!");
          score++;
        } else {
          console.log("Wrong answer. The correct answer is: " + question.correctAnswer);
        }
      } else {
        console.log("Invalid option.");
      }
    }
  }
  
  // Function to run the quiz
  function runQuiz() {
    console.log("Welcome to the Quiz Game!");
    console.log("----------------------------");
  
    quizQuestions.forEach(() => {
      displayRandomQuestion();
    });
  
    console.log("----------------------------");
    console.log("Quiz ended. Your final score is: " + score);
  }
  
  // Run the quiz
  runQuiz();