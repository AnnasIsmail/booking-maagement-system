import PropTypes from "prop-types";
import styled from "styled-components";

export default function HeaderSection({ header, subHeader, color }) {
  const Container = styled.div`
    margin: 2rem;
    color: ${color};
    width: calc(100% - 2rem);
    padding-left: 2rem;
  `;
  return (
    <Container>
      <h1 style={{ margin: 0 }}>{header}</h1>
      <h2 style={{ margin: 0, fontWeight: 500 }}>{subHeader}</h2>
    </Container>
  );
}

HeaderSection.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
