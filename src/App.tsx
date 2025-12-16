import React from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import quizData from './quiz.json';
import Header from './components/Header';
import QuizContent from './components/QuizContent';
import ReviewContent from './components/ReviewContent';
import FooterNavigation from './components/FooterNavigation';
import theme from './theme';
import SubmittedContent from './components/SubmittedContent';

export const PAGE_QUIZ = 'quiz';
export const PAGE_REVIEW = 'review';
export const PAGE_SUBMITTED = 'submitted';

const App: React.FC = () => {
  const quiz = quizData;
  const defaultOptionSelections: boolean[][] = quiz.questions.map((q) =>
    q.options.map(() => false)
  );

  const [pageToShow, setPageToShow] = React.useState< typeof PAGE_QUIZ | typeof PAGE_REVIEW | typeof PAGE_SUBMITTED>(PAGE_QUIZ);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [optionSelections, setOptionSelections] = React.useState<boolean[][]>(
    defaultOptionSelections
  );

  const handleOptionChange = (optionIndex: number, isSelected: boolean) => {
    setOptionSelections((prevSelections) => {
      const newSelections = [...prevSelections];
      newSelections[questionIndex] = [...newSelections[questionIndex]];
      newSelections[questionIndex][optionIndex] = isSelected;
      return newSelections;
    });
  };

  const navigate = (direction: 'next' | 'previous') => {
    if (pageToShow === PAGE_REVIEW && direction === 'previous') {
      setPageToShow(PAGE_QUIZ);
      setQuestionIndex(quiz.questions.length - 1);
      return;
    }

    setQuestionIndex((prevIndex) => {
      const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
      if (newIndex < 0 || newIndex >= quiz.questions.length) {
        return prevIndex;
      }
      return newIndex;
    });
  };

  const renderPageContent = () => {
    switch (pageToShow) {
      case PAGE_QUIZ:
        return (
          <QuizContent
            questionText={quiz.questions[questionIndex].question}
            questionSubtext={quiz.questions[questionIndex].subtext}
            questionOptions={quiz.questions[questionIndex].options}
            optionSelections={optionSelections[questionIndex]}
            handleOptionChange={handleOptionChange}
          />
        );
      case PAGE_REVIEW:
        return <ReviewContent questions={quiz.questions} optionSelections={optionSelections} />;
      case PAGE_SUBMITTED:
        return <SubmittedContent />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header title={quiz.title} />
      <Grid container spacing={2} margin={theme.spacing(2)}>
        {renderPageContent()}
        {pageToShow !== PAGE_SUBMITTED && (
          <FooterNavigation
            pageToShow={pageToShow}
            questionIndex={questionIndex}
            totalQuestions={quiz.questions.length}
            navigate={navigate}
            setPageToShow={setPageToShow}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
