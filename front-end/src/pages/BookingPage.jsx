import styled from "styled-components";
import logo from "../assets/Logo CiGi 2 1.png";
const Section1 = styled.div``;
const ImageLogo = styled.img`
  width: 150px;
  margin-top: 100px;
`;
export default function BookingPage() {
  return (
    <div>
      <Section1>
        <ImageLogo src={logo} alt="" />

        <h1>CiGi Futsal and Badminton</h1>
      </Section1>
    </div>
  );
}
