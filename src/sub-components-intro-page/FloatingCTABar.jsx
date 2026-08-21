import styled from "styled-components";

const FloatingCTABar = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 14px 16px calc(14px + env(safe-area-inset-bottom, 0px));
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 35%,
      rgba(0, 0, 0, 0.92) 100%
    );
    z-index: 1000;
    box-sizing: border-box;
    transform: translateY(${(props) => props.$visible ? "0%" : "120%"});
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition:
      transform 0.35s ease,
      opacity 0.35s ease;
  }
`;

export default FloatingCTABar