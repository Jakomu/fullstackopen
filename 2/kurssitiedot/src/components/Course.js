import Header from "./Header";
import Content from "./Content";
import ExerciseTotal from "./ExerciseTotal";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <ExerciseTotal parts={course.parts} />
    </div>
  );
};

export default Course;
