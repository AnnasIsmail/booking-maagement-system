import PropTypes from "prop-types";
import styled from "styled-components";

export default function HeaderSection({ header, subHeader, color, style }) {
  const Container = styled.div`
    color: ${color};
    width: calc(100% - 2rem);
  `;
  return (
    <Container style={style}>
      <h1 style={{ margin: 0 }}>{header}</h1>
      <h2 style={{ margin: 0, fontWeight: 500 }}>{subHeader}</h2>
    </Container>
  );
}

HeaderSection.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.any,
};
