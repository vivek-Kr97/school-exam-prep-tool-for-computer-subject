import { useState } from "react";

import Class5Ans from "../Data/Class5Ans";
import Class6Ans from "../Data/Class6Ans";
import Class7Ans from "../Data/Class7Ans";
import Class8Ans from "../Data/Class8Ans";

export default function AnswerKey() {

  const [selectedClass, setSelectedClass] = useState(null);
  const [sections, setSections] = useState([]);

  const classData = {
    5: Class5Ans,
    6: Class6Ans,
    7: Class7Ans,
    8: Class8Ans
  };

  const loadAnswerKey = (cls) => {
    setSelectedClass(cls);
    setSections(classData[cls] || []);
  };

  // 🧠 helper to render complex answers
  const renderAnswer = (answer) => {
    if (typeof answer === "string" || typeof answer === "number") {
      return <p className="text-green-700">{answer}</p>;
    }

    if (typeof answer === "boolean") {
      return (
        <p className="text-green-700 font-semibold">
          {answer ? "True" : "False"}
        </p>
      );
    }

    if (typeof answer === "object") {
      return (
        <ul className="pl-4 list-disc text-green-700">
          {Object.entries(answer).map(([key, value], i) => (
            <li key={i}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">

      {/* Header */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">
          📘 Final Exam Answer Key
        </h1>

        {!selectedClass && (
          <div className="space-y-3">
            <p>Select Class</p>
            {[5, 6, 7, 8].map(cls => (
              <button
                key={cls}
                onClick={() => loadAnswerKey(cls)}
                className="w-full bg-green-600 text-white p-3 rounded-xl"
              >
                Class {cls}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Answer Key Content */}
      {sections.length > 0 && (
        <div className="bg-white w-full max-w-5xl p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-8 text-center">
            Answer Key – Class {selectedClass}
          </h2>

          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-10">

              {/* Section Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold">
                  {section.section}
                </h3>
                {section.marks && (
                  <p className="text-sm text-gray-600">
                    Marks: {section.marks}
                  </p>
                )}
              </div>

              {/* Questions */}
              {section.questions.map((q, qIndex) => (
                <div key={qIndex} className="mb-5 border-b pb-4">

                  <p className="font-medium mb-2">
                    Q{q.qNo}. {q.question}
                  </p>

                  {/* Options (MCQ) */}
                  {q.options && (
                    <ul className="pl-4 mb-2 text-gray-700">
                      {q.options.map((opt, i) => (
                        <li key={i}>• {opt}</li>
                      ))}
                    </ul>
                  )}

                  {/* Answer */}
                  <div className="mt-1">
                    <span className="font-semibold">Answer: </span>
                    {renderAnswer(q.correctAnswer ?? q.answer)}
                  </div>

                </div>
              ))}

            </div>
          ))}

        </div>
      )}

    </div>
  );
}