import React, { useState } from "react";
import {
  faBell,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import JTubeLogo from "../Img/Jtube_01.png";

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

const Semi3 = styled.div`
  display: flex;
  height: 30px;
`;

export const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
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
          />
          <Logo
            src={JTubeLogo}
            alt="JTube Logo"
            style={{ cursor: "pointer" }}
          />
        </Semi>
        <Semi2>
          <Input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Please enter a search term"
          />
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
        <Semi3>
          <FontAwesomeIcon
            icon={faSquarePlus}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
          <FontAwesomeIcon
            icon={faBell}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
          <FontAwesomeIcon
            icon={faUser}
            style={{
              marginRight: "15px",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Semi3>
      </Container>
    </Wrap>
  );
};
