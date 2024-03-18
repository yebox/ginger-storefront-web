import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Account, Cart, Dollar, DownArrow, Like, Logo, Search, BlackX } from '../../../Assets/Svgs'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Skeleton } from '@mui/material';
import { useApiGet } from '../../../Hooks';
import { GTextField, PopMenu } from "../../../Ui_elements";
import { getCategories, getProductBrands } from '../../../Urls';
import { setInitialSubCateogry, setSelectedCategory } from "../../../Redux/Reducers";


const imageLinks = [
  "https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=3411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Navbar = () => {
  const [currentImage, setCurrentImage] = useState([0]);
  const [activeItem, setActiveItem] = useState(null)
  const [showFullOptions, setShowFullOptions] = useState(false);
  const [fullOptionsHovered, setFullOptionsHovered] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.user);

  const navigate = useNavigate();


  useEffect(() => {
    imageLinks.forEach((link) => {
      const image = new Image()
      image.src = link
    })
  }, [])

  const { data, isLoading } = useApiGet(
    ['navbar-categories'],
    () => getCategories(),
    {
      enabled: true,
      refetchOnWindowFocus: false
    }
  )



  const handleNavLinkHover = (index) => {
    setCurrentImage(imageLinks[index]);
    setActiveItem(data[index]);
    setShowFullOptions(true);
  };

  const handleFullOptionsHover = () => {
    setShowFullOptions(true);
    setFullOptionsHovered(true);
  };

  const handleFullOptionsLeave = () => {
    setFullOptionsHovered(false);
    setShowFullOptions(false);
  };

  const handleLowerNavLeave = () => {
    if (!fullOptionsHovered) {
      setShowFullOptions(false);
    }
  };


  const menuItems = [
    { item: 'Logout', action: () => console.log('Edit clicked') },
  ];

  return (
    <OuterContainer>
      <Container>
        <LogoContainer>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </LogoContainer>

        <SearchContainer>
          <GTextField
            placeholder={"What are you searching for?"}
            endIcon={<Search />}
          />
        </SearchContainer>

        <Utility>
          <>
            {user?.accessToken ? (
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
            {/* <Search /> */}
            <Dollar />
            <PopMenu menuItems={menuItems}>
              <DownArrow />
            </PopMenu>
          </Icons>
        </Utility>
      </Container>
      <LowerNav onMouseLeave={handleLowerNavLeave}>
        {
          isLoading ?
            <SkeletonContainer>
              <Skeleton width={100} height={30} />
              <Skeleton width={100} height={30} />
              <Skeleton width={100} height={30} />
              <Skeleton width={100} height={30} />
              <Skeleton width={100} height={30} />
              <Skeleton width={100} height={30} />
            </SkeletonContainer>
            :
            <LowerNavItemContainer>
              <MenuLinksContainer>
                <NavLink
                  to={"/categories/all"}
                // onMouseEnter={() => handleNavLinkHover(0)}
                >
                  All
                </NavLink>

                {
                  data?.map((category, index) => (
                    <NavLink
                      onClick={() => dispatch(setSelectedCategory(category))}
                      key={index}
                      to={`/categories/${category.name}`}
                      onMouseEnter={() => handleNavLinkHover(index)}
                    >
                      {category.name}
                    </NavLink>
                  ))
                }
              </MenuLinksContainer>

              <Links>
                <NavLink to={"/about-us"}>About us</NavLink>
                <NavLink to={"/sell-on-ginger"}>Sell on ginger</NavLink>
              </Links>

            </LowerNavItemContainer>
        }

      </LowerNav>

      {showFullOptions && (
        <FullOptions
          onMouseEnter={handleFullOptionsHover}
          onMouseLeave={handleFullOptionsLeave}
        >
          <div>
            <div>
              {
                activeItem.subCategories?.map((item, index) => {
                  console.log(item, "navbar item")
                  console.log(activeItem, "actove navbar item")

                  return <NavLink
                    onClick={() => {
                      dispatch(setSelectedCategory(activeItem))
                      dispatch(setInitialSubCateogry(item))
                    }}
                    key={index}
                    to={`/categories/${activeItem?.name}?sub_cat=${item?.name}`}
                    onMouseEnter={() => setCurrentImage(`http://172.104.147.51/${item?.images[0]}`)}
                  >
                    {item?.name}
                  </NavLink>
                })
              }
            </div>

            <div>

              {/* <NavLink
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
              </NavLink> */}
            </div>
          </div>

          <ImageHolder>
            <img src={currentImage} />
          </ImageHolder>
        </FullOptions>
      )}

    </OuterContainer>
  );
};

const OuterContainer = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 50;
  
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

const ImageHolder = styled.div`
  background-color: var(--primary-coor);
`

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

const SkeletonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

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

  transition: all 0.3s ease;

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

`;

const LowerNavItemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 3%;
  justify-content: space-between;
`
const LogoContainer = styled.div`
  
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
    object-fit: cover;
    background-color: var(--primary-color);
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

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
    width: 50%;
    background-color: var(--gray-200);
    border-color: var(--gray-200);
    padding: 10px 20px 0 20px;
    border-radius: 100px;

    p{
        font-size: 2rem;
        font-weight: 500;
    }
`
const Cancel = styled(BlackX)`
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }

`

const MenuLinksContainer = styled.div`
  display: flex;
    align-items: center;
    gap: 2rem;
`