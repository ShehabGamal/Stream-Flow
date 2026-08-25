import styled from "styled-components";

const MoviePagePanel = styled.div`
  display: flex;
  gap: 15px;
  flex-flow: row wrap;

  @media (max-width: 540px) {
     margin-top:30px;
  }
 
`;
export default MoviePagePanel;
