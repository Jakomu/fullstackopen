const ExerciseTotal = ({ parts }) => {
  let totalNumberOfExercises = 0;
  for (let x in parts) {
    totalNumberOfExercises += parts[x].exercises;
  }

  return (
    <div>
      <p>total of {totalNumberOfExercises} exercises</p>
    </div>
  );
};

export default ExerciseTotal;
