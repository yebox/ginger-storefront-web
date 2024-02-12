import styled from 'styled-components'
import Pagination from '@mui/material/Pagination';




export const GPagination = () => {
    return (
        <Container>
            <Pagination
                size='large'
                count={100}
                variant="outlined"
                defaultPage={6}
                siblingCount={0}
                boundaryCount={2} 
            />
        </Container>
    )
}


const Container = styled.div`

`