import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { ProductSkeleton } from '../../../../Ui_elements'



export const LayoutLoader = () => {
    return (
        <Container>
            <Skeleton width={"100%"} height={"40vh"} />
            <Skeleton width={"100%"} height={"10vh"} />
            <LoadingProduct>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton/>
            </LoadingProduct>
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 5%;
`

const LoadingProduct = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`