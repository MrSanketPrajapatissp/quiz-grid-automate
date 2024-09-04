import { useState } from "react";
import "./App.css";
import propTypes from "prop-types";
export default function App() {
  return <QuestionGrid />;
}

function QuestionGrid() {
  const [selectId, setId] = useState(1);

  return (
    <div>
      <Question id={selectId} />

      <div className="all-button-grid">
        <div className="container">
          <div
            className="button"
            onClick={function () {
              setId(1);
            }}
          >
            1
          </div>

          <div
            className="button"
            onClick={function () {
              setId(2);
            }}
          >
            2
          </div>

          <div
            className="button"
            onClick={function () {
              setId(3);
            }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

function Question({ id }) {
  const [getquestion, setquestion] = useState([
    { id: 1, question: "My first Question", description: "description" },
    { id: 2, question: "My Second Question", description: "description" },
    { id: 3, question: "My Third Question", description: "description" },
    { id: 4, question: "My Fourth Question", description: "description" },
  ]);

  // Find the question with the matching id
  const currentQuestion = getquestion.find((q) => q.id === id);

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
};
