import styled from 'styled-components'
import { CancelRedIcon } from '../../../../../Assets/Svgs'
import { GNumberField, GTextField } from '../../../../../Ui_elements'
import { useEffect } from 'react'
import { useState } from 'react';

export const Moq = ({ register, watch, setValue, unitPrice }) => {
    const moqNumber = watch("moqNumber");
    const [fieldRows, setFieldRows] = useState([
        {
            moqNumber: {
                id: "moqNumber",
                name: "moqNumber",
                register: register,
                setValue: setValue,
                defaultValue: 1,
                required: true
            },
            moqPrice: {
                id: "moqPrice",
                name: "moqPrice",
                register: register,
                isDisbled: true,
                required: true
            }

        },

    ]);
    useEffect(() => {
        setValue("moqPrice", moqNumber * unitPrice);
    }, [moqNumber, unitPrice, setValue]);


    const handleCancel = (index) => {
        if (fieldRows.length === 1) {
            return;
        }
        setFieldRows(prevState => prevState.filter((_, i) => i !== index));
    };

    return (
        <OuterContainer>
            {fieldRows.map(({ moqNumber, moqPrice }, index) => (
                <Container key={index}>
                    <Content>
                        <GNumberField
                            id={moqNumber.id}
                            name={moqNumber.name}
                            register={moqNumber.register}
                            setValue={moqNumber.setValue}
                            defaultValue={moqNumber.defaultValue}
                            required={moqNumber.required}
                        />
                        <GTextField
                            id={moqPrice.id}
                            name={moqPrice.name}
                            register={moqPrice.register}
                            required={moqPrice.required}
                            isDisabled={moqPrice.isDisbled}
                        />
                    </Content>
                    <CancelContainer onClick={() => handleCancel(index)}>
                        <CancelRedIcon />
                    </CancelContainer>
                </Container>
            ))}
        </OuterContainer>
    )
}



const Container = styled.div`
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
`

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

`

const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`