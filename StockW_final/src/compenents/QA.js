import React, { useState } from 'react';
import style from './QA.css'

const QA = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([
    {
      name: 'John',
      date: '2022-10-01',
      question: 'What is the meaning of life?',
      answer: 'The meaning of life is subjective and can vary from person to person.',
    },
    {
      name: 'Jane',
      date: '2022-10-02',
      question: 'How do I make a cake?',
      answer: 'To make a cake, you will need flour, sugar, eggs, butter, baking powder, and milk. Mix the ingredients together and bake in an oven.',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { name, date, question }]);
    setName('');
    setDate('');
    setQuestion('');
  };

  return (
    <div className="container-QA">
      <div className="left">
        <h1>Q&A</h1>
        <h6>Ask questions, So that customers who have purchased products can answer your questions</h6>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Question:
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
          </label>
          <br />
          <input
            type="submit"
            value="Ask a Question"
            style={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }}
          />
        </form>
      </div>
      <div className="right">
        <h3>Recent Questions:</h3>
        <ul>
          <div className="answer">
            {questions.map((q, i) => (
              <li key={i}>
                <div className="answer">
                  {q.name} ({q.date}): {q.question}
                  {q.answer && (
                    <>
                      <br />
                      Answer: {q.answer}
                    </>
                  )}
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default QA;
