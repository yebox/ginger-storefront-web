import { Skeleton } from "@mui/material";
import styled from "styled-components";
import { devices } from "../../Utils";

export const ProductSkeleton = ({ width, mbWidth, user }) => {
  return (
    <SkeletonContainer $width={width} $mbWidth={mbWidth}>
      <Skeleton variant="rectangular" width={`100%`} height={`16rem`} />
      <Seller variant="text" sx={{ fontSize: "14px" }} />
      <Itemdetail variant="text" sx={{ fontSize: "17px" }} />
      {user ? (
        <>
          <Price variant="text" sx={{ fontSize: "22px" }} />
          <Skeleton variant="rectangular" width={`100%`} height={54} />
        </>
      ) : (
        <Skeleton variant="rectangular" width={`100%`} height={35.33} />
      )}
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
  width: ${({ $width }) => ($width ? $width : "17.8rem")};
  flex-shrink: 0;

  @media ${devices.mobileL} {
    width: ${({ $width, $mbWidth }) => ($mbWidth ? $mbWidth : $width)};
  }
`;

const Seller = styled(Skeleton)`
  margin-top: 13px;
`;

const Itemdetail = styled(Skeleton)`
  margin-top: 0.6rem;
  margin-bottom: 5px;
`;

const Price = styled(Skeleton)`
  margin-bottom: 0.6rem;

  @media ${devices.mobileL} {
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;
