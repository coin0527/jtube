import styled from "styled-components";
import { Section1 } from "./Section1";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
`;

export const Home = () => {
  return (
    <Wrap>
      <Section1 />
    </Wrap>
  );
};
