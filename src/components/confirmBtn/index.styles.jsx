import styled from "styled-components";

export const ConfirmContainer = styled.div`
margin: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;

a{
  text-decoration: underline;
  margin-bottom: 1rem;
  &:hover{
    font-weight: bold;
  }
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
    margin: 20px 0px;
    cursor: pointer;
    margin-bottom: 2rem;

    &:hover{
      font-weight: bold;
    }
}

p{
  text-align: center;
  font-size: 16px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--darkGray);
  line-height: 1.5;
  
  span{
  color: var(--orange);
}
}


`;