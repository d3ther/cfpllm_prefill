import React from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Result = () => {
  const location = useLocation();
  const { userAnswers, intervalTimes } = location.state;

  // Define the correct answers
  const correctAnswers = [
    [
      "V86T8W", // PNR
      "Answer2", // Origin Airport
      "Answer3", // Destination Airport
      "Answer4", // Airline Code
      "Answer5", // Airline Code di page 2
      "VN-181", // Flight Code di page 2
      // "2024-06-12T19:30",
      // "2024-06-12T20:00",
    ],
    // Add all correct answers for each question
    [
      "Answer1", // PNR
      "Answer2", // Origin Airport
      "Answer3", // Destination Airport
      "Answer4", // Airline Code
      "Answer5", // Airline Code di page 2
      "VN-182", // Flight Code di page 2
      // "2024-06-12T19:30",
      // "2024-06-12T20:00",
    ],
    [
      "Answer1", // PNR
      "Answer2", // Origin Airport
      "Answer3", // Destination Airport
      "Answer4", // Airline Code
      "Answer5", // Airline Code di page 2
      "VN-182", // Flight Code di page 2
      // "2024-06-12T19:30",
      // "2024-06-12T20:00",
    ],
    [
      "Answer1", // PNR
      "Answer2", // Origin Airport
      "Answer3", // Destination Airport
      "Answer4", // Airline Code
      "Answer5", // Airline Code di page 2
      "VN-182", // Flight Code di page 2
      // "2024-06-12T19:30",
      // "2024-06-12T20:00",
    ],
  ];

  // Calculate the total score
  const totalScore = userAnswers.reduce((total, answers, questionIndex) => {
    return (
      total +
      answers.reduce((score, answer, index) => {
        return (
          score + (answer === correctAnswers[questionIndex][index] ? 1 : 0)
        );
      }, 0)
    );
  }, 0);

  // Calculate the maximum score
  const maxScore = correctAnswers.reduce(
    (total, answers) => total + answers.length,
    0
  );

  // Calculate the total time taken
  const totalTime =
    intervalTimes.reduce((total, time) => total + time, 0) / 1000; // convert ms to seconds

  const averageTime = totalTime / intervalTimes.length;

  return (
    <div>
      <h2>Prefill</h2>
      <h2>Experiment Results</h2>
      <p>
        Total Score: {totalScore} / {maxScore}
      </p>

      <p>Total Time: {totalTime.toFixed(2)} seconds</p>
      <p>Average Time per Question: {averageTime.toFixed(2)} seconds</p>
      <h3>Time Intervals for Each Question:</h3>
      <ul>
        {intervalTimes.map((time, index) => (
          <li key={index}>
            Question {index + 1}: {(time / 1000).toFixed(2)} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
