import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bars = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`;

const Text = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightskyblue;
  text-align: center;
  padding: 80px;
  white-space: pre-line;
  text-shadow: 2px 4px silver;

  p1 {
    font-size: 50px;
    font-weight: bold;
    color: snow;
  }
  p2 {
    font-size: 60px;
    font-weight: bold;
    color: snow;
  }
`;

const Line = styled.div`
  width: 50%;
  border: 5px solid snow;
  border-radius: 10px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  text-align: center;
`;

const Sns = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const open = (url) => {
  window.open(url, "_blank");
};

export const Footer = () => {
  return (
    <Wrap>
      <Bars />
      <Text>
        <p1>
          ☆彡
          <br />
          Starlight Garden
        </p1>
        <p2>
          <br />
          OFFICAL SNS
        </p2>
        <Line />
        <Sns>
          <div
            onClick={() => open("https://www.instagram.com/allday_0709/?hl=ko")}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "80px", color: "white" }}
            />
          </div>
          <div
            onClick={() => open("https://www.instagram.com/allday_0709/?hl=ko")}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "80px", color: "snow" }}
            />
          </div>
          <div onClick={() => open("/")}>
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: "80px", color: "snow" }}
            />
          </div>
        </Sns>
      </Text>
    </Wrap>
  );
};
