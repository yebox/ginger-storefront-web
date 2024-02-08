import styled from "styled-components"
import { Button } from "../../../Ui_elements"
export const SellerCard =()=> {
  return (
      <Container>
          <div>
              <img src="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <h6>Met Beauty Store</h6>
          </div>
          
          <div>
              <Button
                label={"Visit store"}
              />
          </div>
      </Container>
  )
}

const Container = styled.div`   
    position: relative;
    min-width: 20rem;
    height: 20rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: var(--gray-100);
    padding-bottom: 2rem;
    margin-right: 2rem;
    >div:nth-child(1){
        position: absolute;
        top: 0;
        left: 0;
        min-width: 20rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 20px;
        padding-bottom: 20px;

        h6{
            position: relative;
            z-index: 3;
            font-size: 2rem;
            color: white;
            transition: all 0.3s ease;
        }
    }
    >div:nth-child(2){
        width: 50%;
    }
    img{
        position: absolute;
        top: 0;
        left: 0;
        min-width: 20rem;
        height: 20rem;
        object-fit: cover;
        transition: all 0.3s ease;
        filter: brightness(0.8);
        /* display: none; */
    }

    &:hover{
        img,div:nth-child(1){
            height: 13rem;
        }
    }
`
