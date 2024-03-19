import { Skeleton } from '@mui/material'
import styled from "styled-components"
import { useState, useEffect } from "react";


const SkeletonContainer = styled.div`

`

export const ProductSkeleton = ({ number, padding }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const parsedPadding = parseFloat(padding);

    let availableWidth;
    if (typeof parsedPadding === "number") {
        availableWidth = screenWidth - parsedPadding;
    } else if (typeof parsedPadding === "string" && parsedPadding.includes("%")) {
        const percentage = parseFloat(parsedPadding.replace("%", ""));
        availableWidth = screenWidth - (screenWidth * percentage / 100);
    } else if (typeof parsedPadding === "string" && parsedPadding.includes("px")) {
        availableWidth = screenWidth - parseFloat(parsedPadding);
    }

    const width = availableWidth / number;

    return (
        <SkeletonContainer>
            <Skeleton width={"100%"} height={400} />
            <Skeleton width={width-50} height={40} />
            <Skeleton width={"100%"} height={80} />
        </SkeletonContainer>
    );
};
