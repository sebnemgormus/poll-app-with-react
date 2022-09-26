import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./QuestionDetail.css";

const QuestionDetail = () => {
  const [questionDetail, setQuestionDetail] = useState([]);
  const { questionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://polls.apiblueprint.org/questions/${questionId}`);
        setQuestionDetail(response.data.choices);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Question Details</h2>
      {questionDetail.map((question) => (
        <div className="questiondetail-container" key={question.url}>
          <p className="questiondetail-select">
          ◦ {question.choice}
          </p>
        </div>
      ))}
    </>
  );
};

export default QuestionDetail;
