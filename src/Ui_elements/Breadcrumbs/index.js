import styled from "styled-components";
import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { devices, formatUrlName } from "../../Utils";

export const GBreadCrumbs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Container>
      <MUIBreadcrumbs aria-label="breadcrumb" separator="›">
        <TextLink onClick={() => navigate("/")}>Home</TextLink>
        {pathnames.map((name, index) => {
          const navigateTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Text key={name}>{formatUrlName(name)}</Text>
          ) : (
            <TextLink key={name} onClick={() => navigate(navigateTo)}>
              {formatUrlName(name)}
            </TextLink>
          );
        })}
      </MUIBreadcrumbs>
    </Container>
  );
};

const Container = styled.div`
  & .MuiBreadcrumbs-separator {
    margin-bottom: 1px !important;
  }
`;

const TextLink = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
`;

const Text = styled.p`
  color: var(--Color---5, #8c8c8c);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */

  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
`;
