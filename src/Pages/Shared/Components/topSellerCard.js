import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
// import { formatImage } from "../../../Utils";

const TopSellerCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <article className="card">
        <header className="card__thumb">
          <img
            src={
              "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </header>
        <div className="card__body">
          <h2 className="card__title">{item?.name}</h2>
          <div className="card__description">
            <VisitBtn
              onClick={() =>
                navigate(
                  `/store?sellerId=${encodeURIComponent(
                    JSON.stringify(item?.sellerId)
                  )}`,
                  { state: item }
                )
              }
            >
              Visit store
            </VisitBtn>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default TopSellerCard;

const Container = styled.div`
  max-width: 370px;
  border: 1px solid #b6b6b64f;

  .card {
    background-color: #fff;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); */
    overflow: hidden;
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
  }

  .card a {
    color: inherit;
    text-decoration: none;
  }

  /* .card:hover {
    box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.1);
  } */

  .card__thumb {
    height: 245px;
    background-color: #000;
    overflow: hidden;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
  }

  .card__thumb img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    display: block;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, transform 0.5s;
    transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  }

  .card:hover .card__thumb {
    height: 180px;
  }

  .card:hover .card__thumb img {
    opacity: 0.6;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .card__body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    padding: 20px;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
  }

  .card:hover .card__body {
    height: 130px;
  }

  .card__category {
    position: absolute;
    top: -25px;
    left: 0;
    height: 25px;
    padding: 0 15px;
    background-color: coral;
    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 25px;
  }

  .card__title {
    color: var(--White, #151515);
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 40.8px */
  }

  .card__subtitle {
    margin: 0;
    padding: 0 0 10px 0;
    font-size: 19px;
    color: coral;
  }

  .card__description {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 60%;
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .card:hover .card__description {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .card__footer {
    position: absolute;
    bottom: 12px;
    left: 20px;
    right: 20px;
    font-size: 11px;
    color: #a3a9a2;
  }

  .icon {
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    font-size: 18px;
  }

  .icon + .icon {
    padding-left: 10px;
  }
`;

const VisitBtn = styled.div`
  display: flex;
  width: 160px;
  height: 45px;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 2px;
  background: var(--Black-500, #151515);
  color: var(--Shade-White, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  cursor: pointer;
`;
