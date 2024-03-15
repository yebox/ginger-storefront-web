
import styled, { keyframes } from 'styled-components';



const moveLine = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;



export const LineLoader = ({ loading }) => {
    return (
        <>
            {
                loading &&
                <LoaderContainer>
                    <MovingLine />
                    <BlurredContent />
                </LoaderContainer>
            }


        </>

    )
}


const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

const MovingLine = styled.div`
  width: 100%;
  height: 100%;
  height: 3px; 
  background-color: var(--primary-color); 
  animation: ${moveLine} 1s linear infinite;
`;
const BlurredContent = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 3px;
    left: 0;
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 1;
`;