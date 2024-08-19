import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: row;
background-color: var(--white);
box-shadow: var(--boxShadow);
margin-bottom: 2rem;


@media screen and (max-width: 465px){
  flex-direction: column;
  width: 100%;
  div{
    width: 100%;
    height: 200px;
    max-width: 100%;

    img{}
  }
}
`;

export const ImageContainer = styled.div`
  width: 50%;
  max-width: 350px;
  height: 280px;
  object-fit: cover;
  overflow: hidden;

  @media screen and (max-width: 465px){
  height: 400px !important;
  }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.2);

        @media screen and (max-width: 660px){
            transform: scale(1);
        }

        @media screen and (max-width: 465px){
            transform: scale(1.3);
    }
`;


export const CardInfo = styled.div`
padding: 3rem;
display: flex;
width: 100%;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 768px){
  padding: 3rem 1rem;
}

@media screen and (max-width: 465px){
  padding: 1rem;
  gap: 1rem;
}
`;

export const CheckboxContainer = styled.div`
width: 100%;
justify-content: space-between;
display: flex;
`;