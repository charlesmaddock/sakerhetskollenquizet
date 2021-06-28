import { SEVERAL_OPTION, YES_NO } from "./constants";
import getPretendScore from "./getPretendScore";

export const getMaxScore = (questions) => {
  let maxScore = 0;
  questions.forEach((question) => {
    if (question.type === YES_NO) {
      if (question.yes_score > question.no_score) {
        maxScore += getPretendScore(question.yes_score);
      } else {
        maxScore += getPretendScore(question.no_score);
      }
    } else if (question.type === SEVERAL_OPTION) {
      let maxOptionScore = 0;
      Object.values(question.options).map((optionObj) => {
        if (optionObj.score > maxOptionScore) {
          maxOptionScore = optionObj.score;
        }
      });
      maxScore += getPretendScore(maxOptionScore);
    }
  });
  console.log("maxScore is: ", maxScore);
  return maxScore;
};
