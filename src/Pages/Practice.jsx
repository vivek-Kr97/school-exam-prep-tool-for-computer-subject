import { useEffect, useState } from "react";
import QuestionCard from "../Components/QuestionCard";
import { useSearchParams } from "react-router-dom";
import class5Questions from "../Data/Class5";
import class6Questions from "../Data/Class6";
import class7Questions from "../Data/Class7";
import class8Questions from "../Data/Class8";





export default function Practice() {
    const [searchParams] = useSearchParams();
    const selectedType = searchParams.get("type");





    const selectedClass = searchParams.get("class");


    const classData = {
  "5": class5Questions,
  "6": class6Questions,
  "7": class7Questions,
  "8": class8Questions
};


  const questions =
  (classData[selectedClass] || []).filter(
    (q) => q.type === selectedType
  );

   useEffect(() => {
  setIndex(0);
  setShowAnswer(false);
}, [selectedClass, selectedType]);


  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = () => {
    setShowAnswer(false);
    setIndex((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev
    );
  };

  if (!questions.length) {
    return <div>No questions available</div>;
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold">
        Question {index + 1} / {questions.length}
      </div>

      <QuestionCard
        question={questions[index]}
        showAnswer={showAnswer}
      />

      <div className="flex gap-4 mt-6 w-full max-w-md">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex-1 bg-yellow-500 text-white p-4 rounded-xl"
        >
          👁 Toggle Answer
        </button>

        <button
          onClick={nextQuestion}
          className="flex-1 bg-blue-500 text-white p-4 rounded-xl"
        >
          ➡️ Next
        </button>
      </div>
    </div>
  );
}
