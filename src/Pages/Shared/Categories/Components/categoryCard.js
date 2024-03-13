import styled from 'styled-components'
import { GButton } from '../../../../Ui_elements'

export const CategoryCard = ({ width }) => {
    return (
      <Container width={width}>
        <ImageBox>
          <img src='https://images.unsplash.com/photo-1710302004005-f5c4b87fac37?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <Badge>
            120 Brands
          </Badge>
          <GradientOverlay />
        </ImageBox>
  
        <Title>
          <h6>Braids & Weaves</h6>
        </Title>
  
        <GButton
          label={'Shop Category'}
          outline
        />
      </Container>
    );
  };
  
  const Container = styled.div`
    width: ${({ width }) => (width ? width : "auto")};
    flex-shrink: 0;
    margin-bottom: 2.3rem;
  `;
  
  const ImageBox = styled.div`
    width: 100%;
    height: 248px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
    }
  `;
  
  const GradientOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  `;
  
  const Title = styled.div`
    margin-top: 1.8rem;
    margin-bottom: 2rem;
  `;
  
  const Badge = styled.div`
    background-color: white;
    border-radius: 100px;
    bottom: 11px;
    right: 11px;
    width: 87px;
    z-index:2;
    padding: 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  `;