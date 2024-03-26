import { memo, } from 'react'
import styled from 'styled-components'
import { CubeIcon, InventoryItemIcon, SellerWalletIcon, TotalCubeIcon } from '../../../../Assets/Svgs'
import { GButton } from '../../../../Ui_elements'
import { SellerTable } from '../Components'
import { DashboardCard, EmptyInventory, InventoryTable } from './Components'
const Inventory = () => {

  const cardItems = [
    {
      title: "Total item ",
      icon: <SellerWalletIcon />,
      count: 0
    },
    {
      title: "Items in stock",
      icon: <SellerWalletIcon />,
      count: 0
    },
    {
      title: "Total item ",
      icon: <InventoryItemIcon />,
      count: 0
    },
    {
      title: "Items out of stock",
      icon: <CubeIcon />,
      count: 0
    },
    {
      title: "Total sold",
      icon: <TotalCubeIcon />,
      count: 0
    },

  ]



  return (
    <Container>
      <CreateShortCut>
        <h5>Products</h5>

        <GButton
          width={"188px"}
          label={"+ Create new product"}
        />
      </CreateShortCut>
      <Header>
        {
          cardItems.map((item, index) => <DashboardCard item={item} key={index} />)
        }
      </Header>
      <MainContent>
        {/* <EmptyInventory /> */}
        {/* <SellerTable
          columns={columns}
        /> */}
        <InventoryTable />
      </MainContent>
    </Container>
  )
}

export default memo(Inventory)

const Container = styled.section`
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  background-color: #FCFCFC;
  padding: 60px 0;
  gap: 1rem;
  margin-bottom: 60px;
`

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;;
`

const CreateShortCut = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 41px;

  h5{
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
  }
`