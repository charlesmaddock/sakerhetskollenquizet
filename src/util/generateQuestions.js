import { GENERAL_PROFILE, QUESTIONS } from "./constants";

export const generate_questions = (profileState) => {
  var newQuestions = [];
  QUESTIONS.forEach((question) => {
    console.log("iterated questions profile: ", question.forProfile);
    console.log("Have we selected it? ", profileState[question.forProfile]);
    if (
      profileState[question.forProfile] === true ||
      question.forProfile === GENERAL_PROFILE
    ) {
      newQuestions.push(question);
    }
  });
  console.log("generated questions: ", newQuestions);
  return newQuestions;
};
