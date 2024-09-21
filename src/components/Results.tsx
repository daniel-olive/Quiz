type Props = {
    questions: any;
    answers: number[];
};
export const Results = ({ questions, answers }: Props) => {
    return (
        <div className="my-5">
            {questions.map((item: any, key: any) => (
                <div
                    key={key}
                    className={`mb-3 p-2 rounded-md ${item.answer === answers[key] ? "bg-green-100 " : "bg-red-100 "}`}
                >   
                    <div className="font-bold">
                        {key + 1}. {item.question}
                    </div>
                    <div>
                        <span>({item.answer === answers[key] ? "Acertô" : "Errrou!"}) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    );
};
