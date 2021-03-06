import { Button, Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import SwipeableViews from "react-swipeable-views";

// Custom components
import {
  AlignCenter,
  Fade,
  StyledButton,
  StyledMarkdown,
} from "../components/general";
import StyledLink from "../components/general/StyledLink";
import {
  HEIGHT,
  QUESTIONS,
  BANK_PROFILE,
  GAMING_PROFILE,
  STREAMING_PROFILE,
  SOCIAL_MEDIA_PROFILE,
  YES_NO,
  SEVERAL_OPTION,
  GENERAL_PROFILE,
} from "../util/constants";

import { generateQuestions } from "../util/generateQuestions";
import gauge_img from "../assets/gauge.png";
import pointer_img from "../assets/pointer.png";
import { getMaxScore } from "../util/getMaxScore";
import getPretendScore from "../util/getPretendScore";

const SlideWrapper = ({ children }) => {
  return (
    <AlignCenter>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: 20,
        }}
      >
        {children}
      </div>
    </AlignCenter>
  );
};

const ProfilCheckbox = ({ profileState, handleChange, name, t }) => {
  return (
    <Grid item xs={6}>
      <div
        style={{
          background: "rgba(62, 166, 207, 0.3)",
          borderRadius: 10,
          width: "100%",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={profileState[name]}
              onChange={handleChange}
              name={name}
            />
          }
          label={t("profileSelection.profiles." + name)}
        />
      </div>
    </Grid>
  );
};

const ProfileSelection = ({
  t,
  nextSlide,
  profileState,
  handleProfileCheckboxChecked,
}) => {
  return (
    <SlideWrapper>
      <h2>{t("profileSelection.title")}</h2>
      <p>{t("profileSelection.desc")}</p>
      <Grid container xs={12} alignItems="center" justify="center">
        <Grid item xs={11} sm={12} md={8} lg={6} xl={4}>
          <Grid container xs={12} spacing={1}>
            <ProfilCheckbox
              t={t}
              profileState={profileState}
              handleChange={handleProfileCheckboxChecked}
              name={BANK_PROFILE}
            />
            <ProfilCheckbox
              t={t}
              profileState={profileState}
              handleChange={handleProfileCheckboxChecked}
              name={GAMING_PROFILE}
            />
            <ProfilCheckbox
              t={t}
              profileState={profileState}
              handleChange={handleProfileCheckboxChecked}
              name={STREAMING_PROFILE}
            />
            <ProfilCheckbox
              t={t}
              profileState={profileState}
              handleChange={handleProfileCheckboxChecked}
              name={SOCIAL_MEDIA_PROFILE}
            />
          </Grid>
          <StyledButton
            style={{ marginTop: 20, width: "50%" }}
            onClick={nextSlide}
          >
            {t("general.next")}
          </StyledButton>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
};

const AnswerOptions = ({ questionData, onSelectAnswer }) => {
  if (questionData.type === YES_NO) {
    return (
      <>
        <StyledButton
          style={{ margin: "6px 0" }}
          onClick={() => onSelectAnswer(questionData.yes_score)}
        >
          Yes
        </StyledButton>
        <StyledButton
          style={{ margin: "6px 0" }}
          onClick={() => onSelectAnswer(questionData.no_score)}
        >
          No
        </StyledButton>
      </>
    );
  } else if (questionData.type === SEVERAL_OPTION) {
    return (
      <>
        {questionData.options.map((option) => (
          <div style={{ margin: "6px 0" }}>
            <StyledButton onClick={() => onSelectAnswer(option.score)}>
              {option.text}
            </StyledButton>
          </div>
        ))}
      </>
    );
  }
};

const Question = ({
  t,
  last,
  questionData,
  nextQuestion,
  handleIncrementScore,
}) => {
  const [questionResult, setQuestionResult] = useState(null);

  const onSelectAnswer = (score) => {
    if (questionResult === null) {
      var res = "";
      if (score > 0.8) {
        res = "Correct!";
      } else if (score > 0.5) {
        res = "Almost right...";
      } else if (score > 0.2) {
        res = "Not right, not wrong...";
      } else {
        res = "Wrong.";
      }
      setQuestionResult(res);
      handleIncrementScore(score);
    }
  };

  return (
    <SlideWrapper>
      <Grid container spacing={2}>
        <Grid sm={12} style={{ textAlign: "start" }}>
          {questionResult !== null ? (
            <Fade>
              <div style={{ height: HEIGHT }}>
                <h2>{questionResult}</h2>
                <p>{questionData.moreInfo}</p>
                <p>
                  Read more here:{" "}
                  <StyledLink colored href={questionData.readMoreLink}>
                    {questionData.readMoreLink}
                  </StyledLink>
                </p>
                <StyledButton onClick={nextQuestion}>
                  {t(last === true ? "test.result" : "test.nextQuestion")}
                </StyledButton>
              </div>
            </Fade>
          ) : (
            <Grid sm={12} style={{ textAlign: "start" }}>
              <h3>{questionData.title}</h3>
              <StyledMarkdown>{questionData.text}</StyledMarkdown>
              <AnswerOptions
                questionData={questionData}
                onSelectAnswer={onSelectAnswer}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </SlideWrapper>
  );
};

const Questions = ({ t, nextSlide, questions, score, increaseScore }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextQuestion = () => {
    console.log("questionIndex: ", questionIndex);
    console.log("questions.length: ", questions.length);
    if (questionIndex + 1 === questions.length) {
      nextSlide();
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleIncrementScore = (score) => {
    increaseScore(score);
  };

  return (
    <>
      <AlignCenter>
        <Grid container direction="column">
          <p style={{ margin: "0 0 0 4px" }}>Score: {score}</p>
          <p style={{ margin: "0 0 0 4px" }}>
            Question {questionIndex + 1}/{questions.length}
          </p>
        </Grid>
      </AlignCenter>

      <SwipeableViews index={questionIndex}>
        {questions.map((questionData, index) => (
          <div key={index}>
            <Question
              t={t}
              last={index + 1 === questions.length}
              questionData={questions[questionIndex]}
              nextQuestion={nextQuestion}
              handleIncrementScore={handleIncrementScore}
            />
          </div>
        ))}
      </SwipeableViews>
    </>
  );
};

const Result = ({ score, maxScore, testFinished }) => {
  const [rotation, setRotation] = useState(-120);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const animationTime = 10;
  const timeoutStep = 0.1;

  useEffect(() => {
    setTimeout(() => {
      if (testFinished === true && animationDone === false) {
        setElapsedTime(elapsedTime + timeoutStep);

        let target_rot = (score / maxScore) * 220;
        let new_rot = target_rot * (elapsedTime / animationTime);
        console.log(elapsedTime / animationTime);
        setRotation(new_rot - 120);

        if (elapsedTime > animationTime) {
          setAnimationDone(true);
        }
      }
    }, timeoutStep * 100);
  }, [animationDone, elapsedTime, maxScore, score, testFinished]);

  return (
    <AlignCenter>
      <Grid style={{ textAlign: "center" }} container direction="column">
        <div
          style={{
            height: 300,
            width: 200,
            position: "relative",
            marginLeft: "16%",
          }}
        >
          <img style={{ position: "absolute" }} alt="" src={gauge_img} />
          <img
            style={{
              position: "absolute",
              top: 30,
              transform: "rotate(" + rotation + "deg)",
            }}
            alt=""
            src={pointer_img}
          />
        </div>
        <p>
          Your score is {score} out of {maxScore}
        </p>
      </Grid>
    </AlignCenter>
  );
};

const TestSlides = ({ t }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [profileState, setState] = useState({
    [BANK_PROFILE]: false,
    [GAMING_PROFILE]: false,
    [STREAMING_PROFILE]: false,
    [SOCIAL_MEDIA_PROFILE]: false,
  });

  const handleProfileCheckboxChecked = (event) => {
    setState({ ...profileState, [event.target.name]: event.target.checked });
  };

  const increaseScore = (inc) => {
    setScore(Number(score) + getPretendScore(inc));
  };

  const nextSlide = () => {
    console.log(slideIndex);
    if (slideIndex === 0) {
      let generated_questions = generateQuestions(profileState);
      let maxScore = getMaxScore(generated_questions);
      setQuestions(generated_questions);
      setMaxScore(maxScore);
    } else if (slideIndex === 1) {
      setTestFinished(true);
    }
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div style={{ height: HEIGHT }}>
      <SwipeableViews index={slideIndex}>
        <ProfileSelection
          t={t}
          nextSlide={nextSlide}
          handleProfileCheckboxChecked={handleProfileCheckboxChecked}
          profileState={profileState}
        />
        <Questions
          t={t}
          nextSlide={nextSlide}
          questions={questions}
          score={score}
          increaseScore={increaseScore}
        />
        <Result score={score} maxScore={maxScore} testFinished={testFinished} />
      </SwipeableViews>
    </div>
  );
};

export default withTranslation("common")(TestSlides);
