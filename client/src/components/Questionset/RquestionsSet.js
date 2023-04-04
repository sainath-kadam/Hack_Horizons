import { useState } from 'react';
import './QuestionsSet.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const questions = [
  {
    id: 1,
    text: 'What is React?',
    answer:
      'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
  },
  {
    id: 2,
    text: 'What are the key features of React?',
    answer:
      'React provides a virtual DOM, which allows for efficient updates and rendering of components. It also supports server-side rendering, one-way data binding, and a declarative programming model.',
  },
  {
    id: 3,
    text: 'What is JSX?',
    answer:
      'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and manage React components, as you can include HTML-like tags and attributes directly in your code.',
  },
];

function RquestionsSet() {
  const [expandedId, setExpandedId] = useState(null);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpandedId(isExpanded ? panelId : null);
  };

  return (
    <div className="accordion-container">
      {questions.map((question) => (
        <div className="accordion" key={question.id}>
          <div className="accordion-header" onClick={() => setExpandedId(question.id)}>
            <span className="accordion-header-icon">{expandedId === question.id ? '-' : '+'}</span>
            <h2 className="accordion-header-text">{question.text}</h2>
          </div>
          {expandedId === question.id && (
            <div className="accordion-body">
              <p>{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RquestionsSet;
