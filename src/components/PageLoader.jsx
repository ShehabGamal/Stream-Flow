import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.$height || "100vh"};
  background: ${(props) => (props.$transparent ? "transparent" : "#000000")};
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-top-color: #8740cd;
  animation: ${spin} 0.8s linear infinite;
`;

// Suspense fallback shown while a lazily-loaded chunk is being fetched.
export default function PageLoader({ height, transparent }) {
  return (
    <Wrapper
      $height={height}
      $transparent={transparent}
      role="status"
      aria-label="Loading"
    >
      <Spinner />
    </Wrapper>
  );
}
