import { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
      if (minute === 59 && second === 59) {
        setHour(hour + 1);
        setMinute(0);
      }
      if (hour === 23 && minute === 59 && second === 59) {
        setHour(0);
        setMinute(0);
        setSecond(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [second, minute, hour]);

  const padZeros = (number) => {
    return number.toString().length === 1 ? "0" + number : number;
  };

  return (
    <div>
      <label>
        {padZeros(hour)}:{padZeros(minute)}:{padZeros(second)}
      </label>
    </div>
  );
};

export default Timer;
