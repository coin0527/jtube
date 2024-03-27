import styled, { css, keyframes } from "styled-components";

export const slideInMenu = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const slideOutMenu = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Menu = styled.div`
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
export const Home = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Shorts = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Subscript = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Popular = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Shop = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Music = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Movie = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Live = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Game = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Sports = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Study = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
export const Pot = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition-duration: 0.3s;
    border-radius: 10px;
  }
`;
