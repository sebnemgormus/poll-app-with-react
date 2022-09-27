import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Question.css";


const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://polls.apiblueprint.org/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="question-body">
      <h2> Question List</h2>
      {questions &&
        questions.map((question) => (
          <div key={question.question} className="question-container">
            <Link className="questions-link" to={`${question.url}`}>
              <p className="questions-name" style={{textAlign:'left'}}>
              ◦ {question.question} 
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Question;
