import styled from 'styled-components'
import {SellerSidebar } from './components'

export const SellerDashboardLayout =()=> {
  return (
      <Container>
          {/* <SellerNavbar/> */}
          <SellerSidebar/>
      </Container>
  )
}


const Container = styled.main`
    width: 100vw;
`