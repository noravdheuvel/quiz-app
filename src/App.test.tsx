import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Quiz App', () => {
  test('renders the quiz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Sample Quiz/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the first question and its options', () => {
    render(<App />);
    const questionElement = screen.getByText(/Which of these activities do you enjoy?/i);
    expect(questionElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('checkbox');
    expect(optionElements).toHaveLength(4);
  });

  test('navigates to the next question', () => {
    render(<App />);
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    const nextQuestion = screen.getByText(/Which of these countries have you visited?/i);
    expect(nextQuestion).toBeInTheDocument();
  });

  test('navigates back to the previous question', () => {
    render(<App />);
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    const previousButton = screen.getByText('<');
    fireEvent.click(previousButton);

    const previousQuestion = screen.getByText(/Which of these activities do you enjoy?/i);
    expect(previousQuestion).toBeInTheDocument();
  });

  test('submits the quiz and shows the submission page', () => {
    render(<App />);
    const nextButton = screen.getByText('>');

    for (let i = 0; i < 2; i++) {
      fireEvent.click(nextButton);
    }

    const reviewButton = screen.getByText(/Review Answers/i);
    fireEvent.click(reviewButton);

    const submitButton = screen.getByText(/Submit Quiz/i);
    fireEvent.click(submitButton);

    const submissionMessage = screen.getByText(/Thank you for submitting the quiz!/i);
    expect(submissionMessage).toBeInTheDocument();
  });
});