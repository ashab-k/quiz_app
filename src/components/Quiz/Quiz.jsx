import React from "react";
import "./Quiz.css";
import { useState } from "react";

const Quiz = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [question, setQuestion] = useState([
    {
      id: 0,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Highly Typed Modular Language",
        "Hyper Transferable Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: 1,
      question:
        "Which CSS property is used to control the layout flow of the document and the positioning of its content?",
      options: ["float", "position", "display", "clear"],
      correctAnswer: "position",
    },
    {
      id: 2,
      question: "What is the purpose of JavaScript?",
      options: [
        "To style web pages",
        "To structure web content",
        "To program the behavior of web pages",
        "To define web page layout",
      ],
      correctAnswer: "To program the behavior of web pages",
    },
    {
      id: 3,
      question:
        "What is the role of a version control system like Git in web development?",
      options: [
        "To format HTML code",
        "Tracking changes and collaboration",
        "To design database structures",
        "To test website performance",
      ],
      correctAnswer: "Tracking changes and collaboration",
    },
    {
      id: 4,
      question:
        "Which of the following is a JavaScript framework/library for building user interfaces?",
      options: ["Django", "React", "Express", "Flask"],
      correctAnswer: "React",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);

  const checkAnswer = (e, SelectedOption) => {
    const correctAnswer = question[currentQuestionIndex].correctAnswer;
    if (!answerSelected) {
      setAnswerSelected(true);
      if (SelectedOption === correctAnswer) {
        e.target.classList.add("correct");

        setCurrentScore(currentScore + 1);
      } else {
        e.target.classList.add("wrong");
        const correctIndex =
          question[currentQuestionIndex].options.indexOf(correctAnswer);
        const correctOptionElement =
          e.target.parentNode.childNodes[correctIndex];
        correctOptionElement.classList.add("correct");
      }
    }
  };

  const resetClasses = () => {
    const options = document.querySelectorAll(".options li");
    options.forEach((option) => {
      option.classList.remove("correct", "wrong");
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerSelected(false);
      resetClasses();
    } else {
      return;
    }
  };

  const options = question[currentQuestionIndex].options;
  return (
    <div className="container">
      <h1>Quiz</h1>
      <hr />
      <h2 className="question">
        {currentQuestionIndex + 1}. {question[currentQuestionIndex].question}
      </h2>
      <ul className="options">
        <li onClick={(e) => checkAnswer(e, options[0])}>{options[0]}</li>
        <li onClick={(e) => checkAnswer(e, options[1])}>{options[1]}</li>
        <li onClick={(e) => checkAnswer(e, options[2])}>{options[2]}</li>
        <li onClick={(e) => checkAnswer(e, options[3])}>{options[3]}</li>
      </ul>
      <div className="btn">
        <button onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default Quiz;
