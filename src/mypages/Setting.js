import styled from "styled-components";

const Wrap = styled.div`
  padding: 75px;
`;
const Box1 = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid black;
  margin-bottom: 75px;
`;
const UserID = styled.div``;
const Darkmode = styled.div``;
const Box2 = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid black;
`;
const Error = styled.div``;

export const Setting = () => {
  return (
    <Wrap>
      <Box1>
        <UserID />
        <Darkmode />
      </Box1>
      <Box2>
        {/* 깃허브 주소 및 작품소개, 기타 문의사항 */}
        <Error />
      </Box2>
    </Wrap>
  );
};
