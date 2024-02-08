import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  questions = [
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 1'
    },
    {
      question: 'Question 2',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 3'
    },
    {
      question: 'Question 3',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 3'
    },
    {
      question: 'Question 4',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 3'
    },
    {
      question: 'Question 5',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 3'
    },
  ];

  currentQuestionIndex = 0;
  selectedAnswer = '';
  totalQuestions = this.questions.length;
  userAnswers: string[] = [];
  quizSubmitted = false;

  ngOnInit(): void { }

  nextQuestion(): void {
    if (this.selectedAnswer !== null) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
    }
  }

  previousQuestion(): void {
    if (this.selectedAnswer !== null) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
      this.currentQuestionIndex--;
      this.selectedAnswer = '';
    }
  }

  isQuizComplete(): boolean {
    return this.userAnswers.every(answer => answer !== null && answer !== '') && this.selectedAnswer !== '';
  }

  submitQuiz(): void {
    if (this.selectedAnswer !== null) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
    }
    this.quizSubmitted = true;
  }

  reset(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.totalQuestions = this.questions.length;
    this.userAnswers = [];
    this.quizSubmitted = false;
  }
}