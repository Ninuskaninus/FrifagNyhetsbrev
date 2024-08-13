import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 3rem;
box-shadow: var(--boxShadow);
margin-bottom: 2rem;

button{
color: var(--orange);
background-color: transparent;
border: none;
cursor: pointer;
}

h3{
margin-bottom: 1rem;
}

ul{
list-style-type: none;
}

li{
display: flex;
justify-content: space-between;
}
`;