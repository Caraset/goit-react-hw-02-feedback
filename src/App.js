import { Component } from 'react';
import s from './App.module.css';

import FeedbackMenu from './components/Feedback-menu';
import Statistics from './components/Statistics';
import Section from './components/Section/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // neOchen: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedback() {
    let stats = this.state;
    let total = 0;

    for (let stat in stats) {
      total += stats[stat];
    }

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100) || 0;
  }
  render() {
    return (
      <div className={s.app}>
        <Section title={'Please leave feedback'}>
          <div className={s.feedbackForm}>
            <FeedbackMenu
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
            {/* <Statistic options={this.state} /> */}
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
