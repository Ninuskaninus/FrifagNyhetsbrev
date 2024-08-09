import styled from "styled-components";

export const Card = styled.div`
background-color: var(--white);
box-shadow: var(--boxShadow);
width: 48%;
margin-bottom: 20px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: space-between;

img{

    object-fit: cover;
}

@media screen and (max-width: 768px){
    width: 100%;
}
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 280px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardInfo = styled.div`
  box-shadow: var(--boxShadow);
    box-sizing: border-box;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;

    h5{
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px){
    justify-content: center;
    min-height: auto;
}

`;

export const CheckboxContainer = styled.div`
margin-top: 1rem;
`;