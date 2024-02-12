import styled from 'styled-components'
import { BreadCrumbs, Chip } from '../../../Ui_elements'
import { memo } from 'react';
import { categoriesData } from './data';
import { useState } from 'react';

const Categories = () => {
    const [selectCat, setSelectCat] = useState(0)
    return (
        <Container>
            <Breadcrumb>
                <BreadCrumbs />
            </Breadcrumb>

            <Banner>
                <div>
                    <h2>Eyelashes & Brows</h2>
                    <p>Ginger’s wide network of local and international suppliers
                        gives you access to all of your must-have brands
                        and products in one place.
                    </p>
                </div>
            </Banner>

            <ChipContainer>
                {categoriesData.map((item, index) => (
                    <Chip
                        activeIndex={selectCat}
                        onClick={() => setSelectCat(index)}
                        index={index}
                        key={index}
                    >
                        {item}
                    </Chip>
                ))}
            </ChipContainer>


        </Container>
    )
}

export default memo(Categories)

const Container = styled.main`

`

const Breadcrumb = styled.section`
    padding: 2% 5%;
`

const Banner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
                url('https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') 
                center/cover no-repeat;
    background-color: aquamarine;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:2rem;
        position: relative;
        z-index: 2;
        text-align: center;
        h2 {
            font-size: 3rem;
            font-weight: 500;
            color: white;
        }

        p {
            text-align: center;
            color: white;
            width: 60%;
        }
    }
`;

const ChipContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 5%;
    margin-top: 5%;
`