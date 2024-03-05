import styled from "styled-components";

const Wrap = styled.div`
  padding: 15px 3%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 20px;
`;

const Semi = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 25px;
  padding-right: 40px;
`;

const SearchButton = styled.button`
  /* 검색 버튼에 대한 스타일링 */
  position: absolute; /* 추가: 절대적 위치 설정 */
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: none;
  background-color: lightgray;
  border-radius: 50%;
  cursor: pointer;
`;

const Semi2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Semi3 = styled.div`
  display: flex;
`;

const Create = styled.div``;
const Alam = styled.div``;
const User = styled.div``;

export const Header = () => {
  return (
    <Wrap>
      <Container>
        <Semi>
          <Menu>메뉴</Menu>
          <Logo>JTube</Logo>
        </Semi>
        <Semi2>
          <InputWrapper>
            <Input />
            <SearchButton>검색</SearchButton>
          </InputWrapper>
        </Semi2>
        <Semi3>
          <Create>1</Create>
          <Alam>2</Alam>
          <User>3</User>
        </Semi3>
      </Container>
    </Wrap>
  );
};
