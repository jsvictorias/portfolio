import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(70rem, 1fr));
  gap: 3rem;
  height: 70vh;
`;
export const ContainerTitle = styled.div`
  text-align: center;

  line-height: 7rem;

  h3 {
    line-height: 5rem;
  }
  h3,
  h5 {
    font-weight: 300;
  }
`;
export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  position: relative;
`;

export const LinhaComIcones = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  font-size: 3vw;
  width: 100%;
  max-width: 60rem;
  position: relative;
  padding: 0 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 0.1rem;
    background-color: var(--primary-color);
    z-index: 0;
  }

  & > * {
    position: relative;
    background-color: var(--background-color);
    z-index: 1;
    padding: 0 0.5rem;
    cursor: pointer;
  }
`;
export const ContainerAnimacao = styled.div`
  position: relative; 
  width: 100%; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  z-index: 0;
  overflow: visible;
`;
