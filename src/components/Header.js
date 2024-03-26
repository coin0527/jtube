import {
  faBell,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Semi = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: calc(50vw - 150px);
  max-width: 650px;
  height: 30px;
  border-radius: 25px;
  padding-right: 40px;

  @media screen and (max-width: 1200px) {
    width: calc(40vw - 150px);
  }

  @media screen and (max-width: 800px) {
    width: calc(30vw - 150px);
  }

  @media screen and (max-width: 600px) {
    width: calc(80vw - 150px);
  }
`;

const Semi2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Semi3 = styled.div`
  display: flex;
`;
export const Header = () => {
  return (
    <Wrap>
      <Container>
        <Semi>
          <FontAwesomeIcon
            icon={faBars}
            style={{
              marginRight: "30px",
              fontSize: "24px",
              marginTop: "10px",
            }}
          />
          <Logo>JTube</Logo>
        </Semi>
        <Semi2>
          <InputWrapper>
            <Input />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                color: "#333",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "24px",
                marginTop: "10px",
              }}
            />
          </InputWrapper>
        </Semi2>
        <Semi3>
          <FontAwesomeIcon
            icon={faSquarePlus}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          />
          <FontAwesomeIcon
            icon={faBell}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          />
          <FontAwesomeIcon
            icon={faUser}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          />
        </Semi3>
      </Container>
    </Wrap>
  );
};
