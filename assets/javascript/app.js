// Variables declared
var countDown; // variable that will hold our interval ID when game "runs"
var timer = 90; // setting the timer @ 90 seconds
var answerCounter = 0;
var CorrectCounter = 0;
var IncorrectCounter = 0;
var UnansweredCounter = 0;

// List of trivia questions (constant)
const triviaQuestions = [
    {
        question: "What type of galaxy is the most common in the universe?",
        answers: ["Ellptical", "Spiral", "Peculiar", "Irregular"],
        correctAnswer: 0
      },
    {
        question: "What is the most common type of star found in the Milky Way?",
        answers: ["White Dwarf stars", "Protostars", "Red Dwarf stars", "Giant Red stars"],
        correctAnswer: 2
      },
      {
        question: "What is the farthest distance from Earth a manned mission has traveled? (Plus or minus 20,000 miles.)",
        answers: ["100,000 miles", "543,678 miles", "395,600 miles", "248,655 miles"],
        correctAnswer: 3
      },
      {
        question: "What are the dimensions in inches of the first footprint on Earth’s moon?",
        answers: ["12 by 4 inches", "13 by 6 inches", "15 by 5 inches", "10 by 7 inches"],
        correctAnswer: 1
      },
      {
        question: "How old is the universe in years? (Plus or minus 1 billion years.)",
        answers: ["13.8 billion years old", "20.4 billions years old", "14 billion years old", "23.8 billions years old"],
        correctAnswer: 0
      },
      {
        question: "What percent of the universe is dark matter? (Plus or minus 2%.)",
        answers: ["15%", "20%", "27%", "30%"],
        correctAnswer: 2
      },
      {
        question: "How many minutes was the shortest space flight?",
        answers: ["10 minutes", "15 minutes", "25 minutes", "30 minutes"],
        correctAnswer: 1
      },
      {
        question: "How many moons does Jupiter have?",
        answers: ["80", "20", "108", "67"],
        correctAnswer: 3
      },
      {
        question: "What flavor ice cream did Baskin-Robbins release in 1969 to commemorate America’s landing on the moon?",
        answers: ["Out Of This World Swirl", "Lunar Cheesecake", "Apollo's Lunar Landing", "One Giant Leap for Chocolately Fudge"],
        correctAnswer: 1
      },
];


// Click the Start button to begin (event button .on("click" function()))
// Create a function that counts down
$("#start").on("click", function() {
    $(this).hide();

    $("#time").html("<h2>Time Remaining: 90 seconds</h2>"+ "<br></br>")

    runGame();
// Display the questions
    $("#trivia-question1").html("<h3>" + triviaQuestions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline1' value='0'>" + "<label>" + "triviaQuestions[0].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline1' value='1'>" + "<label>" + "triviaQuestions[0].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline1' value='2'>" + "<label>" + "triviaQuestions[0].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline1' value='3'>" + "<label>" + "triviaQuestions[0].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[1].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline2' value='0'>" + "<label>" + "triviaQuestions[1].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline2' value='1'>" + "<label>" + "triviaQuestions[1].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline2' value='2'>" + "<label>" + "triviaQuestions[1].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline2' value='3'>" + "<label>" + "triviaQuestions[1].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[2].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline3' value='0'>" + "<label>" + "triviaQuestions[2].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline3' value='1'>" + "<label>" + "triviaQuestions[2].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline3' value='2'>" + "<label>" + "triviaQuestions[2].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline3' value='3'>" + "<label>" + "triviaQuestions[2].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[3].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline4' value='0'>" + "<label>" + "triviaQuestions[0].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline4' value='1'>" + "<label>" + "triviaQuestions[3].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline4' value='2'>" + "<label>" + "triviaQuestions[3].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline4' value='3'>" + "<label>" + "triviaQuestions[3].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[4].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline5' value='0'>" + "<label>" + "triviaQuestions[4].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline5' value='1'>" + "<label>" + "triviaQuestions[4].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline5' value='2'>" + "<label>" + "triviaQuestions[4].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline5' value='3'>" + "<label>" + "triviaQuestions[4].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[5].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline6' value='0'>" + "<label>" + "triviaQuestions[5].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline6' value='1'>" + "<label>" + "triviaQuestions[5].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline6' value='2'>" + "<label>" + "triviaQuestions[5].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline6' value='3'>" + "<label>" + "triviaQuestions[5].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[6].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline7' value='0'>" + "<label>" + "triviaQuestions[6].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline7' value='1'>" + "<label>" + "triviaQuestions[6].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline7' value='2'>" + "<label>" + "triviaQuestions[06].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline7' value='3'>" + "<label>" + "triviaQuestions[6].answers[3]" + "</label>"
    );

    $("#trivia-question1").html("<h3>" + triviaQuestions[7].question + "</h3>");
    $("#answer1").html("<input type='radio' name='customRadioInline8' value='0'>" + "<label>" + "triviaQuestions[8].answers[0]" + "</label>"
    + "<input type='radio' name='customRadioInline8' value='1'>" + "<label>" + "triviaQuestions[8].answers[1]" + "</label>"
    + "<input type='radio' name='customRadioInline8' value='2'>" + "<label>" + "triviaQuestions[8].answers[2]" + "</label>"
    + "<input type='radio' name='customRadioInline8' value='3'>" + "<label>" + "triviaQuestions[8].answers[3]" + "</label>"
    );
}



// move through the questions and choose one answer for each question

// when timer hits 0 seconds, the game is over

// when the game is finished
    // display Correct: (#)
    // display Incorrect: (#)
    // Unanswered: (#) -- total number of questions - questions not clicked

