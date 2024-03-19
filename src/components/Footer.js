import styled from "styled-components";

const Wrap = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bar = styled.div`
  border: 1px solid black;
`;
const Introduce = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Con = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Imagebox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Con>
          <Logo>logo</Logo>
          <Imagebox>Image</Imagebox>
        </Con>
        <Bar />
        <Introduce>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          officia, libero cumque natus nobis nam voluptatibus quam unde
        </Introduce>
      </Container>
    </Wrap>
  );
};
