import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { devices } from "../../../../Utils";

const Countdown = ({ resetTimer, timeUpHandler }) => {
  const initialState = { minutes: 0, seconds: 10 };
  const [timer, setTimer] = useState(initialState);

  const resetCountdown = () => {
    setTimer(initialState);
  };

  useEffect(() => {
    resetTimer && resetCountdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetTimer]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer.seconds === 0 && prevTimer.minutes !== 0) {
          return { minutes: prevTimer.minutes - 1, seconds: 59 };
        } else if (prevTimer.seconds === 0 && prevTimer.minutes === 0) {
          timeUpHandler(true);
          clearInterval(countdownInterval);
          return { minutes: 0, seconds: 0 };
        } else {
          return { ...prevTimer, seconds: prevTimer.seconds - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetTimer]);

  return (
    <Container>
      {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
      {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
    </Container>
  );
};

export default Countdown;

const Container = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;
