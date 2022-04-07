import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import QuestionPage from "../pages/QuestionPage";

function Router() {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="question" element={<QuestionPage />} />
      
    </Routes>
  )
}

export default Router;