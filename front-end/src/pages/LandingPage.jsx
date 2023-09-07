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
  border-radius: 0 0 3vw 3vw;
  position: absolute;
  min-height: 90vh;
  object-fit: cover;
  z-index: -1;
`;

const ImageLogo = styled.img`
  width: 150px;
  margin-top: 100px;
`;

const Content = styled.div`
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  display: flex;
  gap: 20px;
  justify-content: canter;
  flex-direction: column;
  width: 100%;
`;

const ImageIllustration = styled.img`
  width: 430px;
  margin-bottom: -80px;
`;

const Section1 = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Section2 = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: #1976d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
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
      <Section2>
        <div
          style={{
            margin: "2rem",
            color: "white",
            width: "calc(100% - 2rem)",
            paddingLeft: "2rem",
          }}
        >
          <h1 style={{ margin: 0 }}>Tentang</h1>
          <h2 style={{ margin: 0 }}>CIGI Futsal dan Badminton</h2>
        </div>
        <p
          style={{
            color: "#757575",
            maxWidth: "70%",
            backgroundColor: "#E2ECFF",
            padding: "1.5em",
            fontSize: "1.3em",
            borderRadius: "20px",
          }}
        >
          CiGi Futsal and Badminton menyediakan tempat untuk sewa lapangan
          futsal dan badminton. Dengan fasilitas terbaik dan tim yang
          berkomitmen, kami berupaya menciptakan lingkungan yang mendukung
          pertumbuhan bakat dan kecintaan terhadap olahraga ini.
        </p>
      </Section2>
    </Page>
  );
}
