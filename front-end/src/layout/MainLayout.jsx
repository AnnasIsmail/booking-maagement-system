import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: auto;
`;

export default function MainLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
