import { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [decision, setDecision] = useState(null);

  const questions = [
    {
      question: "Have you ever written a line of code on your own?",
      options: ["Yes", "No", "With AI help", "Probably"],
      answer: "Yes",
    },
    {
      question: "Which language are you thorough with? ",
      options: [ "Hindi", "Telugu", "Python", "Java",],
      answer: "Java",
    },
    {
      question: "Have you ever solved a LeetCode problem?",
      options: ["Yes", "No", "With AI help"],
      answer: "Yes",
    },
    {
      question:
        "Which operator is used to compare two values in most programming languages?",
      options: ["=", "==", "!=", "==="],
      answer: "==",
    },
    {
      question: "Which loop will run exactly 10 times?",
      options: [
        "for i in range(10):",
        "while True:",
        "for(i=1; i<=5; i+=2)",
        "while(i<0)",
      ],
      answer: "for i in range(10):",
    },
    {
      question: "Which of these is a floating-point number?",
      options: ["10", "10.5", "'10'", "0"],
      answer: "10.5",
    },
    {
      question: "Which one defines the result of: true && false",
      options: ["True", "False", "Undefined","Null"],
      answer: "False",
    },
    {
      question:
        "What does the % operator do in most programming languages?",
      options: ["Division", "Multiplication", "Modulus (Remainder)", "Power"],
      answer: "Modulus (Remainder)",
    },
  ];

  const handleAnswer = (option) => {
    let newScore = score;
    if (option === questions[currentQuestion].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    const next = currentQuestion + 1;

    if (next >= questions.length) {
      // Quiz finished
      setDecision(newScore >= 5 ? "Smart Interview 🚀" : "Being Zero 📘");
      return;
    }

    setCurrentQuestion(next);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-blue-400 p-4">
      {decision ? (
        <div className="result-box">
          <h2 className="text-2xl">We suggest: {decision}</h2>
          
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, i) => (
              <button key={i} onClick={() => handleAnswer(option)}
                className="w-full py-3 bg-gradient-to-br from-white to-blue-800 rounded-xl shadow-md hover:scale-105 hover:from-green-600 hover:to-blue-900 transition-transform duration-300 font-semibold text-gray-800 mt-2 border-1"
                >{option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
