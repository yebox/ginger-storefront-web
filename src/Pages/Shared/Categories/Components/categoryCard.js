import styled from 'styled-components'
import { GButton } from '../../../../Ui_elements'
import { IMAGE_BASE_URL } from '../../../../Utils';
import { useNavigate } from 'react-router-dom';

export const CategoryCard = ({ width, item }) => {
  const navigate = useNavigate()
  const imageLinks = [
    "https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=3411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const randomIndex = Math.floor(Math.random() * imageLinks.length);
  const randomImageLink = imageLinks[randomIndex];


  return (
    <Container width={width}>
      <ImageBox>
      <img src={item?.images[0] ? `${IMAGE_BASE_URL}${item.images[0]}` : randomImageLink} />
        <Badge>
          {item?.categoryBrands?.length} Brands
        </Badge>
        <GradientOverlay />
      </ImageBox>

      <Title>
        <h6>{item?.name}</h6>
      </Title>

      <GButton
        label={'Shop Category'}
        outline
        onClick={()=>navigate(`/categories/${encodeURIComponent(item?.name)}?cat=${encodeURIComponent(JSON.stringify(item))}&sub_cat=${encodeURIComponent(JSON.stringify(item?.subCategories[0]))}&activeInit=${decodeURIComponent(item?.subCategories[0]?._id)}$init=${item?.subCategories[0]?.name}`,{replace:true})}
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
    margin: 0.8rem 0;
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