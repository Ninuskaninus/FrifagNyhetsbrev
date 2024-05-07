import styled from "styled-components";

export const EmailContainer = styled.div`
box-shadow: var(--boxShadow);
    margin: 50px 0;
    padding: 4rem;
    background-color: var(--white);
    

    h3{
      margin-bottom: 1rem;
    }

    p{
      margin-bottom: 2rem;
    }

    span{
      color: var(--orange);
    }
`;

export const EmailInput = styled.div`
input{
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--orange);
  border-radius: 5px;
  height: 2.5rem;
  margin-top: 0.5rem;
}

`;