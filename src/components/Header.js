import styled from "styled-components";

const Wrap = styled.div`
  padding: 30px 5%;
  border: 1px solid black;
  border-radius: 10px;
`;
// css
// 속성값을 지정해주는 역할을 함.

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;
const Logo = styled.div`
  font-weight: 700;
`;
const Menu = styled.button`
  border: 1px solid pink;
  border-radius: 10px;
  cursor: pointer;
  background-color: lightblue;
`;

export const Header = () => {
  return (
    <Wrap>
      <Container>
        <Logo>Logo</Logo>
        <Menu>버튼</Menu>
      </Container>
    </Wrap>
  );
};
