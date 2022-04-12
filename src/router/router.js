import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import QuestionPage from "../pages/QuestionPage";
import ResultPage from "../pages/ResultPage";

function Router() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="question" element={<QuestionPage />} />
      <Route path="result" element={<ResultPage />} />
      
    </Routes>
  )
}

export default Router;