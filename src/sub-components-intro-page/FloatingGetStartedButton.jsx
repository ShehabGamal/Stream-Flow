import styled from "styled-components";

const GetStartedButton = styled.button`
  background: linear-gradient(to right, #628eff, #8740cd 53%, #580475);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 7px 17px;
  font-size: 0.95rem;
  font-weight: 600;
  width:95%;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", serif;

   &:hover {
    background:  linear-gradient(to left, #628eff, #8740cd 53%, #580475);
  }
`;
export default GetStartedButton;