import { Skeleton } from '@mui/material'
import styled from "styled-components"


const SkeletonContainer = styled.div`

`


export const ProductSkeleton = () => {
    return (
        <SkeletonContainer>
            <Skeleton width={300} height={300} />
            <Skeleton width={300} height={20} />
            <Skeleton width={300} height={20} />
            <Skeleton width={150} height={20} />
        </SkeletonContainer>
    )
}

