import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalEl = styled.div`
  /* position: absolute; */
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 75vw;
  height: 50vh;
`;

export { Overlay, ModalEl };
