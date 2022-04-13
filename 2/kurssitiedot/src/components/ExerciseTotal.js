const ExerciseTotal = ({ parts }) => {
  let totalNumberOfExercises = parts.reduce(
    (total, currentValue) => total + currentValue.exercises,
    0
  );

  return (
    <div>
      <p>total of {totalNumberOfExercises} exercises</p>
    </div>
  );
};

export default ExerciseTotal;
