import styled from "styled-components";

const Logo = styled.img`
  width: 32px;
  height: 32px;
  gap: 5px;
  border-radius: 12px;
  background-color:${(props)=>{return props.mini==="mini"?"transparent":"white"}};
  @media (max-width: 800px) {
    width: ${(props)=>{return props.mini==="mini"?"32px":"24px"}};
    height: ${(props)=>{return props.mini==="mini"?"32px":"24px"}};
    gap: 3.75px;
  }
`;

export default Logo;
