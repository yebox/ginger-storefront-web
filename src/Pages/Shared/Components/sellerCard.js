import styled from "styled-components";
import { GButton } from "../../../Ui_elements";
import { IMAGE_BASE_URL } from "../../../Utils";
import { useNavigate } from 'react-router-dom';
export const SellerCard = ({ width, marginRight, item }) => {
  const navigate = useNavigate()
  return (
    <Container
      width={width}
      marginRight={marginRight}
    >
      <div>
        <img src={item?.backgroundImage ? `${IMAGE_BASE_URL}${item.backgroundImage}` : "https://images.unsplash.com/photo-1560879311-370fd4561a0d?q=80&w=3343&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <h6>{item?.name}</h6>
      </div>

      <div>
        <GButton
          onClick={() => navigate(`/store?sellerId=${encodeURIComponent(JSON.stringify(item?.sellerId))}`, {state: item})}
          label={"Visit store"}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 25rem;
  width: ${({ width }) => (width ? width : "100%")} !important;
  height: 20rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: var(--gray-100);
  padding-bottom: 2rem;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "0")};
  > div:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 25rem;
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20px;
    padding-bottom: 20px;

    h6 {
      position: relative;
      z-index: 3;
      font-size: 2rem;
      color: white;
      transition: all 0.3s ease;
    }
  }
  > div:nth-child(2) {
    width: 50%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    object-fit: cover;
    transition: all 0.3s ease;
    filter: brightness(0.8);
    /* display: none; */
  }

  &:hover {
    img,
    div:nth-child(1) {
      height: 13rem;
    }
  }
`;
