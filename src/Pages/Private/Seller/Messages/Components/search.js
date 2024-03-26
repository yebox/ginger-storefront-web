import { SearchOff, SearchSharp } from '@mui/icons-material'
import styled from 'styled-components'
import { ChatSearchIcon } from '../../../../../Assets/Svgs'

export const Search = () => {
    return (
        <Container>
            <ChatSearchIcon />
            <Input

            />
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid var(--gray-200);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 13px 20px;
    border-radius: 10px;
`

const Input = styled.input`
    width:100%;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
`