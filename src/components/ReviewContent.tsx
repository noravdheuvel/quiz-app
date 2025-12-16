import React from 'react';
import Typography from '@mui/material/Typography';
import BorderedGrid from './BorderedGrid';

interface ReviewContentProps {
  questions: { question: string; options: string[] }[];
  optionSelections: boolean[][];
}

const ReviewContent: React.FC<ReviewContentProps> = ({ questions, optionSelections }) => {
  return (
    <BorderedGrid size={12}>
      <Typography variant="h3">Review Answers</Typography>
      {questions.map((question, questionIndex) => (
        <div key={`review-question-${questionIndex}`}>
          <Typography variant="body2">{question.question}</Typography>
          <ul>
            {optionSelections[questionIndex].filter((selected) => selected).length === 0 ? (
              <li>No options selected</li>
            ) : (
              question.options.map(
                (option, optionIndex) =>
                  optionSelections[questionIndex][optionIndex] && (
                    <li key={`review-option-${optionIndex}`}>{option}</li>
                  )
              )
            )}
          </ul>
        </div>
      ))}
    </BorderedGrid>
  );
};

export default ReviewContent;