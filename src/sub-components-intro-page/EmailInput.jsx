import styled from "styled-components";


const EmailInput = styled.input`
  min-width: 280px;
  padding: 14px 16px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #8c8c8c;
  border-radius: 4px;
  color: #ffffff;
  font-family: "Plus Jakarta Sans", serif;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

export default EmailInput;