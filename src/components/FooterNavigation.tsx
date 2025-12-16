import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavigationButton from './NavigationButton';
import BorderedGrid from './BorderedGrid';
import ProgressIndicator from './ProgressIndicator';
import { PAGE_QUIZ, PAGE_REVIEW, PAGE_SUBMITTED} from '../App';

interface FooterNavigationProps {
  pageToShow: typeof PAGE_QUIZ | typeof PAGE_REVIEW | typeof PAGE_SUBMITTED;
  questionIndex: number;
  totalQuestions: number;
  navigate: (direction: 'next' | 'previous') => void;
  setPageToShow: (page: typeof PAGE_QUIZ | typeof PAGE_REVIEW | typeof PAGE_SUBMITTED
  ) => void;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  pageToShow,
  questionIndex,
  totalQuestions,
  navigate,
  setPageToShow,
}) => {
  return (
    <BorderedGrid container size={12}>
      <Grid size={6} container alignItems="center" spacing={'1rem'}>
        <NavigationButton direction="previous" navigate={navigate} disabled={questionIndex === 0} />
        {pageToShow === PAGE_QUIZ && (
          <ProgressIndicator current={questionIndex + 1} total={totalQuestions} />
        )}
        <NavigationButton
          direction="next"
          navigate={navigate}
          disabled={questionIndex === totalQuestions - 1}
        />
      </Grid>
      <Grid size={6} container justifyContent="flex-end">
        {pageToShow === PAGE_QUIZ && questionIndex === totalQuestions - 1 ? (
          <Button variant="contained" onClick={() => setPageToShow(PAGE_REVIEW)}>
            Review Answers
          </Button>
        ) : pageToShow === PAGE_REVIEW && (
            <Button variant="contained" onClick={() => setPageToShow(PAGE_SUBMITTED)}>
              Submit Quiz
            </Button>
        )}
      </Grid>
    </BorderedGrid>
  );
};

export default FooterNavigation;