import { useState } from "react";
import Statistics from "./Statistic/Statistics";
import FeedbackOptions from "./FeedbackVidget/FeedbackOptions";
import Notification from "./Notification/Notification";
import SectionTitle from "./Section/SectionTitle";
import { AppWrapper } from './App.styled';

export const App = () => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);

 const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  }
    return (
      <AppWrapper>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </AppWrapper>
    );
  
}
