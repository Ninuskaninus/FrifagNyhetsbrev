import styled from "styled-components";

export const EmailContainer = styled.div`
box-shadow: var(--boxShadow);
    padding: 4rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px){
    padding: 2rem;
    }
    

    h3{
      margin-bottom: 1rem;
    }

    p{
      margin-bottom: 2rem;
    }

    span{
      color: var(--orange);
    }
      button{
      background-color: var(--orange);
    height: 60px;
    width: 250px;
    color: white;
    font-size: 16px;
    padding: 10px;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 25px;
    margin-top: 2rem;
    cursor: pointer;

    &:hover{
      font-weight: bold;
    }
}
`;

export const EmailInput = styled.div`
width: 100%;
input{
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--orange);
  border-radius: 5px;
  height: 2.5rem;
  margin-top: 0.5rem;
}

`;