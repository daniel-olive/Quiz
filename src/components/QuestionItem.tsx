import { useState } from "react";
import { QuestionsType } from "../types/QuestionsType";

type Props = {
    question: QuestionsType;
    count: number; // Contabiliza o número da questão
    onAnswer: (answer: number) => void; // em resposta
};
export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
        }
        setTimeout(() => {
            onAnswer(key);
            setSelectedAnswer(null);
        }, 1500);
    };
    return (
        <div>
            <div className="text-xl font-bold mb-5">
                {count}. {question.question}
            </div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 bg-blue-100
                            ${selectedAnswer !== null ? "cursor-auto" : "hover:opacity-60 cursor-pointer"}    
                            ${selectedAnswer !== null && selectedAnswer == question.answer && selectedAnswer === key && "bg-green-100 border-green-300"}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && "bg-red-100 border-red-300"}
                        `}
                        onClick={() => checkQuestion(key)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
