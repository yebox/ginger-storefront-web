import { useState } from "react";
import styled from "styled-components";
import { InfoIcon } from "../../../../Assets/Svgs";
import { GButton, GImageUpload } from "../../../../Ui_elements";
import { useForm } from 'react-hook-form';
import { Processing, Confirmed } from "./components";


const SellerBusinessDocument = () => {
  const [files, setFiles] = useState([])
  // const [processing, setProcessing] = useState(true)
  // const [success, setSuccess] = useState(false)
  const processing = true
  const success = false

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()

  // setProcessing()
  // setSuccess()

  if (processing) {
    return <Processing/>
  }

  if (success) {
    return <Confirmed/>
  }
  return (
    <Container>
      <Topsection>
        <TitleContainer>
          <Title>Business documents</Title>
          <p>3/3</p>
        </TitleContainer>

        <Subtitle>
          <h5>Nice to meet you, Ciroma</h5>
          <p>Let’s verify your business</p>
        </Subtitle>

        <FileContainer>
          <FileTileContainer>
            <h6>CAC Document</h6>
            <InfoIcon />
          </FileTileContainer>
          <GImageUpload
            register={register}
            handleSubmit={handleSubmit}
            trigger={trigger}
            errors={errors}
            files={files}
            setFiles={setFiles}
          />
        </FileContainer>

        <FileContainer>
          <FileTileContainer>
            <h6>Utility Document</h6>
            <InfoIcon />
          </FileTileContainer>
          <GImageUpload
            register={register}
            handleSubmit={handleSubmit}
            trigger={trigger}
            errors={errors}
            files={files}
            setFiles={setFiles}
          />
        </FileContainer>
      </Topsection>

      <GButton
        label={"Next"}
      />
    </Container>
  );
};

export default SellerBusinessDocument;


const Container = styled.main`
  display: flex;
  flex-direction: column;

`

const FileContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`

const Topsection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    /* gap: 3rem; */
`

const FileTileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h2`
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: var(--Primary-500, #ff4623);
`;


const Subtitle = styled.div`
margin-top: 3rem;
width: 85%;

p{
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #626262;
  text-align: left;
  /* margin-top: 20px; */
}
  h5{
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
  }
`;
