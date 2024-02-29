import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import { GTextField } from '../../../Ui_elements'
// import { GTextField } from '../../../Ui_elements'
import {
  Account,
  Cart,
  Dollar,
  DownArrow,
  Like,
  Logo,
  Search,
} from "../../../Assets/Svgs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const imageLinks = [
  "https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557353425-6c61136de070?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1474648676916-0558486e7fa0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Navbar = () => {
  const [currentImage, setCurrentImage] = useState([0]);
  const [showFullOptions, setShowFullOptions] = useState(false);
  const [fullOptionsHovered, setFullOptionsHovered] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    imageLinks.forEach((link) => {
      const image = new Image();
      image.src = link;
    });
  }, []);

  const handleNavLinkHover = (index) => {
    setCurrentImage(imageLinks[index]);
    setShowFullOptions(true);
  };

  const handleFullOptionsHover = () => {
    setShowFullOptions(true);
    setFullOptionsHovered(true);
  };

  const handleFullOptionsLeave = () => {
    setFullOptionsHovered(false);
    setShowFullOptions(false);
    // if (!fullOptionsHovered) {
    //     setShowFullOptions(false);
    // }
  };

  const handleLowerNavLeave = () => {
    if (!fullOptionsHovered) {
      setShowFullOptions(false);
    }
  };

  return (
    <OuterContainer>
      <Container>
        <Links>
          <NavLink to={"/about-us"}>About us</NavLink>
          <NavLink to={"/sell-on-ginger"}>Sell on ginger</NavLink>
        </Links>

        <LogoContainer>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </LogoContainer>

        <Utility>
          <>
            {user ? (
              <Flex onClick={() => navigate("/account")}>
                <Avatar
                  sx={{
                    bgcolor: "var(--primary-color)",
                    width: "24px",
                    height: "24px",
                  }}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=3279&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <p>{user.firstName}</p>
              </Flex>
            ) : (
              <Flex>
                <Account />
                <Link to={"/signup"}>Sign up</Link>
              </Flex>
            )}

            <Flex>
              <Cart />
              <Link to={"/cart"}>Cart</Link>
            </Flex>
          </>

          <Icons>
            <Link to="/wish-list">
              <Like />
            </Link>

            <Search />
            <Dollar />
            <DownArrow />
          </Icons>
        </Utility>
      </Container>
      <LowerNav onMouseLeave={handleLowerNavLeave}>
        <div>
          <NavLink
            to={"/categories/all"}
            onMouseEnter={() => handleNavLinkHover(0)}
          >
            All
          </NavLink>
          <NavLink
            to={"/categories/hair"}
            onMouseEnter={() => handleNavLinkHover(1)}
          >
            Hair
          </NavLink>
          <NavLink
            to={"/categories/nails"}
            onMouseEnter={() => handleNavLinkHover(2)}
          >
            Nails
          </NavLink>
          <NavLink
            to={"/categories/eyelashes"}
            onMouseEnter={() => handleNavLinkHover(0)}
          >
            Eyelashes
          </NavLink>
          <NavLink
            to={"/categories/skin"}
            onMouseEnter={() => handleNavLinkHover(1)}
          >
            Skin and Body
          </NavLink>
          <NavLink
            to={"/categories/equipment"}
            onMouseEnter={() => handleNavLinkHover(2)}
          >
            Equipment
          </NavLink>
        </div>
      </LowerNav>

      {showFullOptions && (
        <FullOptions
          onMouseEnter={handleFullOptionsHover}
          onMouseLeave={handleFullOptionsLeave}
        >
          <div>
            <div>
              <NavLink
                to="/haircare"
                onMouseEnter={() => setCurrentImage(imageLinks[0])}
              >
                Haircare
              </NavLink>
              <NavLink
                to="/haircoloring"
                onMouseEnter={() => setCurrentImage(imageLinks[1])}
              >
                Hair colouring
              </NavLink>
              <NavLink
                to="/hair-tools"
                onMouseEnter={() => setCurrentImage(imageLinks[2])}
              >
                Hair tools
              </NavLink>
              <NavLink
                to="/hair-acessories"
                onMouseEnter={() => setCurrentImage(imageLinks[1])}
              >
                Hair accessories
              </NavLink>
              <NavLink
                to="/hair-styling"
                onMouseEnter={() => setCurrentImage(imageLinks[2])}
              >
                Styling
              </NavLink>
            </div>

            <div>
              <NavLink
                to="/perm"
                onMouseEnter={() => setCurrentImage(imageLinks[0])}
              >
                Perm and relaxer
              </NavLink>
              <NavLink
                to="/texturizer"
                onMouseEnter={() => setCurrentImage(imageLinks[1])}
              >
                Texturizer
              </NavLink>
              <NavLink
                to="/wig"
                onMouseEnter={() => setCurrentImage(imageLinks[2])}
              >
                Wigs and extensions
              </NavLink>
              <NavLink
                to="/wig-tools"
                onMouseEnter={() => setCurrentImage(imageLinks[1])}
              >
                Wig tools
              </NavLink>
            </div>
          </div>

          <div>
            <img src={currentImage} />
          </div>
        </FullOptions>
      )}

      {/* <SearchContainer>
                <p>Search</p>
                <GTextField
                    endIcon={<Search />}
                />
                <Cancel />
            </SearchContainer> */}
    </OuterContainer>
  );
};

const OuterContainer = styled.nav`
  width: 100%;
  position: relative;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-self: flex-start;
`;

const Utility = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-self: flex-end;
  float: right;
`;
// const AccountCart = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1.5rem;
// `

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.85;

    a {
      color: unset;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 5vh;
  padding-left: 1.2rem;
  border-left: 1px solid var(--gray-300);
`;

const LowerNav = styled.div`
  width: 100%;
  background-color: var(--lower-nav);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-color) !important;
      color: var(--primary-color) !important;
    }
  }
  > a.active {
    color: var(--black);
    border-bottom: 1px solid var(--primary-color) !important;
    padding-bottom: 3px !important;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const FullOptions = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vh;
  gap: 20%;
  padding: 5%;
  position: absolute;
  top: 18vh;
  left: 0;
  z-index: 10;
  border: 1px solid var(--gray-200);

  img {
    width: 24rem;
    height: 15.2rem;
  }

  > div:nth-child(1) {
    display: flex;
    width: fit-content;
    justify-content: center;
    min-width: 400px;
    gap: 20%;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

// const SearchContainer = styled.div`
//     display: flex;
//     align-items: center;
//     gap:2rem;
//     width: 100%;
//     padding: 2% 5%;
//     p{
//         font-size: 2rem;
//         font-weight: 500;
//     }
// `
// const Cancel = styled(BlackX)`
//     cursor: pointer;
//     transition: all 0.3s ease;
//     &:hover{
//         transform: scale(1.1);
//     }

// `
