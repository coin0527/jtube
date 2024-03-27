import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  faBars,
  faHeart,
  faHome,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JTubeLogo from "../Img/Jtube_01.png";
import { Line } from "./Line";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Wrap = styled.div`
  padding: 15px 3%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
`;

const Logo = styled.img`
  font-weight: 700;
  height: 35px;
`;

const Semi = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const Input = styled.input`
  width: calc(50vw - 150px);
  max-width: 650px;
  height: 30px;
  border-radius: 25px;
  padding-right: 40px;
  padding-left: 20px;
`;

const Semi2 = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const slideInMenu = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOutMenu = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  padding: 30px 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation-name: ${slideInMenu};
        `
      : css`
          animation-name: ${slideOutMenu};
        `}
`;
const Home = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;
const Shorts = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;
const Subscript = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Wrap>
      <Container>
        <Semi>
          <FontAwesomeIcon
            icon={faBars}
            style={{
              marginRight: "30px",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          />
          <Logo
            src={JTubeLogo}
            alt="JTube Logo"
            style={{ cursor: "pointer" }}
          />
        </Semi>
        <Semi2>
          <Input type="text" placeholder="Please enter a search term" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              color: "#333",
              marginLeft: "10px",
              cursor: "pointer",
              fontSize: "24px",
            }}
          />
        </Semi2>
      </Container>
      <Menu isOpen={showMenu}>
        <Home>
          <FontAwesomeIcon
            icon={faHome}
            style={{
              marginRight: "20px",
              marginLeft: "20px",
              fontSize: "18px",
            }}
          />
          홈
        </Home>
        <Shorts>
          <FontAwesomeIcon
            icon={faYoutube}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          Shorts
        </Shorts>
        <Subscript>
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          구독
        </Subscript>
        <Line />
      </Menu>
    </Wrap>
  );
};
