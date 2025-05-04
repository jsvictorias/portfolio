import styled from "styled-components";

export const ToggleWrapper = styled.label`
  position: relative;
  width: 50px;
  height: 25px;
  display: inline-block;
`;

export const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #ff4375;
  }

  &:checked + span::before {
    transform: translateX(25px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffcdd4;
  transition: 0.4s;
  border-radius: 9999px;
  color: #000;
  width: 5.5rem;

  &::before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 5px;
    bottom: 2px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
    font-size: 1.2rem;
  }
`;
export const IconWrapper = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? "26px" : "5px")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  transition: left 0.4s;
`;
