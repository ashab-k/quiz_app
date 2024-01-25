import React from "react";
import "./Quiz.css";
import { useState } from "react";

const Quiz = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [question, setQuestion] = useState([
    {
      id: 0,
      question:
        'In the anime "Naruto," what is the name of Naruto Uzumaki\'s sensei?',
      options: ["Kakashi Hatake", "Jiraiya", "Orochimaru", "Iruka Umino"],
      correctAnswer: "Kakashi Hatake",
    },
    {
      id: 1,
      question:
        'Which anime features a high school club where the main characters play the game "Keijo"?',
      options: ["My Hero Academia", "Free!", "Haikyuu!!", "Keijo!!!!!!!!"],
      correctAnswer: "Keijo!!!!!!!!",
    },
    {
      id: 2,
      question: 'In "One Piece," what is the name of Monkey D. Luffy\'s ship?',
      options: [
        "Soul King",
        "Going Merry",
        "Straw Hat Franky",
        "Thousand Sunny",
      ],
      correctAnswer: "Going Merry",
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
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setAnswerSelected(false);
    resetClasses();
  };

  const options = question[currentQuestionIndex].options;
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2 className="question">{question[currentQuestionIndex].question}</h2>
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
