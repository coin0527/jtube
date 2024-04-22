import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
//css
const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: lightgray;
`;

const Box1 = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 450px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 5%;
`;

const IconWrapper = styled.div`
  .icon {
    font-size: inherit;
  }
  @media screen and (max-width: 768px) {
    .icon {
      font-size: 100px;
    }
  }
`;

export const Section1 = () => {
  return (
    <Wrap>
      <Container>
        <Box1 />
        <IconWrapper>
          <FontAwesomeIcon icon={faSackDollar} className="icon" />
        </IconWrapper>
      </Container>
    </Wrap>
  );
};
