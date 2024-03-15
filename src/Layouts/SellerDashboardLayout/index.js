import styled from 'styled-components'
import {SellerSidebar } from './components'

export const SellerDashboardLayout =({children})=> {
  return (
      <Container>
          <SellerNavbar />
          {children}
          <SellerSidebar/>
      </Container>
  )
}


const Container = styled.main`
    width: 100vw;
`