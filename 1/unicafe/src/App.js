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
  if (good + neutral + bad == 0) {
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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {bad + neutral + good}</p>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
        <p>positive {(good / (good + neutral + bad)) * 100} %</p>
      </div>
    );
  }
};

export default App;
