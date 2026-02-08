export default function QuestionCard({ question, showAnswer }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">
        {question.question}
      </h2>

      {/* MCQ */}
      {question.type === "mcq" && (
        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <div
              key={i}
              className="p-3 bg-gray-100 rounded-lg"
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* TRUE FALSE */}
      {question.type === "truefalse" && (
        <div className="flex gap-4">
          <div className="p-3 bg-gray-100 rounded-lg w-full text-center">
            True
          </div>
          <div className="p-3 bg-gray-100 rounded-lg w-full text-center">
            False
          </div>
        </div>
      )}

      {/* Other types */}
      {["fillblank", "oneword", "short"].includes(question.type) && (
        <div className="p-3 bg-gray-100 rounded-lg">
          Think the Answer.. Baccha
        </div>
      )}

      {showAnswer && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg font-semibold">
          ✔️ Answer: {question.answer}
        </div>
      )}
    </div>
  );
}
