import styled from 'styled-components'
import { GSwitch } from '../../../../../Ui_elements'
import { useState } from 'react';

export const Section = ({ header, items }) => {
    const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));

    const handleToggle = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <Container>
            <Header>{header}</Header>
            {items.map((item, index) => (
                <MainItem key={index}>
                    <MainItemHeader $component={item?.component}>
                        <MainItemHeaderDetails>
                            {typeof item.title === "function" ? item.title() : <Title>{item.title}</Title>}
                            <p>{item.subTitle}</p>
                        </MainItemHeaderDetails>
                        <GSwitch
                            handleChange={() => handleToggle(index)}
                            isChecked={checkedItems[index] || false}
                            name={""}
                        />
                    </MainItemHeader>
                    {checkedItems[index] && (
                        <Children>
                            {item.children}
                        </Children>
                    )}
                </MainItem>
            ))}
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    margin-bottom: 70px;
`
const Title = styled.h6`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
`

const Header = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 48px;
`
const Children = styled.div`
    width: 100%;
    padding: 0 26px 35px 26px;

`

const MainItem = styled.div`
    width: 100%;
    border: 1px solid var(--gray-200);
    margin-bottom: 14px;
`

const MainItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: ${({ component }) => component ? '1px solid var(--gray-200)' : 'none'};
    padding: 35px 26px;
`
const MainItemHeaderDetails = styled.div`
    p{
        font-size: 16px;
        color: var(--gray-300)
    }
`