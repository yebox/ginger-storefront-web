import styled from 'styled-components'
import { Search } from './Components'

const Messages =()=> {
  return (
      <Container>
          <ContactList>
              <Search/>
          </ContactList>

          <ChatContainer>
              
          </ChatContainer>
      </Container>
  )
}

export default Messages


const Container = styled.main`
    display: flex;
    height: 100%;
    
`
const ContactList = styled.aside`
    flex: 0.3;
    border-right: 1px solid var(--gray-200);
    padding: 0 40px;
`
const ChatContainer = styled.aside`
    flex: 0.7;
`
