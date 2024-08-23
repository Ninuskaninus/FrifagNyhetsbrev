import styled from "styled-components";

export const Container = styled.div`
position: fixed;
bottom: 0;
background-color: var(--yellow);
width: 100%;
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
cursor: pointer;

h5{
font-size: 16px;

@media (max-width: 768px){
  font-size: 14px;
  }
}
`;