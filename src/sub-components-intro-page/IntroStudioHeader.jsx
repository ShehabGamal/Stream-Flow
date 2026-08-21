import styled from "styled-components";

const IntroStudioHeader = styled.h2`
  width: ${(props)=>{return props.type==="secondary"?"537.6px":"86%"}};
  align-self: ${(props)=>{return props.type==="secondary"?"center":null}};
  font-size: ${(props)=>{return props.type==="secondary"?"15px":"auto"}};
  @media (max-width: 800px) {
     width: ${(props)=>{return props.type==="secondary"?"281.25px":"85%"}};
     font-size: ${(props)=>{return props.type==="secondary"?"8px":"13px"}};
  }
`;
export default IntroStudioHeader;
