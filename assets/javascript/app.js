// Variables declared
var quizCard = $("#quiz-area");
// var countDown; // variable that will hold our interval ID when game "runs"
// var timer = 90; // setting the timer @ 90 seconds
// var answerCounter = 0;
// var correctCounter = 0;
// var incorrectCounter = 0;
// var unansweredCounter = 0;

// List of trivia questions (constant)
const triviaQuestions = [
    {
        question: "What type of galaxy is the most common in the universe?",
        answers: ["Ellptical", "Spiral", "Peculiar", "Irregular"],
        correctAnswer: "Ellptical"
      },
    {
        question: "What is the most common type of star found in the Milky Way?",
        answers: ["White Dwarf stars", "Protostars", "Red Dwarf stars", "Giant Red stars"],
        correctAnswer: "Red Dwarf stars"
      },
      {
        question: "What is the farthest distance from Earth a manned mission has traveled? (Plus or minus 20,000 miles.)",
        answers: ["100,000 miles", "543,678 miles", "395,600 miles", "248,655 miles"],
        correctAnswer: "248,655 miles"
      },
      {
        question: "What are the dimensions in inches of the first footprint on Earth’s moon?",
        answers: ["12 by 4 inches", "13 by 6 inches", "15 by 5 inches", "10 by 7 inches"],
        correctAnswer: "13 by 6 inches"
      },
      {
        question: "How old is the universe in years? (Plus or minus 1 billion years.)",
        answers: ["13.8 billion years old", "20.4 billions years old", "14 billion years old", "23.8 billions years old"],
        correctAnswer: "13.8 billion years old"
      },
      {
        question: "What percent of the universe is dark matter? (Plus or minus 2%.)",
        answers: ["15%", "20%", "27%", "30%"],
        correctAnswer: "27%"
      },
      {
        question: "How many minutes was the shortest space flight?",
        answers: ["10 minutes", "15 minutes", "25 minutes", "30 minutes"],
        correctAnswer: "15 minutes"
      },
      {
        question: "How many moons does Jupiter have?",
        answers: ["80", "20", "108", "67"],
        correctAnswer: "67"
      },
      {
        question: "What flavor ice cream did Baskin-Robbins release in 1969 to commemorate America’s landing on the moon?",
        answers: ["Out Of This World Swirl", "Lunar Cheesecake", "Apollo's Lunar Landing", "One Giant Leap for Chocolately Fudge"],
        correctAnswer: "Lunar Cheesecake"
      },
];

// Variables for interval
var timer;

var startOfGame = {
  correct: 0,
  incorrect: 0,
  counter: 120, 

  countDown: function() {
    
  }

};


