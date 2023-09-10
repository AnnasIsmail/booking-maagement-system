import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import background from "../assets/BG.jpg";
import logo from "../assets/Logo CiGi 2 1.png";
import illustration from "../assets/illustration.png";
import lapBadmin from "../assets/lapbadmin.jpg";
import CardHeaderSubHeader from "../components/CardHeaderSubHeader";
import HeaderSection from "../components/HeaderSection";
import MapEmbed from "../components/MapEmbed";
const Page = styled.div`
  width: 100%;
`;

const ImageBackground = styled.img`
  width: 100%;
  border-radius: 0 0 3vw 3vw;
  position: absolute;
  height: 90vh;
  object-fit: cover;
  z-index: -1;
  box-shadow: 4px 17px 25px rgba(0, 0, 0, 0.25);
  filter: blur(2px);
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const Section3 = styled.div`
  min-height: 350px;
`;

Section3.Content = styled.div`
  display: grid;
  margin: 1rem 2rem;
  gap: 2vw;
`;

Section3.Content.Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2vw;
`;

Section3.Content.Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;
`;

const Section4 = styled.div`
  min-height: 350px;
`;

Section4.Content = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 2vw;
  margin: 1rem 2rem;
`;

Section4.Content.Column1 = styled.div``;
Section4.Content.Column2 = styled.div`
  // display: grid;
  // grid-template-rows: 1fr 1fr;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const MaxWidth1280 = styled.div`
  max-width: 1280px;
  margin: auto;
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
              href="/booking"
            >
              Booking kami
            </Button>
            <Button variant="contained">Lokasi Kami</Button>
          </div>
        </Content>
        <ImageIllustration src={illustration} alt="" />
      </Section1>
      <Section2>
        <MaxWidth1280>
          <HeaderSection
            header="Tentang"
            subHeader="CIGI Futsal dan Badminton"
            color="white"
            style={{ margin: "2rem" }}
          />
          <p
            style={{
              color: "#757575",
              backgroundColor: "#E2ECFF",
              margin: "1rem",
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
        </MaxWidth1280>
      </Section2>
      <Section3>
        <MaxWidth1280>
          <HeaderSection
            header="Fasilitas Sewa"
            subHeader="CIGI Futsal dan Badminton"
            color="#454545"
            style={{ margin: "2rem", marginBottom: 0 }}
          />
          <Section3.Content>
            <Section3.Content.Row1>
              <CardHeaderSubHeader
                src={lapBadmin}
                header="Lapangan Badminton"
                subHeader="kita memiliki 3 lapangan badminton yang bisa anda sewa"
                backgroundColor="#E2ECFF"
              />
              <CardHeaderSubHeader
                src={lapBadmin}
                header="Lapangan Badminton"
                subHeader="kita memiliki 3 lapangan badminton yang bisa anda sewa"
                backgroundColor="#E2ECFF"
              />
              <CardHeaderSubHeader
                src={lapBadmin}
                header="Lapangan Badminton"
                subHeader="kita memiliki 3 lapangan badminton yang bisa anda sewa"
                backgroundColor="#E2ECFF"
              />
            </Section3.Content.Row1>
            <Section3.Content.Row2>
              <CardHeaderSubHeader
                src={lapBadmin}
                header="Lapangan Badminton"
                subHeader="kita memiliki 3 lapangan badminton yang bisa anda sewa"
                backgroundColor="#E2ECFF"
              />
              <CardHeaderSubHeader
                src={lapBadmin}
                header="Lapangan Badminton"
                subHeader="kita memiliki 3 lapangan badminton yang bisa anda sewa"
                backgroundColor="#E2ECFF"
              />
            </Section3.Content.Row2>
          </Section3.Content>
        </MaxWidth1280>
      </Section3>
      <Section4>
        <MaxWidth1280>
          <HeaderSection
            header="Lokasi"
            subHeader="CIGI Futsal dan Badminton"
            color="#454545"
            style={{ margin: "2rem", marginBottom: 0 }}
          />
          <Section4.Content>
            <Section4.Content.Column1>
              <MapEmbed />
            </Section4.Content.Column1>
            <Section4.Content.Column2>
              <Card style={{ padding: "1.6rem" }}>
                <h3 style={{ margin: 0 }}>Detail Lokasi</h3>
                <p>
                  Jalan Lingkar Boulevar Blok WA No.1 Summarecon Bekasi Kel,
                  RT.006/RW.003, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa
                  Barat 17142
                </p>
              </Card>
              <Card style={{ padding: "1.6rem" }}>
                <h3 style={{ margin: 0 }}>Kontak</h3>
                <ul>
                  <li>08387713212</li>
                  <li>futban@cigi.co.id</li>
                </ul>
              </Card>
            </Section4.Content.Column2>
          </Section4.Content>
        </MaxWidth1280>
      </Section4>
    </Page>
  );
}
