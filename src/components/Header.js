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
import { Link } from "react-router-dom";

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
          <Link to="/">
            <Logo
              src={JTubeLogo}
              alt="JTube Logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
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
          <Link to="/">
            <FontAwesomeIcon
              icon={faHome}
              style={{
                marginRight: "20px",
                marginLeft: "20px",
                fontSize: "18px",
              }}
            />
            홈
          </Link>
        </Home>
        <Shorts>
          <Link to="/shorts">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            Shorts
          </Link>
        </Shorts>
        <Subscript>
          <Link to="/subscribe">
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            구독
          </Link>
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
          <Link to="/popular">
            <FontAwesomeIcon
              icon={faFire}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            인기
          </Link>
        </Popular>
        <Shop>
          <Link to="/shopping">
            <FontAwesomeIcon
              icon={faShopify}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            쇼핑
          </Link>
        </Shop>
        <Music>
          <Link to="/music">
            <FontAwesomeIcon
              icon={faMusic}
              style={{
                marginRight: "18px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            음악
          </Link>
        </Music>
        <Movie>
          <Link to="/movie">
            <FontAwesomeIcon
              icon={faVideo}
              style={{
                marginRight: "15px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            영화
          </Link>
        </Movie>
        <Live>
          <Link to="/live">
            <FontAwesomeIcon
              icon={faBarsStaggered}
              style={{
                marginRight: "18px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            생방송
          </Link>
        </Live>
        <Game>
          <Link to="/game">
            <FontAwesomeIcon
              icon={faGamepad}
              style={{
                marginRight: "14px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            게임
          </Link>
        </Game>
        <Sports>
          <Link to="/sports">
            <FontAwesomeIcon
              icon={faPersonSkating}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            스포츠
          </Link>
        </Sports>
        <Study>
          <Link to="/study">
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{
                marginRight: "14px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            학습
          </Link>
        </Study>
        <Pot>
          <Link to="/">
            <FontAwesomeIcon
              icon={faSpotify}
              style={{
                marginRight: "20px",
                fontSize: "18px",
                marginLeft: "20px",
              }}
            />
            팟캐스트
          </Link>
        </Pot>
        <Line />
        <Options>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer" }} />
          </Link>
          <Link to="/bell">
            <FontAwesomeIcon icon={faBell} style={{ cursor: "pointer" }} />
          </Link>
          <Link to="/setting">
            <FontAwesomeIcon icon={faGear} style={{ cursor: "pointer" }} />
          </Link>
        </Options>
        <h5 style={{ textAlign: "center", fontSize: "15px" }}>
          &copy; 2024. JTube. All rights reserved.
        </h5>
      </Menu>
    </Wrap>
  );
};
