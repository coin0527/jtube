import styled from "styled-components";
import { Header } from "./Header";
import { Section1 } from "./Section1";
import { Footer } from "./Footer";

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
