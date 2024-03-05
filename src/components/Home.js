import styled from "styled-components";
import { Header } from "./Header";
import { Section1 } from "./Section1";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
`;

export const Home = () => {
  return (
    <Wrap>
      <Header />
      <Section1 />
    </Wrap>
  );
};
