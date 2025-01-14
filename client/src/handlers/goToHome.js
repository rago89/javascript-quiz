import { state } from "../init/state.js";
// eslint-disable-next-line import/no-cycle
import { router } from "../init/router.js";

export const goToHome = () => {
  state.currentQuestion = 0;
  for (let i = 0; i < state.questions.length; i++) {
    // we loop through all questions
    const question = state.questions[i]; // we get one specific question
    question.answered = false; // user hasn't answered to any question
    for (let j = 0; j < question.answers.length; j++) {
      const answerOfQuestion = question.answers[j]; // we get one specific answer
      answerOfQuestion.selected = false;
    }
  }
  // clean the results
  for (const key in state.results) {
    if (key === "totalQuestions") {
      // eslint-disable-next-line no-continue
      continue;
    }
    state.results[key] = 0;
  }

  router.navigate("");
  console.log(state);
};
