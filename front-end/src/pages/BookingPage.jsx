import {
  Button,
  Chip,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import styled from "styled-components";
import logo from "../assets/Logo CiGi 2 1.png";

const BpIcon = styled("span")(() => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const Page = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;
const Section1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageLogo = styled.img`
  width: 150px;
  margin-top: 60px;
`;
Section1.Header = styled.h1`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.5rem;
`;
const Section2 = styled.div`
  width: calc(100- 40px) %;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
Section2.Header = styled.h2`
  font-weight: 500;
`;
const ContainerSelectBookingFacility = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  max-height: 400px;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  border-radius: 4px;
`;
const SelectBookingFacility = styled.div`
  width: 320px;
  min-height: 95px;
  background-color: #e2ecff;
  display: flex;
  flex-direction: column;
`;
SelectBookingFacility.Header = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
SelectBookingFacility.Header.Title = styled.span`
  padding: 17px 14px;
`;
SelectBookingFacility.Description = styled.div`
  font-size: 13px;
  padding: 17px 14px;
`;

const Section3 = styled.div`
  width: 100%;
`;
Section3.Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
Section3.Content = styled.div`
  border: 2px dashed #7b61ff;
  padding: 15px;
  border-radius: 5px;
  margin: 5px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
Section3.Time = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 20px;
`;
Section3.action = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem;
`;

function generateButtons() {
  const buttons = [];

  for (let i = 6; i <= 24; i++) {
    const time = i < 10 ? `0${i}:00` : `${i}:00`;
    buttons.push(
      <Button
        key={time}
        variant="outlined"
        style={{
          padding: "10px 20px",
          backgroundColor: "white",
          boxShadow: "3px 5px 7px rgba(0, 0, 0, 0.25)",
          borderWidth: "2px",
          fontSize: "16px",
          borderRadius: "5px",
        }}
      >
        {time}
      </Button>
    );
  }

  return buttons;
}

export default function BookingPage() {
  return (
    <Page>
      <Section1>
        <ImageLogo src={logo} alt="" />
        <Section1.Header>CiGi Futsal and Badminton</Section1.Header>
      </Section1>
      <Section2>
        <Section2.Header>Pilih Fasilitas Sewa</Section2.Header>
        <Divider />
        <RadioGroup>
          <ContainerSelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Futsal
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="female" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
          </ContainerSelectBookingFacility>
        </RadioGroup>
      </Section2>
      <Section3>
        <Section3.Header>
          <Chip
            label={
              <div>
                Booking untuk <b style={{ fontWeight: 800 }}>Lapangan Futsal</b>
              </div>
            }
          />
          <div>December 11, 6:00 PM</div>
        </Section3.Header>
        <Section3.Content>
          <div style={{ boxShadow: "4px 17px 25px rgba(0, 0, 0, 0.25)" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
            </LocalizationProvider>
          </div>
          <Section3.Time>{generateButtons()}</Section3.Time>
        </Section3.Content>
        <Section3.action>
          <Button variant="contained" color="success">
            lanjut proses booking
          </Button>
        </Section3.action>
      </Section3>
    </Page>
  );
}
