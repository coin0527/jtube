import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: lightgray;
`;

const Box1 = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 450px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 5%;
`;

export const Section1 = () => {
  return (
    <Wrap>
      <Container>
        <Box1 />
        <Box1 />
      </Container>
    </Wrap>
  );
};
