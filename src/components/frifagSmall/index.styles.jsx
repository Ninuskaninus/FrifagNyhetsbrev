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
  }
}
`;

export const ImageContainer = styled.div`
  width: 50%;
  max-width: 350px;
  height: 250px;
  object-fit: cover;

    img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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