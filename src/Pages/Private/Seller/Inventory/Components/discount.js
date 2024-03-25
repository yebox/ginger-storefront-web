import styled from 'styled-components'
import { GNumberField, GSelectField, GTextField } from '../../../../../Ui_elements'
import { CancelRedIcon } from '../../../../../Assets/Svgs'
import { useState } from 'react'

export const Discount = ({
    register,
}) => {
    const [discounts, setDiscounts] = useState([
        { id: 1, percentage: '', value: '' }
    ]);

    const removeDiscount = (id) => {
        if (discounts.length === 1) {
            return;
        }
        setDiscounts(discounts.filter(discount => discount.id !== id));
    };
    const addNewDiscount = () => {
        const newDiscount = { id: Date.now(), percentage: '', value: '' };
        setDiscounts([...discounts, newDiscount]);
    };

    return (
        <Container>
            {discounts.map(discount => (
                <Flex key={discount.id}>
                    <Content>
                        <GNumberField
                            id="discountNumber"
                            name='discountNumber'
                            register={register}
                        />
                        <GSelectField placeholder={"Discount percentage (%)"} />
                    </Content>

                    <CancelContainer onClick={() => removeDiscount(discount.id)}>
                        <CancelRedIcon />
                    </CancelContainer>
                </Flex>
            ))}

            <AddNew onClick={addNewDiscount}>+ Add new discount</AddNew>
        </Container>

    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`


const Flex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`
const CancelContainer = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FBE9EB;
    cursor: pointer;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

`

const AddNew = styled.p`
    font-size: 16px;
    color: var(--primary-color);
    cursor: pointer;
`