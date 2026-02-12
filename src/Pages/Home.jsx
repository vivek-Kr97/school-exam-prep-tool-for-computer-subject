import { FaLaptopCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
  const classes = [5, 6, 7, 8];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

    <Nav/>

      {/* ===== HERO SECTION ===== */}
      <section className="bg-linear-to-r from-[#FF7722] to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Computer Practice Portal
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-orange-100 mb-8">
            Practice MCQs, revise concepts, and prepare confidently for your
            computer exams from Class 5 to Class 8.
          </p>

          <h3 className="mb-6"> <i>A small effort from your teacher to support you in your final exam preparation 2025-26.</i> </h3>
          <button
            onClick={() => navigate("/class-5")}
            className="bg-white text-[#FF7722] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Practicing
          </button>
        </div>
      </section>


      <div className="grid mt-6 text-white m-6  ">
        <button 
              onClick={() => navigate("/test-series")}
              className="bg-blue-500 rounded-2xl shadow-lg p-6 text-left hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold mb-1">Mock Test</h3>
              <p className="text-sm">
                Mock test questions for Your practice
              </p>
        </button>
    </div>


     <div className="grid mt-6 text-white m-6  ">
        <button 
              onClick={() => navigate("/answer-key")}
              className="bg-green-500 rounded-2xl shadow-lg p-6 text-left hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">🔑</div>
              <h3 className="text-lg font-bold mb-1">Final Question Answer Key</h3>
              <p className="text-sm">
                Answers of the Questions Asked in Final Exam
              </p>
        </button>
    </div>

      {/* ===== CLASS SELECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-10">
          📚 Select Your Class
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => navigate(`/class-${cls}`)}
              className="group bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <FaLaptopCode
                size={36}
                className="text-blue-500 group-hover:text-blue-600 mb-3"
              />
              <span className="text-xl font-semibold text-gray-800">
                Class {cls}
              </span>
            </button>
          ))}
        </div>
    


      </section>

      {/* ===== ABOUT SCHOOL ===== */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">🏫 About the School</h2>
          <p className="text-gray-700 leading-relaxed">
            Trivia Concept School, Noorsarai, Nalanda focuses on strong
            conceptual learning with practical exposure. This portal is
            designed to help students practice computer questions aligned
            with the school syllabus and improve exam performance.
          </p>
        </div>
      </section>

      {/* ===== EXAM INFO ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">📝 About Exams</h2>
        <ul className="list-disc columns-2 gap-20 flex-2 pl-6 text-gray-700 space-y-2">
          <li>Questions strictly based on school syllabus</li>
          <li>MCQs, True/False, Fill in the Blanks, and more</li>
          <li>Instant feedback for better understanding</li>
          <li>Designed for Classes 5 to 8</li>
        </ul>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer/>


    </div>
  );
}
