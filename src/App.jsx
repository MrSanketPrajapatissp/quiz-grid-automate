import { useState, useEffect } from "react";
import "./App.css";
import propTypes from "prop-types";

export default function App() {
  return <QuestionGrid />;
}

function QuestionGrid() {
  const [questions, setQuestions] = useState([]);
  const [selectedId, setSelectedId] = useState(1);

  // Fetch the questions from the JSON server
  useEffect(() => {
    fetch("http://localhost:3000/questions") // Adjust the URL if needed
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        if (data.length > 0) {
          setSelectedId(data[0].id); // Set the initial question to the first one
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Question id={selectedId} questions={questions} />

      <div className="all-button-grid">
        <div className="container">
          {questions.map((question) => (
            <div
              key={question.id}
              className="button"
              onClick={() => setSelectedId(question.id)}
            >
              {question.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Question({ id, questions }) {
  // Find the question with the matching id
  const currentQuestion = questions.find((q) => q.id === id);

  return (
    <div>
      Id: {id}
      {currentQuestion ? (
        <>
          <h3>{currentQuestion.question}</h3>
          <p>{currentQuestion.description}</p>
        </>
      ) : (
        <p>Question not found</p>
      )}
    </div>
  );
}

Question.propTypes = {
  id: propTypes.number.isRequired,
  questions: propTypes.array.isRequired,
};
