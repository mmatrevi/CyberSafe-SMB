"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allQuestions } from "../../data/riskQuestions"; // Make sure this file exists

const policyTemplates = [
  { title: "Password Policy", url: "/templates/password-policy.pdf" },
  { title: "Phishing Response Plan", url: "/templates/phishing-response.pdf" },
  { title: "Data Backup Policy", url: "/templates/backup-policy.pdf" },
  { title: "Device Security Guidelines", url: "/templates/device-policy.pdf" },
];

function getRandomQuestions(count: number) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function RiskCheck() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const selected = getRandomQuestions(7);
    setQuestions(selected);
    setAnswers(Array(selected.length).fill(null));
  }, []);

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => answers.filter((a) => a === true).length;

  const getRiskLevel = (score: number) => {
    if (score <= 3) return { level: "High Risk 🔴", color: "text-red-600" };
    if (score <= 5) return { level: "Moderate Risk 🟡", color: "text-yellow-500" };
    return { level: "Low Risk 🟢", color: "text-green-600" };
  };

  const risk = getRiskLevel(calculateScore());

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-10 text-center">
            Cyber Risk Self-Assessment
          </h1>

          <AnimatePresence>
            {!submitted ? (
              <>
                {questions.map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200"
                  >
                    <p className="font-semibold text-lg text-gray-800 mb-4">{q}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleAnswer(i, true)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition ${answers[i] === true
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-green-100"
                          }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(i, false)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition ${answers[i] === false
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-red-100"
                          }`}
                      >
                        No
                      </button>
                    </div>
                  </motion.div>
                ))}

                <div className="flex justify-center">
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={answers.includes(null)}
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow-md disabled:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center mt-10"
              >
                <h2 className={`text-3xl font-semibold ${risk.color}`}>{risk.level}</h2>
                <p className="mt-2 text-gray-700 text-lg">
                  You scored {calculateScore()} out of {questions.length}
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Use these free policy templates to help secure your business:
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                  {policyTemplates.map((template) => (
                    <motion.a
                      key={template.title}
                      href={template.url}
                      target="_blank"
                      download
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="block bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition text-blue-700 font-medium"
                    >
                      {template.title}
                    </motion.a>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const newQ = getRandomQuestions(7);
                    setQuestions(newQ);
                    setAnswers(Array(newQ.length).fill(null));
                    setSubmitted(false);
                  }}
                  className="mt-10 text-blue-700 underline hover:text-blue-900"
                >
                  Retake the Assessment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
