import styled from 'styled-components'
import Pagination from '@mui/material/Pagination';




export const GPagination = () => {
    return (
        <Container>
            <Pagination
                size='large'
                count={1}
                variant="outlined"
                defaultPage={1}
                siblingCount={0}
                boundaryCount={2} 
            />
        </Container>
    )
}


const Container = styled.div`

`