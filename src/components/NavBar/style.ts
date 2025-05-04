import styled from "styled-components";
import { NavLinksProps } from "./props";

export const ContainerNavbar = styled.div`
  height: 6rem;
  background-color: #ffcdd4;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  list-style: none;
  gap: 3rem;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 6rem;
    left: 0;
    width: 100%;
    height: ${({ isMenuOpen }) => (isMenuOpen ? "calc(100vh - 60vh)" : "0")};
    background-color: #ffcdd4;
    flex-direction: column;
    gap: 2rem;
    padding: ${({ isMenuOpen }) => (isMenuOpen ? "2rem 0" : "0")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 9;
  }
`;

export const NavLi = styled.li`
  cursor: pointer;
  position: relative;
  color: #000;
  font-size: 2rem;
  text-align: left;
  margin-left: 3rem;

  &::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    min-height: 0.2rem;
    background: #fd99a2;
    transition: all 300ms ease-in;
  }

  &:hover::after {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;

    &::after {
      top: 3rem;
    }
  }
`;
