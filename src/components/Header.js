import React, { useState } from "react";
import { Line } from "./Line";
import styled from "styled-components";
import JTubeLogo from "../Img/Jtube_01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
  faBell,
  faFire,
  faGamepad,
  faGear,
  faGraduationCap,
  faHeart,
  faHome,
  faMagnifyingGlass,
  faMusic,
  faPersonSkating,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faShopify,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  Menu,
  Home,
  Shorts,
  Subscript,
  Popular,
  Shop,
  Music,
  Movie,
  Live,
  Game,
  Sports,
  Study,
  Pot,
} from "../css/Menucss";

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

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  font-size: 25px;
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
        <h3
          style={{
            marginLeft: "15px",
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          장르
        </h3>
        <Popular>
          <FontAwesomeIcon
            icon={faFire}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          인기
        </Popular>
        <Shop>
          <FontAwesomeIcon
            icon={faShopify}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          쇼핑
        </Shop>
        <Music>
          <FontAwesomeIcon
            icon={faMusic}
            style={{
              marginRight: "18px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          음악
        </Music>
        <Movie>
          <FontAwesomeIcon
            icon={faVideo}
            style={{
              marginRight: "15px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          영화
        </Movie>
        <Live>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            style={{
              marginRight: "18px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          생방송
        </Live>
        <Game>
          <FontAwesomeIcon
            icon={faGamepad}
            style={{
              marginRight: "14px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          게임
        </Game>
        <Sports>
          <FontAwesomeIcon
            icon={faPersonSkating}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          스포츠
        </Sports>
        <Study>
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{
              marginRight: "14px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          학습
        </Study>
        <Pot>
          <FontAwesomeIcon
            icon={faSpotify}
            style={{
              marginRight: "20px",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          팟캐스트
        </Pot>
        <Line />

        <Options>
          <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faBell} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faGear} style={{ cursor: "pointer" }} />
        </Options>
        <h5 style={{ textAlign: "center", fontSize: "15px" }}>
          &copy; 2024. JTube. All rights reserved.
        </h5>
      </Menu>
    </Wrap>
  );
};
