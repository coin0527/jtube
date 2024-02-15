import styled from "styled-components";

const Wrap = styled.div`
  text-align: center;
  line-height: 300px;
  display: flex;
  justify-content: space-between;
`;
//css

const Box1 = styled.div`
  background-color: beige;
  width: 200px;
  height: 200px;
`;
const Box2 = styled.div`
  background-color: crimson;
  width: 200px;
  height: 200px;
`;
const Box3 = styled.div`
  background-color: orange;
  width: 200px;
  height: 200px;
`;

export const Header = () => {
  return (
    <Wrap>
      {/* 부모 */}
      <Box1>1</Box1>
      {/* 자식 */}
      <Box2>2</Box2>
      <Box3>3</Box3>
    </Wrap>
  );
};
