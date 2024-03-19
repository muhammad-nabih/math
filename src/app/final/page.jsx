"use client";
import React, { useState } from "react";

import { questions } from "./question";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      const selectedOption = answers[questionId];
      const correctAnswer = questions[i].correctAnswer;
      if (selectedOption === correctAnswer) {
        score++;
      }
    }
    setResult(score);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 text-blue-900 ">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-2xl sm:text-sm md:text-sm lg:text-lg border-y-2 py-2  text-center bg-slate-200 font-bold mb-4 ">
          📋 اختبار الكتروني علي مادة العلوم الترم الاول والثاني
        </h1>
        <form onSubmit={onSubmit}>
          <div className="space-y-4 my-5">
            {questions.map((q) => (
              <div key={q.id}>
                <p className="bg-stone-900 p-2 my-2  text-stone-100   font-bold rounded-s-3xl">
                  <span className="text-yellow-400 mx-1">{q.id}-</span>
                  {q.question}
                </p>
                <select
                  className="cursor-pointer w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 
                  font-bold text-xl sm:text-sm md:text-sm
                  focus:outline-none"
                  onChange={(e) => handleSelect(q.id, e.target.value)}
                >
                  <option
                    className="bg-black text-white text-lg sm:text-sm md:text-sm "
                    value=""
                  >
                    اختر الإجابة
                  </option>
                  {q.options.map((option, index) => (
                    <option
                      className="cursor-pointer bg-stone-200 text-lg sm:text-sm md:text-sm"
                      key={index}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            تقديم الإجابات
          </button>
        </form>
        {result !== null && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 p-8 rounded-lg text-center text-white text-3xl font-bold border-yellow-400 border-5 border border-solid transition-opacity duration-300 opacity-100">
            <strong className="text-blue-400">نتيجتك:</strong>
            <span className="text-yellow-600 mx-2"> {result} </span>
            من
            <span className="text-yellow-600 mx-2"> {questions.length} </span>
          </div>
        )}
      </div>
    </div>
  );
}
