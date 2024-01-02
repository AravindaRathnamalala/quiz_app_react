import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
  }, []);

  return <progress id="question_time" max={timeout} value={remainingTime}/>;
};

export default QuestionTimer;
