import Button from "@mui/material/Button";
import styled from "styled-components";
import background from "../assets/BG.jpg";
import logo from "../assets/Logo CiGi 2 1.png";
import illustration from "../assets/illustration.png";
const Page = styled.div`
  width: 100%;
`;

const ImageBackground = styled.img`
  width: 100%;
  border-radius: 0 0 69px 69px;
`;

const ImageLogo = styled.img`
  top: 50px;
  position: absolute;
  width: 150px;
  left: calc(50vw - 75px);
  right: calc(50vw - 75px);
`;

const Content = styled.div`
  color: white;
  font-size: 48px;
  font-weight: bold;
  position: relative;
  top: -600px;
  text-align: center;
  display: flex;
  gap: 20px;
  justify-content: canter;
  flex-direction: column;
  width: 100%;
`;

const ImageIllustration = styled.img`
  position: relative;
  top: -450px;
  left: calc(50% - 219px);
`;

const Section1 = styled.div`
  height: 100vh;
`;

export default function LandingPage() {
  return (
    <Page>
      <Section1>
        <ImageBackground src={background} alt="" />
        <ImageLogo src={logo} alt="" />
        <Content>
          Yuk olahraga!
          <div>Booking Dengan Mudah di Sini</div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "3vw" }}
          >
            <Button
              sx={{ backgroundColor: "white", color: "black" }}
              variant="contained"
            >
              Booking kami
            </Button>
            <Button variant="contained">Lokasi Kami</Button>
          </div>
        </Content>
        <ImageIllustration src={illustration} alt="" />
      </Section1>
    </Page>
  );
}
