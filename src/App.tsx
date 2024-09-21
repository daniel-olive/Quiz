import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions"; //Dados
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";

function App() {
    const [answers, setAnswers] = useState<number[]>([]);
    const [currentQuestions, setCurrentQuestions] = useState(0); //Salva a questão nesse estado
    const [showResult, setShowResult] = useState(false);

    const title = "Quiz de culinária";

    const loadNextQuestions = () => {
        if (questions[currentQuestions + 1]) {
            // console.log(questions)
            setCurrentQuestions(currentQuestions + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleAnswered = (answer: number) => {
        setAnswers([...answers, answer]);
        loadNextQuestions();
    };

    const handleRestartQuiz = () => {
        setAnswers([]);
        setCurrentQuestions(0);
        setShowResult(false);
    };
    return (
        <div className="w-full my-10 flex justify-center items-center bg-blue-500">
            <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
                <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
                <div className="p-5 ">
                    {!showResult && (
                        <QuestionItem
                            question={questions[currentQuestions]}
                            count={currentQuestions + 1}
                            onAnswer={handleAnswered}
                        />
                    )}
                    {showResult && (
                        <Results
                            questions={questions}
                            answers={answers}
                        />
                    )}
                </div>
                <div className="p-5 text-center border-t border-gray-300">
                    {!showResult && `${currentQuestions + 1} de ${questions.length} pergunta${questions.length === 1 ? "" : "s"}`}
                    {showResult && (
                        <button
                            onClick={handleRestartQuiz}
                            className="text-white px-3 py-2  rounded-md bg-blue-800"
                        >
                            Reiniciar Quiz
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
