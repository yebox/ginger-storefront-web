import styled from 'styled-components'
import EmtpyIcon from "../../Assets/Images/empty-box.png"

export const Empty = () => {
    return (
        <Container>
            <div>
                <img src={EmtpyIcon} alt="Empty Icon" />
                <P>NO ITEM FOUND</P>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 50%; 
        max-width: 200px;
        height: auto;
    }
`;

const P = styled.p`
    font-size: 1.5em;
    margin-top: 10px;
    color: #333;
`;