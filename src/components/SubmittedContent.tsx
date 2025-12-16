import React from 'react';
import BorderedGrid from './BorderedGrid';

const SubmittedContent: React.FC = () => {
  return (
    <BorderedGrid size={12}>
      <h2>Quiz Submitted</h2>
      <p>Thank you for submitting the quiz!</p>
    </BorderedGrid>
  );
};

export default SubmittedContent;