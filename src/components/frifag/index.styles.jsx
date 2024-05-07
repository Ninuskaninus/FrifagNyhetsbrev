import styled from "styled-components";

export const FrifagItem = styled.div`
margin-top: 4rem;
margin-bottom: 2rem;
h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
`;

export const FrifagCard = styled.div`
background-color: var(--white);
box-shadow: var(--boxShadow);

img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
`;
export const FrifagInfo = styled.div`
padding: 2rem;
h5{
  margin-bottom: 1rem;
}
`;

export const CheckboxContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-top: 2rem;
`;