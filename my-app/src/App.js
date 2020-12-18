import  { useState } from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';
import Section from './Components/Section';
import './Components/styles.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = opt => {
    switch (opt) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

      return (
      <div className="main-section">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={leaveFeedback} options={['good', 'neutral', 'bad']}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }

export default App;
