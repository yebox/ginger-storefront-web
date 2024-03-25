import styled from 'styled-components'
import { GSelectField, GTextField } from '../../../../../Ui_elements'
import { CancelRedIcon } from '../../../../../Assets/Svgs'
import { ImageSelect } from './imageSelect'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { clothingStyles, colors, materials, sizes, variations } from '../../../../../Utils';

export const Variations = ({ register, variation, trigger }) => {
    const [files, setFiles] = useState([])
    const [variationItems, setVariationItems] = useState([])


    const setAttributeOption = () => {
        if (variation?.value === "SIZE") {
            return sizes
        }
        if (variation?.value === "COLOR") {
            return colors
        }
        if (variation?.value === "MATERIALS") {
            return materials
        }
        if (variation?.value === "STYLE") {
            return clothingStyles
        }
    }


    return (
        <Container>
            <Flex>
                <GSelectField
                    id="variation"
                    name="variation"
                    register={register}
                    placeholder={"Select variation"}
                    options={variations}
                />

                <GSelectField
                    id="attribute"
                    name="attribute"
                    register={register}
                    options={setAttributeOption()}
                    placeholder={"Select attributes"}
                />
            </Flex>

            <TableDisplay>
                <OuterHeader>
                    <Header>
                        <Box>
                            <Label>Variant name</Label>
                        </Box>
                        <Box>
                            <Label>Selling Price</Label>
                        </Box>
                        <Box>
                            <Label>Quantity</Label>
                        </Box>
                        <Box>
                            <Label>Quantity</Label>
                        </Box>
                        <Box>
                            <Label>Variant image</Label>
                        </Box>
                    </Header>
                    <HeaderCancel>
                        <CancelRedIcon />
                    </HeaderCancel>
                </OuterHeader>


                {
                    variationItems.map((item, index) =>
                        <OuterContent
                            key={index}
                        >
                            <Content>
                                <Box>
                                    <Size>
                                        Size:XXL
                                    </Size>
                                </Box>

                                <Box>
                                    <GTextField
                                        placeholder={"₦ Amount"}
                                    />
                                </Box>

                                <Box>
                                    <GTextField
                                        placeholder={"Amount in stock"}
                                    />
                                </Box>

                                <Box>
                                    <GTextField
                                        placeholder={"SKU"}
                                    />
                                </Box>

                                <Box>
                                    <ImageSelect
                                        register={register}
                                        trigger={trigger}
                                        files={files}
                                        setFiles={setFiles}
                                    />
                                </Box>
                            </Content>
                            <CancelContainer>
                                <CancelRedIcon />
                            </CancelContainer>
                        </OuterContent>
                    )
                }


                {variationItems?.length > 0 && <AddNew>+ Add new discount</AddNew>}


            </TableDisplay>

        </Container>

    )
}

const Container = styled.div`

`

const Flex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`

const TableDisplay = styled.div`
    margin-top: 45px;
`

const Box = styled.div`
    width: calc(100%/8);
`

const Label = styled.label`
    width: 100%;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
`

const OuterContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const OuterHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Size = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-200);
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

const HeaderCancel = styled.div`
    visibility: hidden;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FBE9EB;
    cursor: pointer;
`

const AddNew = styled.p`
    font-size: 16px;
    color: var(--primary-color);
    cursor: pointer;
`