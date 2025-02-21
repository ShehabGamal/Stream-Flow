import styled from "styled-components";

const DropDownCard = styled.div`
background-color: rgb(45, 45, 45);
margin-bottom: 3px;
font-size:26px;
padding: 24px;
display:${(props)=>{return parseInt(props.id)===parseInt(props.show)?"block":"none"}}
`;

export default DropDownCard