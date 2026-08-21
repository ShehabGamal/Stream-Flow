import styled from "styled-components";

const LanguageSelect = styled.select`
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  border: 1px solid #808080;
  border-radius: 2px;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-family: "Plus Jakarta Sans", serif;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default LanguageSelect;