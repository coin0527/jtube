import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 30px;
  h3 {
    color: #333;
    display: flex;
    justify-content: center;
    line-height: 30px;
  }
`;

export const Footer = () => {
  return (
    <Wrap>
      <h3> &copy; 2024. JTube. All rights reserved. </h3>
    </Wrap>
  );
};
