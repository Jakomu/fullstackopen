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
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={bad + neutral + good} />
            </tr>
            <tr>
              <StatisticLine
                text="average"
                value={(good - bad) / (good + neutral + bad)}
              />
            </tr>
            <tr>
              <StatisticLine
                text="positive"
                value={(good / (good + neutral + bad)) * 100 + " %"}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <td>
      {text} {value}
    </td>
  );
};

export default App;
