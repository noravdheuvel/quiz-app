import React from 'react';
import Grid from '@mui/material/Grid';
import BorderedGrid from './BorderedGrid';
import Question from './Question';
import OptionForm from './OptionForm';

interface QuizContentProps {
  questionText: string;
  questionSubtext?: string;
  questionOptions: string[];
  optionSelections: boolean[];
  handleOptionChange: (optionIndex: number, isSelected: boolean) => void;
}

const QuizContent: React.FC<QuizContentProps> = ({
  questionText,
  questionSubtext,
  questionOptions,
  optionSelections,
  handleOptionChange,
}) => {
  return (
    <Grid container size={12} spacing={2}>
      <BorderedGrid size={6}>
        <Question questionText={questionText} />
        {questionSubtext && <p>{questionSubtext}</p>}
      </BorderedGrid>
      <BorderedGrid size={6} container spacing={1} direction="column" alignItems="flex-start">
        <OptionForm
          questionOptions={questionOptions}
          optionSelections={optionSelections}
          handleOptionChange={handleOptionChange}
        />
      </BorderedGrid>
    </Grid>
  );
};

export default QuizContent;