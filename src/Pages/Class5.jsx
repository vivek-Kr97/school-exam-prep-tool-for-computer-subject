import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Class5() {
  const navigate = useNavigate();

  const questionTypes = [
    { label: "MCQ", value: "mcq", emoji: "📝" },
    { label: "Fill in the Blanks", value: "fillblank", emoji: "✍️" },
    { label: "True / False", value: "truefalse", emoji: "✅" },
    { label: "One Word", value: "oneword", emoji: "🔤" },
    { label: "Short Answer", value: "short", emoji: "📄" },
  ];

  const startPractice = (type) => {
    navigate(`/practice?class=5&type=${type}`);
  };

  return (
    <><Nav/>
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 p-4">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600">
          Class 5 Computer Practice
        </h1>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Choose a question type and start practicing for your final exams.
          Each section is designed as per your school syllabus.
        </p>
      </div>

      {/* Practice Options */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          Select Practice Mode
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {questionTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => startPractice(type.value)}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">{type.emoji}</div>
              <h3 className="text-lg font-bold mb-1">{type.label}</h3>
              <p className="text-sm text-gray-500">
                Practice {type.label} questions for Class 5
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-5xl mx-auto mt-10 text-center text-sm text-gray-500">
        Designed for easy learning • Practice regularly for best results
      </div>

    </div>
    <Footer/>
    </>
  );
}
