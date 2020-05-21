import styled from 'styled-components'


export const Button = styled.input.attrs((props)=>({
    type:props.type

  
}))`
grid-area:"button";
letter-spacing: 0.1rem;
  font-size: ${(props) => props.fontSize ?? "2rem"};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.background};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.formButtonColor};
  padding: ${(props) => props.padding ?? "2rem"};
  border: 2px solid ${(props) => props.borderColor};
  font-weight: ${(props) => props.fontWeight ?? 500};
  
  cursor: pointer;
 

`