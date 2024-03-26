import { memo } from 'react'
import styled from 'styled-components'
import { AccountLeftStar, BackArrowIcon } from '../../../../Assets/Svgs'
import { GButton, GImageUpload, GSelectField, GTextAreaField, GTextField } from '../../../../Ui_elements'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Discount, Moq, Section, Variations } from './Components';

const CreateNewProduct = () => {
    const [files, setFiles] = useState([])

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        setValue,
        formState: { errors }
    } = useForm()


    const onSubmit = () => {
        const formDataObj = new FormData();
        files?.forEach((x) => formDataObj.append("images", x));
    };

    const { unitPrice, variation } = watch()


    console.log(unitPrice, variation, "checking")
    const variationSection = [
        {
            title: "Add variations",
            subTitle: "Variations can include product color or sizes",
            children: <Variations
                register={register}
                watch={watch}
                setValue={setValue}
                trigger={trigger}
                variation={variation}
            />

        },
    ]

    const pricingManagementSection = [
        {
            title: () =>
                <TitleContainer>
                    <h6>MOQ <span>(Optional)</span></h6>
                </TitleContainer>
            ,
            subTitle: "Set Minimum Order Quantity",
            children: <Moq
                register={register}
                watch={watch}
                setValue={setValue}
                unitPrice={unitPrice}
            />
        },
        {
            title: () =>
                <TitleContainer>
                    <h6>Discount <span>(Optional)</span></h6>
                </TitleContainer>
            ,
            subTitle: "Set discounts on amount of product purchased",
            children: <Discount
                register={register}
            />
        },
    ]



    return (
        <Container>
            <Header>
                <BackArrowIcon />
                <h6>Create new product</h6>
            </Header>

            <Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormHeaderText>Product details</FormHeaderText>
                    <GTextField
                        id="productName"
                        register={register}
                        placeholder={"Product name"}
                        required
                        name='productName'
                    />

                    <Row>
                        <GTextField
                            id="unitPrice"
                            name='unitPrice'
                            register={register}
                            required
                            placeholder={"₦ Unit price"}
                        />
                        <GTextField
                            id="amountInStock"
                            name='amountInStock'
                            register={register}
                            required
                            placeholder={"Amount in stock"}
                        />
                    </Row>

                    <GTextAreaField
                        id="productDetails"
                        name='productDetails'
                        register={register}
                        required
                        placeholder={"Product details"}

                    />

                    <Row>
                        <GTextField
                            id="skuNumber"
                            name='skuNumber'
                            register={register}
                            required
                            placeholder={"SKU Number"}
                        />
                        <GSelectField
                            id="currency"
                            name='currency'
                            register={register}
                            required
                            placeholder={"Currency"}
                        />
                    </Row>

                    <GSelectField
                        id="brand"
                        name='brand'
                        register={register}
                        required
                        placeholder={"Select brand"}
                    />

                    <Row>
                        <GSelectField
                            id="category"
                            name='category'
                            register={register}
                            required
                            placeholder={"Select category"}
                        />
                        <GSelectField
                            id="subCategory"
                            name='subCategory'
                            register={register}
                            required
                            placeholder={"Select sub-category"}
                        />
                    </Row>

                    <GImageUpload
                        register={register}
                        trigger={trigger}
                        errors={errors}
                        files={files}
                        setFiles={setFiles}
                    />
                </Form>

                <Section
                    header={"Variation Management"}
                    items={variationSection}
                />

                <Section
                    header={"Pricing Management"}
                    items={pricingManagementSection}
                />

                <ButtonContainer>
                    <GButton
                        width={"20%"}
                        label={"Publish product"}
                    />
                </ButtonContainer>
            </Body>
        </Container>
    )
}

export default memo(CreateNewProduct)

const Container = styled.main`

`
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    h6{
        font-size: 28px;
        font-weight: 500;
    }
`

const Body = styled.section`
    padding: 38px;
    width: 100%;
    height: 100%;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20%;
`

const FormHeaderText = styled.h6`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 75px;
`

const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 16px;
    h6{
        font-size: 18px;
        font-weight: 500;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`