import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
grid-area:"input";
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: "Open Sans";
  font-size: 1.5rem;
  

  border: 2px solid #aaa;
  padding: 2rem;

  ::placeholder {
    font-weight: 400;
    opacity: 0.9;
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.formInputBorderColor};
    box-shadow: 0 0 8px 0 ${(props) => props.theme.colors.formInputBorderColor};
  }
`;
