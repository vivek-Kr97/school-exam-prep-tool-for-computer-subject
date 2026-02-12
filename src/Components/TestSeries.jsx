import { useState } from "react";

import class5Questions from "../Data/Class5";
import class6Questions from "../Data/Class6";
import class7Questions from "../Data/Class7";
import class8Questions from "../Data/Class8";

export default function TestSeries() {

  const [selectedClass, setSelectedClass] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]);

  // 📚 class mapping
  const classData = {
    5: class5Questions,
    6: class6Questions,
    7: class7Questions,
    8: class8Questions
  };

  // 🎯 random helper
  const getRandom = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const generateTest = (classNum) => {

    setSelectedClass(classNum);

    const questions = classData[classNum] || [];

    const mcq = questions.filter(q => q.type === "mcq");
    const fill = questions.filter(q => q.type === "fillblank");
    const tf = questions.filter(q => q.type === "truefalse");
    const one = questions.filter(q => q.type === "oneword");
    const short = questions.filter(q => q.type === "short");

    const paper = [
      ...getRandom(mcq, 10),
      ...getRandom(fill, 5),
      ...getRandom(tf, 10),
      ...getRandom(one, 12),
      ...getRandom(short, 10)
    ].sort(() => Math.random() - 0.5);

    setTestQuestions(paper);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">

      {/* Header */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">
          📝 Test Series Mode
        </h1>

        {!selectedClass && (
          <div className="space-y-3">
            <p>Select Your Class</p>

            {[5,6,7,8].map(cls => (
              <button
                key={cls}
                onClick={() => generateTest(cls)}
                className="w-full bg-blue-500 text-white p-3 rounded-xl"
              >
                Class {cls}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Questions */}
      {testQuestions.length > 0 && (
        <div className="bg-white w-full max-w-5xl p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Practice Test – Class {selectedClass}
          </h2>

          {testQuestions.map((q, index) => (
            <div key={index} className="mb-6 border-b pb-4">

              <p className="font-semibold mb-2">
                Q{index + 1}. {q.question}
              </p>

              {q.options && (
                <ul className="pl-4 space-y-1 text-gray-700">
                  {q.options.map((opt, i) => (
                    <li key={i}>• {opt}</li>
                  ))}
                </ul>
              )}

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
