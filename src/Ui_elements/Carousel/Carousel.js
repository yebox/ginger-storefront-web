import { useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 490px;
  background-color: #fff;
`;

const CarouselItemText = styled.div`
  font-size: 1.15rem;
  margin: 40px 0;
  padding: 0 20px;
  white-space: normal;
  color: #617d98;
`;

const CarouselImg = styled.img`
  width: 250px;
  padding: 0 20px;
`;

const CarouselButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const IndicatorButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

const IndicatorSymbol = styled.span`
  color: ${({ active }) => (active ? '#ffffff' : '#26343f')};
`;

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Baseball',
      description:
        'Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.',
      icon:
        require('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=3279&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    },
    {
      title: 'Walking',
      description:
        'Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ',
      icon:
        require('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    },
    {
      title: 'Weights',
      description:
        'Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.',
      icon:
        require('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <CarouselWrapper>
      <Inner style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div></div>
            <CarouselImg src={item.icon} alt={item.title} />
            <CarouselItemText>{item.description}</CarouselItemText>
          </CarouselItem>
        ))}
      </Inner>

      <div className="carousel-buttons">
        <CarouselButton
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </CarouselButton>
        <IndicatorsWrapper>
          {items.map((item, index) => (
            <IndicatorButton key={index} onClick={() => updateIndex(index)}>
              <IndicatorSymbol
                className={`material-symbols-outlined ${
                  index === activeIndex
                    ? 'indicator-symbol-active'
                    : 'indicator-symbol'
                }`}
                active={index === activeIndex}
              >
                radio_button_checked
              </IndicatorSymbol>
            </IndicatorButton>
          ))}
        </IndicatorsWrapper>
        <CarouselButton
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </CarouselButton>
      </div>
    </CarouselWrapper>
  );
};
