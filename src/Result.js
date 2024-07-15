import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { userAnswers, intervalTimes } = location.state;

  const correctAnswers = [
    // Question 0
    [
      "IJ56KL",
      "JHB",
      "KUL",
      "VZ",
      "VZ",
      "VZ-1722",
      "2024-09-05T11:30",
      "2024-09-05T12:30",
    ],
    // Question 1
    [
      "V86T8W",
      "CNX",
      "BKK",
      "VZ",
      "VZ",
      "VZ-119",
      "2024-06-11T22:25",
      "2024-06-11T23:45",
    ],
    // Question 2
    [
      "A12B34",
      "HKT",
      "BKK",
      "VZ",
      "VZ",
      "VZ-1023",
      "2024-07-15T19:45",
      "2024-07-15T21:05",
    ],
    // Question 3
    [
      "C56D78",
      "HAN",
      "SGN",
      "VZ",
      "VZ",
      "VZ-4089",
      "2024-08-20T11:50",
      "2024-08-20T13:50",
    ],
    // Question 4
    [
      "HEGCVE",
      "SZB",
      "PEN",
      "FY",
      "FY",
      "FY-1426",
      "2024-05-01T07:35",
      "2024-05-01T08:35",
    ],
    // Question 5
    [
      "AB12CD",
      "SZB",
      "LGK",
      "FY",
      "FY",
      "FY-1532",
      "2024-07-10T09:30",
      "2024-07-10T10:30",
    ],
    // Question 6
    [
      "EF34GH",
      "PEN",
      "KBR",
      "FY",
      "FY",
      "FY-1620",
      "2024-08-20T12:30",
      "2024-08-20T13:30",
    ],
    // Question 7
    [
      "IJ56KL",
      "JHB",
      "KUL",
      "FY",
      "FY",
      "FY-1722",
      "2024-09-05T11:30",
      "2024-09-05T12:30",
    ],
    // Question 8
    [
      "N89OU6",
      "SGN",
      "HAN",
      "VN",
      "VN",
      "VN-246",
      "2024-06-27T07:00",
      "2024-06-27T07:45",
    ],
    // Question 9
    [
      "Y32TR9",
      "DAD",
      "SGN",
      "VN",
      "VN",
      "VN-312",
      "2024-08-15T14:00",
      "2024-08-15T15:30",
    ],
    // Question 10
    [
      "F56KLM",
      "CXR",
      "HAN",
      "VN",
      "VN",
      "VN-120",
      "2024-09-20T10:00",
      "2024-09-20T12:30",
    ],
    // Question 11
    [
      "G78NOP",
      "SGN",
      "DAD",
      "VN",
      "VN",
      "VN-220",
      "2024-11-10T16:30",
      "2024-11-10T18:00",
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
