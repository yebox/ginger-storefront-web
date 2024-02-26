import React from "react";
import styled from "styled-components";
import { Check } from "../../../../../../Assets/Svgs";
import { TrackStepTypes } from "./data";

const Step = ({
  completed,
  active,
  date,
  time,
  stepType: { initialTextObj, activeTextObj, completedTxtObj },
}) => {
  const getTextObj = () => {
    if (completed) return completedTxtObj;
    if (active) return activeTextObj;
    return initialTextObj;
  };

  const { main, sub, status } = getTextObj();

  return (
    <StepWrapper $active={active} $completed={completed}>
      <Connector />
      <Content $active={active} $completed={completed}>
        <DateWrapper $active={active} $completed={completed}>
          {date ? (
            <>
              <MainTxt>{date}</MainTxt>
              <SubTxt>{time}</SubTxt>
            </>
          ) : (
            <Status>{status}</Status>
          )}
        </DateWrapper>
        <Circle $active={active} $completed={completed}>
          {completed && <Check />}
        </Circle>
        <DetailsWrapper $active={active} $completed={completed}>
          <MainTxt>{main}</MainTxt>
          <SubTxt>{sub}</SubTxt>
        </DetailsWrapper>
      </Content>
    </StepWrapper>
  );
};

const TrackStepper = ({
  dateProcessed,
  timeProcessed,
  dateDispatched,
  timeDispatched,
  dateDelivered,
  timeDelivered,
}) => {
  return (
    <Container>
      <Step
        completed={dateProcessed}
        active={!dateProcessed}
        date={dateProcessed}
        time={timeProcessed}
        stepType={TrackStepTypes.processed}
      />
      <Step
        completed={dateDispatched}
        active={dateProcessed && !dateDispatched}
        date={dateDispatched}
        time={timeDispatched}
        stepType={TrackStepTypes.dispatched}
      />
      <Step
        completed={dateDelivered}
        active={dateDispatched && !dateDelivered}
        date={dateDelivered}
        time={timeDelivered}
        stepType={TrackStepTypes.delivered}
      />
      <StepperTail $completed={dateDelivered} />
    </Container>
  );
};

export default TrackStepper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    background: ${({ $active, $completed }) =>
      $completed || $active ? `#FF4623` : `#CCCCCC`};
  }
`;

const Connector = styled.span`
  width: 1.34px;
  height: 50px;
  flex-shrink: 0;
  background: #cccccc;
  transition: all 0.25s ease;
`;

const StepperTail = styled(Connector)`
  margin-left: 11px;
  background: ${({ $completed }) => ($completed ? `#FF4623` : `#CCCCCC`)};
`;

const Content = styled.div`
  position: relative;

  & > p {
    color: ${({ $completed, $active }) =>
      $completed ? `#FF4623` : $active ? `#000510` : `#CCCCCC`};
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? `#FF4623` : `transparent`)};
  border: ${({ $completed, $active }) =>
    $completed
      ? `1.4px solid #FF4623`
      : $active
      ? `none`
      : `1.4px solid #CCCCCC`};
  transition: all 0.25s ease;

  & > svg {
    width: 14px;
    height: 14px;

    g {
      path {
        fill: #ff4623;
      }
    }
  }
`;

const DetailsWrapper = styled.div`
  position: absolute;
  width: 300px;
  left: 42px;
  height: 42px;
  bottom: -18px;
  display: flex;
  flex-direction: column;

  & > p {
    color: ${({ $active, $completed }) =>
      $completed ? `#ff4623` : $active ? `#000510` : `#828282`};
    font-weight: ${({ $active }) => ($active ? `600` : `400`)};
  }
`;

const DateWrapper = styled.div`
  position: absolute;
  width: 125px;
  right: 42px;
  bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > p {
    color: ${({ $active, $completed }) =>
      $completed ? `#ff4623` : $active ? `#000510` : `#828282`};
    font-weight: ${({ $active }) => ($active ? `600` : `400`)};
  }
`;

const MainTxt = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  transition: all 0.25s ease;
`;

const SubTxt = styled.p`
  color: #828282;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  transition: all 0.25s ease;
`;

const Status = styled(MainTxt)`
  font-style: italic;
  font-size: 14px;
`;
