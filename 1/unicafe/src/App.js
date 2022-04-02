import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header />
      <Button rating="good" setRating={addGood} />
      <Button rating="neutral" setRating={addNeutral} />
      <Button rating="bad" setRating={addBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Header = () => <h1>give feedback</h1>;

const Button = ({ rating, setRating }) => {
  return <button onClick={setRating}>{rating}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={bad + neutral + good} />
        <StatisticLine
          text="average"
          value={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          value={(good / (good + neutral + bad)) * 100 + " %"}
        />
      </div>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

export default App;
